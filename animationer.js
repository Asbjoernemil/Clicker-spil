window.addEventListener("load", start);

function start() {
  console.log("Spillet starter");
  document
    .querySelector("#gold_container")
    .addEventListener("mousedown", clickGold);
}
function clickGold() {
  console.log("clicked");
  document.querySelector("#gold_container").classList.add("paused");
  document
    .querySelector("#gold_container")
    .removeEventListener("mousedown", clickGold);
}
