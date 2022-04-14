import { randomGridPos } from "./grid.js";
import { expandSnake, onSnake, expRate } from "./snake.js";

let food = getRandomFoodPos();

export function update() {
    if(onSnake(food)) {
        expandSnake(expRate || 3);
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