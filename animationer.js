"use strict";
let lives = 0;
let points = 0;
window.addEventListener("load", ready);

function ready() {
  console.log("game ready");
  //   startskræm
  document.querySelector("#start_btn").addEventListener("click", start);
  document.querySelector("#start_btn").classList.add("pulse");

  document
    .querySelector("#gameOver_btn")
    .addEventListener("click", showStartScreen);
  document.querySelector("#gameOver_btn").classList.add("pulse");

  document
    .querySelector("#levelComplete_btn")
    .addEventListener("click", showStartScreen);
  document.querySelector("#levelComplete_btn").classList.add("pulse");

  document.querySelector("#start").classList.remove("hidden");
}

function showGameScreen() {
  // Skjul startskærm, game over og level complete
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}

function showStartScreen() {
  // fjern hidden fra startskærm og tilføj til game over og level complete
  document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
  resetLives();
}

function resetPoints() {
  // nulstil point
  points = 0;
  // nulstil vising af point
  displayPoints();
}

function resetLives() {
  // sæt lives til 3
  lives = 3;

  //nulstil visning
  document.querySelector("#minecart_sprite1").classList.add("active_heart");
  document.querySelector("#minecart_sprite1").classList.remove("broken_heart");
  document.querySelector("#minecart_sprite2").classList.add("active_heart");
  document.querySelector("#minecart_sprite2").classList.remove("broken_heart");
  document.querySelector("#minecart_sprite3").classList.add("active_heart");
  document.querySelector("#minecart_sprite3").classList.remove("broken_heart");
}

/* ========= Animationen startes =========*/
function start() {
  lives = 3;
  points = 0;
  console.log("Spillet starter");

  document.querySelector("#start").classList.add("hidden");

  resetPoints();

  resetLives();

  addAnimations();

  addClick();

  unClickedEvents();

  startTimer();

  addHiddenElements();
}

