import { randomGridPos } from "./grid.js";
import { expandSnake, onSnake } from "./snake.js";
const gr = document.querySelector('[snake-growth]');

let food = getRandomFoodPos();
export let expRate = 3;

gr.addEventListener('input', e => {
    if(e.target.value < 0 || e.target.value > 10) {
        alert('❌ The snake growth rate has to be between 1 and 10');
        return e.target.value = null;
    }
    expRate = e.target.value || 3;
});

export function update() {
    if(onSnake(food)) {
        console.log('food on snake');
        expandSnake(expRate);
        food = getRandomFoodPos();
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

function getRandomFoodPos() {
    let newFoodPos;

    while (newFoodPos == null || onSnake(newFoodPos)) {
        newFoodPos = randomGridPos();
    }

    return newFoodPos;
}