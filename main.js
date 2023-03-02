//
let countDownDate = new Date("Dec 30, 2023 23:59:59").getTime();
//
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  //
  let dateDiff = countDownDate - dateNow;
  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
//
let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // function sttarted ?no

window.onscroll = function () {
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
//

let pSpans = document.querySelectorAll(".progress span");
let section = document.querySelector(".our-skills");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 250) {
    pSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
//

let span = document.querySelector(".up");

window.onscroll = function () {
  this.scrollY >= 1000
    ? span.classList.add("show")
    : span.classList.remove("show");
};
span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
