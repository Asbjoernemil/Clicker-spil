"use strict";
let lives = 3;
let points = 0;
window.addEventListener("load", start);

/* Animationen startes*/

function start() {
  console.log("Spillet starter");
  document.querySelector("#gold_container").classList.add("falling2");
  document.querySelector("#coal_container").classList.add("falling3");
  document.querySelector("#stopwatch_sprite").classList.add("rotate");

  document
    .querySelector("#gold_container")
    .addEventListener("mousedown", clickGold);

  document
    .querySelector("#coal_container")
    .addEventListener("mousedown", clickCoal);
}

/* GULD */
function clickGold() {
  console.log("clicked");
  /* Forhindre at der kan gentages clicks */
  document
    .querySelector("#gold_container")
    .removeEventListener("mousedown", clickGold);

  /* Animation når der clickes på elementet */
  document.querySelector("#gold_container").classList.add("paused");
  document.querySelector("#gold_sprite").classList.add("zoom_out");
  document.querySelector("#gold_splash").classList.add("splash");

  document
    .querySelector("#gold_splash")
    .addEventListener("animationend", goldGone);
  incrementPoints();
}

function goldGone() {
  /* animation restartes*/

  document.querySelector("#gold_container").classList.remove("falling2");
  document.querySelector("#gold_container").classList.remove("paused");
  document.querySelector("#gold_container").offsetWidth;
  document.querySelector("#gold_container").classList.add("falling2");
  document.querySelector("#gold_sprite").classList.remove("zoom_out");
  document.querySelector("#gold_splash").classList.remove("splash");

  /* Vi kan clicke igen*/
  document
    .querySelector("#gold_container")
    .addEventListener("mousedown", clickGold);
}

/*KUL*/
function clickCoal() {
  console.log("clicked2");
  /* Forhindre at der kan gentages clicks */
  document
    .querySelector("#coal_container")
    .removeEventListener("mousedown", clickCoal);

  /* Animation når der clickes på elementet */
  document.querySelector("#coal_container").classList.add("paused");
  document.querySelector("#coal_sprite").classList.add("zoom_out");
  document.querySelector("#coal_splash").classList.add("splash");

  loseLife();
  document
    .querySelector("#coal_splash")
    .addEventListener("animationend", coalGone);
}

/* Der mistes liv ved at trykke på kul */
function loseLife() {
  displaylife();
  lives--;
}

function displaylife() {
  console.log("heart broken");
  document
    .querySelector("#minecart_sprite" + lives)
    .classList.remove("active_heart");
  document
    .querySelector("#minecart_sprite" + lives)
    .classList.add("broken_heart");
}

function incrementPoints() {
  console.log("Giv point");
  //   if (points == 5) {
  //     levelComplete();
  //   } else {
  //     displayPoints();
  //   }
  points++;
  console.log("har nu " + points + " point");
  displayPoints();
}

function displayPoints() {
  console.log("vis point");
  document.querySelector("#point_count").textContent = points;
}

function coalGone() {
  /* animation restartes*/

  document.querySelector("#coal_container").classList.remove("falling3");
  document.querySelector("#coal_container").classList.remove("paused");
  document.querySelector("#coal_container").offsetWidth;
  document.querySelector("#coal_container").classList.add("falling3");
  document.querySelector("#coal_sprite").classList.remove("zoom_out");
  document.querySelector("#coal_splash").classList.remove("splash");

  /* Vi kan clicke igen*/
  document
    .querySelector("#coal_container")
    .addEventListener("mousedown", clickCoal);
}
