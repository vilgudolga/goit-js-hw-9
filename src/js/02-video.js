import { throttle } from 'lodash';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
player.on('timeupdate',throttle(({ seconds }) => {
    localStorage.setItem('videoplayer-current-time', `${seconds}`);
  }, 1000)
);
const savedTime = localStorage.getItem('videoplayer-current-time');
player
  .setCurrentTime(savedTime)
  .then(function (seconds) {
})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError': break;
      default: break;
}});
