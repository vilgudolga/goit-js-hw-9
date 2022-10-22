import { throttle } from "lodash";
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
let lastSession = {};
form.addEventListener('input', throttle(
    () => {
        localStorage.setItem("feedback-form-state", JSON.stringify({ email: email.value, message: message.value }))
    }, 500));
try {
    lastSession = JSON.parse(localStorage.getItem('feedback-form-state'));
    if(lastSession!==null){
        email.value=lastSession.email;
        message.value=lastSession.message;
     }
    } catch (err) {
    console.log('Parse error:' + err.message);
}
form.addEventListener('submit', e => {
    e.preventDefault();
    console.log({ email: email.value, message: message.value });
    form.reset();
    localStorage.removeItem('feedback-form-state');
})