function addHiddenElements() {
  document.querySelector("#diamond_container1").classList.remove("hidden");
  document.querySelector("#diamond_container2").classList.remove("hidden");
  document.querySelector("#gold_container1").classList.remove("hidden");
  document.querySelector("#gold_container2").classList.remove("hidden");
  document.querySelector("#gold_container3").classList.remove("hidden");
  document.querySelector("#coal_container1").classList.remove("hidden");
  document.querySelector("#coal_container2").classList.remove("hidden");
  document.querySelector("#coal_container3").classList.remove("hidden");
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

// Når der ikke clickes
function unClickedEvents() {
  document
    .querySelector("#gold_container1")
    .addEventListener("animationiteration", unClicked);
  document
    .querySelector("#gold_container2")
    .addEventListener("animationiteration", unClicked);
  document
    .querySelector("#gold_container3")
    .addEventListener("animationiteration", unClicked);

  document
    .querySelector("#coal_container1")
    .addEventListener("animationiteration", unClicked);
  document
    .querySelector("#coal_container2")
    .addEventListener("animationiteration", unClicked);
  document
    .querySelector("#coal_container3")
    .addEventListener("animationiteration", unClicked);
  document
    .querySelector("#diamond_container1")
    .addEventListener("animationiteration", unClicked);
  document
    .querySelector("#diamond_container2")
    .addEventListener("animationiteration", unClicked);
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
}

function startTimer() {
  document.querySelector("#stopwatch_sprite").classList.remove("rotate");
  document.querySelector("#stopwatch_sprite").offsetWidth;
  document.querySelector("#stopwatch_sprite").classList.add("rotate");

  document.querySelector("#background_music").currentTime = 0;
  document.querySelector("#background_music").loop = 6;
  document.querySelector("#background_music").play();

  document
    .querySelector("#stopwatch_sprite")
    .addEventListener("animationend", timeOut);
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

  //   lydeffekt når der clickes
  document.querySelector("#good_element").currentTime = 0;
  document.querySelector("#good_element").play();

  /* Tilføj points */
  points += 50;
  console.log("har nu " + points + " point");
  displayPoints();
}

function timeOut() {
  if (points >= 400) {
    levelComplete();
  } else {
    gameOver();
  }
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

  document.querySelector("#good_element").currentTime = 0;
  document.querySelector("#good_element").play();

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

  //   Kig i consolen*****************************************
  document.querySelector("#bad_element").currentTime = 0;
  document.querySelector("#bad_element").play();
}

/* Der mistes liv ved at trykke på kul */
function loseLife() {
  displaylife();
  lives--;

  if (lives === 0) {
    gameOver();
  }
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

// unClicks falder random
function unClicked() {
  console.log(this);
  /* animation restartes*/
  let container = this;

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
  container.offsetWidth;
  container.classList.add("falling" + pickAnimation());
}

function levelComplete() {
  console.log("Level Complete");
  document.querySelector("#level_complete").classList.remove("hidden");
  stopGame();

  document.querySelector("#win").currentTime = 0;
  document.querySelector("#win").play();
}

function gameOver() {
  console.log("Game Over");
  document.querySelector("#game_over").classList.remove("hidden");
  stopGame();
  document.querySelector("#gameOver_btn").addEventListener("click", start);
  document.querySelector("#lose").currentTime = 0;
  document.querySelector("#lose").play();
}

function hideElements() {
  // Skjul elementer
  document.querySelector("#diamond_container1").classList.add("hidden");
  document.querySelector("#diamond_container2").classList.add("hidden");
  document.querySelector("#gold_container1").classList.add("hidden");
  document.querySelector("#gold_container2").classList.add("hidden");
  document.querySelector("#gold_container3").classList.add("hidden");
  document.querySelector("#coal_container1").classList.add("hidden");
  document.querySelector("#coal_container2").classList.add("hidden");
  document.querySelector("#coal_container3").classList.add("hidden");
}

function stopGame() {
  // Fjern click
  document
    .querySelector("#gold_container1")
    .removeEventListener("mousedown", clickGold);
  document
    .querySelector("#gold_container2")
    .removeEventListener("mousedown", clickGold);
  document
    .querySelector("#gold_container3")
    .removeEventListener("mousedown", clickGold);

  document
    .querySelector("#coal_container1")
    .removeEventListener("mousedown", clickCoal);
  document
    .querySelector("#coal_container2")
    .removeEventListener("mousedown", clickCoal);
  document
    .querySelector("#coal_container3")
    .removeEventListener("mousedown", clickCoal);
  document
    .querySelector("#diamond_container1")
    .removeEventListener("mousedown", clickDiamond);
  document
    .querySelector("#diamond_container2")
    .removeEventListener("mousedown", clickDiamond);

  // Fjern animationer
  document
    .querySelector("#gold_container1")
    .classList.remove("falling" + pickAnimation());
  document
    .querySelector("#gold_container2")
    .classList.remove("falling" + pickAnimation());
  document
    .querySelector("#gold_container3")
    .classList.remove("falling" + pickAnimation());
  document
    .querySelector("#coal_container1")
    .classList.remove("falling" + pickAnimation());
  document
    .querySelector("#coal_container2")
    .classList.remove("falling" + pickAnimation());
  document
    .querySelector("#coal_container3")
    .classList.remove("falling" + pickAnimation());
  document
    .querySelector("#diamond_container1")
    .classList.remove("falling" + pickAnimation());
  document
    .querySelector("#diamond_container2")
    .classList.remove("falling" + pickAnimation());

  document
    .querySelector("#gold_container1")
    .removeEventListener("animationiteration", unClicked);
  document
    .querySelector("#gold_container2")
    .removeEventListener("animationiteration", unClicked);
  document
    .querySelector("#gold_container3")
    .removeEventListener("animationiteration", unClicked);

  document
    .querySelector("#coal_container1")
    .removeEventListener("animationiteration", unClicked);
  document
    .querySelector("#coal_container2")
    .removeEventListener("animationiteration", unClicked);
  document
    .querySelector("#coal_container3")
    .removeEventListener("animationiteration", unClicked);
  document
    .querySelector("#diamond_container1")
    .removeEventListener("animationiteration", unClicked);
  document
    .querySelector("#diamond_container2")
    .removeEventListener("animationiteration", unClicked);

  // fjern musik
  document.querySelector("#background_music").currentTime = 0;
  document.querySelector("#background_music").pause();

  hideElements();
}
