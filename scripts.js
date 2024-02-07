

function loadPage() {

}

function yesClick() {
  var start = document.getElementById("divStart");
  var done = document.getElementById("divDone");
  start.style.display = "none";
  done.style.display = "block";
}

function noClick() {
  var noButton = document.getElementById("noId");
  noButton.style.position = "absolute";
  let x1 = generateRandom(0, window.innerWidth - 80);
  let y1 = generateRandom(0, window.innerHeight - 30);
  noButton.style.left = x1.toString() + "px";
  noButton.style.top = y1.toString() + "px";
}

function imgClick() {
  var done = document.getElementById("divDone");
  var final = document.getElementById("divFinal");
  done.style.display = "none";
  final.style.display = "block";
}

function generateRandom(min = 0, max = 100) {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;
  return rand;
}

