// (function(){
//   var body = document.body,
//       startX = -100,
//       startY = -100,
//       w = document.documentElement.offsetWidth,
//       h = document.documentElement.offsetHeight;

// 	body.addEventListener('mousemove', function(evt){
//     var posX = Math.round(evt.clientX / w * startX)
//     var posY = Math.round(evt.clientY / h * startY)
//     body.style.backgroundPosition = posX + 'px ' + posY + 'px'
//   })
// })()

const music = document.querySelector(".player__music");
const playerBtn = document.querySelector(".player__btn");
const timeline = document.querySelector(".player__timeline");
const playhead = document.querySelector(".player__playhead");
const subtrackBtn = document.querySelector(".player__btn_subtrack");
const player = document.querySelector(".player");
const songDuration = document.querySelector(".player__song-duration");

function play() {
  if (music.paused) {
    music.play();
    playerBtn.classList.remove("player__btn_play");
    playerBtn.classList.add("player__btn_pause");
  } else {
    music.pause();
    playerBtn.classList.remove("player__btn_pause");
    playerBtn.classList.add("player__btn_play");
  }
}
playerBtn.addEventListener("click", play);

music.onloadedmetadata = function () {
  songDuration.textContent =
    Math.floor(music.duration / 60) + ":" + Math.floor(music.duration % 60);
};

// Закрашивание тайлайна
music.addEventListener("timeupdate", function () {
  const playPercent = 100 * (music.currentTime / music.duration);
  playhead.style.width = playPercent + "%";
});

// Отсчет времени песни
music.addEventListener("timeupdate", function () {
  const songDuration = document.querySelector(".player__song-duration");
  var s = parseInt(music.currentTime % 60);
  var m = parseInt((music.currentTime / 60) % 60);
  if (s < 10) {
    songDuration.textContent = m + ":0" + s;
  } else {
    songDuration.textContent = m + ":" + s;
  }
});

// Вычисляем ширину оставшегося времени на таймлайне
let timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

// Вычисление смещения относительно левого края вьюпорта
function getPosition(el) {
  return el.getBoundingClientRect().left;
}

// Возвращение клика в виде десятичной дроби
function clickPercent(evt) {
  return (evt.clientX - getPosition(timeline)) / timelineWidth;
}

// Вычисление новой ширины плейхэда после нажатия на таймлайн
function moveplayhead(evt) {
  evt.clientX - getPosition(timeline);
}

// Событие при клике
timeline.addEventListener("click", function (evt) {
  moveplayhead(evt);
  music.currentTime = music.duration * clickPercent(evt);
});

music.onended = function () {
  playerBtn.classList.remove("player__btn_pause");
  playerBtn.classList.add("player__btn_play");
};
// // makes playhead draggable
// playhead.addEventListener('mousedown', mouseDown, false);
// window.addEventListener('mouseup', mouseUp, false);

// // Boolean value so that audio position is updated only when the playhead is released
// var onplayhead = false;

// // mouseDown EventListener
// function mouseDown() {
//     onplayhead = true;
//     window.addEventListener('mousemove', moveplayhead, true);
//     music.removeEventListener('timeupdate', timeUpdate, false);
// }

// // mouseUp EventListener
// // getting input from all mouse clicks
// function mouseUp(event) {
//     if (onplayhead == true) {
//         moveplayhead(event);
//         window.removeEventListener('mousemove', moveplayhead, true);
//         // change current time
//         music.currentTime = duration * clickPercent(event);
//         music.addEventListener('timeupdate', timeUpdate, false);
//     }
//     onplayhead = false;
// }
// // mousemove EventListener

// // timeUpdate
// // Synchronizes playhead position with current point in audio
// function timeUpdate() {
//     var playPercent = timelineWidth * (music.currentTime / duration);
//     playhead.style.marginLeft = playPercent + "px";
//     if (music.currentTime == duration) {
//         pButton.className = "";
//         pButton.className = "play";
//     }
// }
