function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 80 + 10) + "%";
  elm.style.left = Math.floor(Math.random() * 80 + 10) + "%";
}
const moveRandom = document.querySelector("#move-random");
if(moveRandom) {
    moveRandom.addEventListener("mouseenter", function (e) {
        moveRandomEl(e.target);
    });
}
