let canvas = createCanvas();
let context = canvas.getContext('2d');
let snakesEcho = [];
let snake = new Snake(0,0);
let directionObject = {
    HORIZONTAL: 1,
    VERTICAL: 0
}

function play () {

    addControlListeners(directionObject);
    requestAnimationFrame(draw);
}

function createCanvas() {

    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    context.height = canvas.height;
    context.widht = canvas.width;

    document.getElementById('border').appendChild(canvas);

    return canvas;
}

function drawSnake (snake) {

    context.fillStyle = snake.color;
    context.fillRect(snake.x,snake.y, snake.width, snake.height);

}

function updateSnakeArray(snake) {

    if (snakesEcho.length < Constants.Snake.INIT_LENGTH) {

        drawSnake(snake);
        snakesEcho.push(Object.assign({}, snake));

    } else {

        context.clearRect(0, 0, canvas.width, canvas.height);
        snakesEcho.shift();
        snakesEcho.forEach((snake) => {
            drawSnake(snake);
        });

        snakesEcho[snake.length] = Object.assign({}, snake);

    }

}

function draw () {

    snake.updatePosition(directionObject);
    updateSnakeArray(snake);

    if (checkBoundaries(snake)) {

        requestAnimationFrame(draw);

    }

}

play();

