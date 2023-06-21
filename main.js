let hours;
let minutes;
let seconds;
let AMPM;
function showTime() {
  let date = new Date();
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  if (hours > 12) {
    hours = hours - 12;
    AMPM = "PM";
  } else {
    AMPM = "AM";
  }
  document.getElementById("hr").innerText =
    hours.toString().length === 1 ? "0" + hours : hours;
  document.getElementById("min").innerText =
    minutes.toString().length === 1 ? "0" + minutes : minutes;
  document.getElementById("sec").innerText =
    seconds.toString().length === 1 ? "0" + seconds : seconds;
  document.getElementById("AP").innerText = AMPM;
}
window.onload = showTime();

setInterval(showTime, 1000);

