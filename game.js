import {update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeInt } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { outsideGrid } from './grid.js';
const gameBoard = document.getElementById('game-board');
const reset = document.querySelector('[reset]');

reset.addEventListener('mousedown', () => {
    reset.classList.add('down');
});

reset.addEventListener('mouseup', () => {
    reset.classList.remove('down');
});

reset.addEventListener('click', () => {
    window.location = '/';
});

let lastRenderTime = 0;
let gameOver = false;

function main(currentTime) {
    if (gameOver) {
        if (confirm('You Lost. Press ok to restart.')) {
            window.location = '/';
        }
        return;
    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / snakeSpeed) return;


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