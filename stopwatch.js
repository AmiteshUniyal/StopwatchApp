
const pause = document.getElementById("pause");
const play = document.getElementById("play");
let toggle = true;
let Time = null;
let seconds = 0,
  minutes = 0,
  hours = 0,
  milisec = 0;
let displaytime = document.getElementById("time");
function start_timer() {
  milisec++;
  if (milisec === 100) {
    milisec = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        hours++;
        minutes = 0;
      }
    }
  }
  displaytime.innerHTML =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds) +
    ":" +
    (milisec < 10 ? "0" + milisec : milisec);
}
function start() {
  if (toggle) {
    if (Time !== null) {
      clearInterval(Time);
    }
    Time = setInterval(start_timer, 10);
    toggle = false;
    play.style.display = "none";
    pause.style.display = "block";
  } else {
    clearInterval(Time);
    toggle = true;
    play.style.display = "block";
    pause.style.display = "none";
  }
}
function restart() {
  clearInterval(Time);
  seconds = 0;
  minutes = 0;
  hours = 0;
  milisec = 0;
  displaytime.innerHTML = "00:00:00:00";
  toggle = true;
  play.style.display = "block";
  pause.style.display = "none";
}