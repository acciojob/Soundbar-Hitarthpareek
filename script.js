let audio; // will store current playing sound

document.getElementById("applause").onclick = function () {
  audio = new Audio("sounds/applause.mp3");
  audio.play();
};

document.getElementById("boo").onclick = function () {
  audio = new Audio("sounds/boo.mp3");
  audio.play();
};

document.getElementById("gasp").onclick = function () {
  audio = new Audio("sounds/gasp.mp3");
  audio.play();
};

document.getElementById("tada").onclick = function () {
  audio = new Audio("sounds/tada.mp3");
  audio.play();
};

document.getElementById("victory").onclick = function () {
  audio = new Audio("sounds/victory.mp3");
  audio.play();
};

document.getElementById("wrong").onclick = function () {
  audio = new Audio("sounds/wrong.mp3");
  audio.play();
};

document.querySelector(".stop").onclick = function () {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
};
