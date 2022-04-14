import { update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeInt, expRate } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { outsideGrid } from './grid.js';
import { endGame } from './gameOver.js';
const gameBoard = document.getElementById('game-board');
const resetBoard = document.querySelector('[reset-board]');
const resetSettings = document.querySelector('[reset-settings]');
const notify = document.querySelector('[notify]');
let snakeSpeedEle = document.querySelector('[snake-speed]');
let snakeGrowthEle = document.querySelector('[snake-growth]');

resetBoard.addEventListener('mousedown', () => {
    resetBoard.classList.add('down');
});

resetSettings.addEventListener('mousedown', () => {
    resetSettings.classList.add('down');
});

resetBoard.addEventListener('mouseup', () => {
    resetBoard.classList.remove('down');
});

resetSettings.addEventListener('mouseup', () => {
    resetSettings.classList.remove('down');
});

resetBoard.addEventListener('click', () => {
    window.location = window.location;
});

snakeSpeedEle.value = localStorage.getItem('snake_speed') || '';
snakeGrowthEle.value = localStorage.getItem('snake_growth_rate') || '';

let lastRenderTime = 0;
let gameOver = false;

function main(currentTime) {
    if (gameOver) {
        endGame(gameBoard, resetBoard);
        return;
    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / (snakeSpeed || 5)) return;


    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateFood();
    checkDeath();
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeInt();
}