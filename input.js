let inputDir = { x: 0, y: 0 };
let lastInputDir = { x: 0, y: 0 };

window.addEventListener('keydown', e => {
    switch(e.key) {
        case "ArrowUp":
        case "w":
            if (lastInputDir.y !== 0) break;
            inputDir = { x: 0, y: -1 };
            break;

        case "ArrowDown":
        case "s":
            if (lastInputDir.y !== 0) break;
            inputDir = { x: 0, y: 1 };
            break;

        case "ArrowLeft":
        case "a":
            if (lastInputDir.x !== 0) break;
            inputDir = { x: -1, y: 0 };
            break;

        case "ArrowRight":
        case "d":
            if (lastInputDir.x !== 0) break;
            inputDir = { x: 1, y: 0 };
            break;
    }
})

export function getInputDir() {
    lastInputDir = inputDir;
    return inputDir;
}