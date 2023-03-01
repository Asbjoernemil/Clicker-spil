"use strict";
let lives = 3;
let points = 0;
window.addEventListener("load", start);

/* ========= Animationen startes =========*/

function start() {
  console.log("Spillet starter");

  addAnimations();

  addClick();
}

// ========= Der kan clickes på elementer =========
function addClick() {
  document
    .querySelector("#gold_container1")
    .addEventListener("mousedown", clickGold);
  document
    .querySelector("#gold_container2")
    .addEventListener("mousedown", clickGold);
  document
    .querySelector("#gold_container3")
    .addEventListener("mousedown", clickGold);

  document
    .querySelector("#coal_container1")
    .addEventListener("mousedown", clickCoal);
  document
    .querySelector("#coal_container2")
    .addEventListener("mousedown", clickCoal);
  document
    .querySelector("#coal_container3")
    .addEventListener("mousedown", clickCoal);
  document
    .querySelector("#diamond_container1")
    .addEventListener("mousedown", clickDiamond);
  document
    .querySelector("#diamond_container2")
    .addEventListener("mousedown", clickDiamond);
}

// ========= Der kaldes på animationer =========
function addAnimations() {
  document
    .querySelector("#gold_container1")
    .classList.add("falling" + pickAnimation());
  document
    .querySelector("#gold_container2")
    .classList.add("falling" + pickAnimation());
  document
    .querySelector("#gold_container3")
    .classList.add("falling" + pickAnimation());
  document
    .querySelector("#coal_container1")
    .classList.add("falling" + pickAnimation());
  document
    .querySelector("#coal_container2")
    .classList.add("falling" + pickAnimation());
  document
    .querySelector("#coal_container3")
    .classList.add("falling" + pickAnimation());
  document
    .querySelector("#diamond_container1")
    .classList.add("falling" + pickAnimation());
  document
    .querySelector("#diamond_container2")
    .classList.add("falling" + pickAnimation());
  document.querySelector("#stopwatch_sprite").classList.add("rotate");
}

// ========= animationer falder random =========
function pickAnimation() {
  let num = Math.ceil(Math.random() * 12);
  return num;
}

/* =========GULD========= */
function clickGold() {
  let gold = this;
  console.log("clicked");

  /* Forhindre at der kan gentages clicks */
  gold.removeEventListener("mousedown", clickGold);

  /* Animation når der clickes på elementet */
  gold.classList.add("paused");
  gold.querySelector(".sprite").classList.add("zoom_out");
  gold.querySelector(".splash").classList.add("zoom_inout");
  gold.querySelector(".splash").addEventListener("animationend", goldGone);

  /* Tilføj points */
  points += 50;
  console.log("har nu " + points + " point");
  displayPoints();
}

function animationRestart() {
  console.log("restart");
  let num = this;

  // Sæt tilfældig position SKAL FJERNES
  num.classList.remove(
    "falling1",
    "falling2",
    "falling3",
    "falling4",
    "falling5",
    "falling6",
    "falling7",
    "falling8",
    "falling9",
    "falling10",
    "falling11",
    "falling12"
  );
  let falling = Math.floor(Math.random() * 12);
  num.classList.add("falling" + animationRestart());

  num.classList.remove("falling");
  num.offsetWidth;
  num.classList.add("falling");
  num.addEventListener("animationend", animationRestart);
}

function goldGone() {
  console.log(this);

  /* animation restartes når der clickes*/
  let splash = this;
  let container = this.parentElement;
  let sprite = container.querySelector(".sprite");

  container.classList.remove(
    "falling1",
    "falling2",
    "falling3",
    "falling4",
    "falling5",
    "falling6",
    "falling7",
    "falling8",
    "falling9",
    "falling10",
    "falling11",
    "falling12"
  );
  container.classList.remove("paused");
  container.offsetWidth;
  container.classList.add("falling" + pickAnimation());
  sprite.classList.remove("zoom_out");
  splash.classList.remove("zoom_inout");

  /* Vi kan clicke igen*/
  container.addEventListener("mousedown", clickGold);
}
/* =========DIAMANT========= */
function clickDiamond() {
  let diamond = this;
  console.log("clicked");
  /* Forhindre at der kan gentages clicks */
  diamond.removeEventListener("mousedown", clickDiamond);

  /* Animation når der clickes på elementet */
  diamond.classList.add("paused");
  diamond.querySelector(".sprite").classList.add("zoom_out");
  diamond.querySelector(".splash").classList.add("zoom_inout");
  diamond
    .querySelector(".splash")
    .addEventListener("animationend", diamondGone);

  // Der tilføjes point
  points += 100;
  console.log("har nu " + points + " point");
  displayPoints();
}

function diamondGone() {
  console.log(this);

  /* animation restartes*/
  let splash = this;
  let container = this.parentElement;
  let sprite = container.querySelector(".sprite");

  container.classList.remove(
    "falling1",
    "falling2",
    "falling3",
    "falling4",
    "falling5",
    "falling6",
    "falling7",
    "falling8",
    "falling9",
    "falling10",
    "falling11",
    "falling12"
  );
  container.classList.remove("paused");
  container.offsetWidth;
  container.classList.add("falling" + pickAnimation());
  sprite.classList.remove("zoom_out");
  splash.classList.remove("zoom_inout");

  /* Vi kan clicke igen*/
  container.addEventListener("mousedown", clickDiamond);
}

/*=========KUL=========*/
function clickCoal() {
  let coal = this;
  console.log("clicked2");

  /* Forhindre at der kan gentages clicks */
  coal.removeEventListener("mousedown", clickCoal);

  /* Animation når der clickes på elementet */
  coal.classList.add("paused");
  coal.querySelector(".sprite").classList.add("zoom_out");
  coal.querySelector(".splash").classList.add("zoom_inout");

  loseLife();
  coal.querySelector(".splash").addEventListener("animationend", coalGone);
}

/* Der mistes liv ved at trykke på kul */
function loseLife() {
  displaylife();
  lives--;
}

// Liv greyscales
function displaylife() {
  console.log("heart broken");
  document
    .querySelector("#minecart_sprite" + lives)
    .classList.remove("active_heart");
  document
    .querySelector("#minecart_sprite" + lives)
    .classList.add("broken_heart");
}

// Scoreboard
function displayPoints() {
  console.log("vis point");
  document.querySelector("#point_count").textContent = points;

  if (points >= 200) {
  }
}

function coalGone() {
  console.log(this);
  /* animation restartes*/
  let splash = this;
  let container = this.parentElement;
  let sprite = container.querySelector(".sprite");

  container.classList.remove(
    "falling1",
    "falling2",
    "falling3",
    "falling4",
    "falling5",
    "falling6",
    "falling7",
    "falling8",
    "falling9",
    "falling10",
    "falling11",
    "falling12"
  );
  container.classList.remove("paused");
  container.offsetWidth;
  container.classList.add("falling" + pickAnimation());
  sprite.classList.remove("zoom_out");
  splash.classList.remove("zoom_inout");

  /* Vi kan clicke igen*/
  container.addEventListener("mousedown", clickCoal);
}
