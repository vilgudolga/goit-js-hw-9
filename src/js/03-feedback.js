import { throttle } from 'lodash';
const form = document.querySelector('form');
const email = form.querySelector('input');
const text = form.querySelector('textarea');

form.addEventListener(
    'input',
        throttle((event) => {
            const input = { email: form.elements.email.value, message: form.elements.message.value };
            localStorage.setItem('feedback-form-state', JSON.stringify(input));
    }, 500));
    
    form.removeEventListener('blur',()=> {
        document.style.background = pink;
    });
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const { elements: { email, message } } = e.currentTarget;
        console.log({ email: email.value, message: message.value });
    
        e.currentTarget.reset();
        localStorage.clear();
    });
    
    const storage = localStorage.getItem('feedback-form-state');
    const parseStorageData = JSON.parse(storage);
    const tryFoo = () => {
        if (parseStorageData !== null) {
            email.value = parseStorageData.email;
            text.value = parseStorageData.message;
        };
    };
    
    tryFoo();