import { getInputDir } from "./input.js";
const speed = document.querySelector('[snake-speed]');

export let snakeSpeed = 5;

speed.addEventListener('input', e => {
    if(e.target.value < 0 || e.target.value > 10) {
        alert('❌ The snake speed has to be between 1 and 10');
        return e.target.value = null;
    }
    snakeSpeed = e.target.value || 5;
});

const snakeBody = [
    { x: 11, y: 11 },
];
let newSegments = 0;

export function update() {
    addSeg();
    const inputDir = getInputDir();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }

    snakeBody[0].x += inputDir.x;
    snakeBody[0].y += inputDir.y;
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}

export function expandSnake(amount) {
    newSegments += amount;
}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some(((segment, index) => {
        if (ignoreHead && index === 0) return false;
        return equalPositions(segment, position);
    }))
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSeg() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    }

    newSegments = 0;
}

export function getSnakeHead() {
    return snakeBody[0];
}

export function snakeInt() {
    return onSnake(snakeBody[0], { ignoreHead: true });
}