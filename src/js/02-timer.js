import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;

const convertMs = ms => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
};
let selectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selected = selectedDates[0].getTime();
    if (selected < options.defaultDate.getTime()) {
     Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      //console.log(selectedDates[0]);//
      return selectedDate = selectedDates[0];
    }
  },
};

flatpickr('#datetime-picker', options);
function addLeadingZero(value) {
  if (value < 10) {
    return value.toString().padStart(2, '0');
  } else {
    return value;
  }
}

let daysHtml = document.querySelector('[data-days]');
let hoursHtml = document.querySelector('[data-hours]');
let minutesHtml = document.querySelector('[data-minutes]');
let secondsHtml = document.querySelector('[data-seconds]');

const getDifference = () => {
  const todayTime = new Date().getTime();
  const difference = selectedDate.getTime() - todayTime;
  if (difference < 1000) {
    clearInterval(timerId);
  }
  const resultDays = convertMs(difference).days;
  daysHtml.textContent = addLeadingZero(resultDays);

  const resultHours = convertMs(difference).hours;
  hoursHtml.textContent = addLeadingZero(resultHours);

  const resultMinutes = convertMs(difference).minutes;
  minutesHtml.textContent = addLeadingZero(resultMinutes);

  const resultSeconds = convertMs(difference).seconds;
  secondsHtml.textContent = addLeadingZero(resultSeconds);
};

let timerId = null;
startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  getDifference();
  timerId = setInterval(() => {
    getDifference();
  }, 1000);
});
