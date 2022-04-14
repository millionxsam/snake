const gameEndBoard = document.getElementById('game-over');
const retry = document.querySelector('[retry]');

export function endGame(gameBoard, resetBoard) {
    gameBoard.style.display = 'none';
    resetBoard.style.display = 'none';
    gameEndBoard.classList.add('active');
}

retry.addEventListener('click', () => {
    window.location = window.location;
})