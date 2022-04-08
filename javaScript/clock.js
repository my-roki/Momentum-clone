const clock = document.querySelector("#clock");

// clock.innerText = "clock";

function getZero(text) {
  if (text.length < 2) {
    return `0${text}`;
  } else {
    return text;
  }
}

function getClock() {
  clock.innerText = new Date();

  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hour}:${minute}:${second}`;
}

getClock();
setInterval(getClock, 1000);
