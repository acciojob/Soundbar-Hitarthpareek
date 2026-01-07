let audio = document.createElement("audio");
document.body.appendChild(audio);
 
document.getElementById("applause").onclick = function () {
  audio.src = "sounds/applause.mp3";
  audio.play();
};

document.getElementById("boo").onclick = function () {
  audio.src = "sounds/boo.mp3";
  audio.play();
};

document.getElementById("gasp").onclick = function () {
  audio.src = "sounds/gasp.mp3";
  audio.play();
};

document.getElementById("tada").onclick = function () {
  audio.src = "sounds/tada.mp3";
  audio.play();
};

document.getElementById("victory").onclick = function () {
  audio.src = "sounds/victory.mp3";
  audio.play();
};

document.getElementById("wrong").onclick = function () {
  audio.src = "sounds/wrong.mp3";
  audio.play();
};

document.querySelector(".stop").onclick = function () {
  audio.pause();
  audio.currentTime = 0;
};
