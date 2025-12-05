let score = 0;
let gameInterval;

const target = document.getElementById("target");
const scoreDisplay = document.getElementById("score");
const gameArea = document.getElementById("game-area");

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;

    target.style.display = "block";

    moveTarget();

    clearInterval(gameInterval);
    gameInterval = setInterval(moveTarget, 700);
}

function moveTarget() {
    const areaWidth = gameArea.clientWidth - 40;
    const areaHeight = gameArea.clientHeight - 40;

    const randomX = Math.floor(Math.random() * areaWidth);
    const randomY = Math.floor(Math.random() * areaHeight);

    target.style.left = randomX + "px";
    target.style.top = randomY + "px";
}

target.addEventListener("click", function () {
    score++;
    scoreDisplay.textContent = score;
});
