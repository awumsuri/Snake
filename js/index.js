let canvas = createCanvas();
let context = canvas.getContext('2d');
let snakesEcho = [];
let snake = new Snake(0,100);
let directionObject = {
    HORIZONTAL: 1,
    VERTICAL: 0
}
let snakeLength = Constants.Snake.INIT_LENGTH;
let hasFood = true
let food = getFood();

function play () {

    addControlListeners(directionObject);
    //createFood();
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

function drawObject (obj) {

    context.fillStyle = obj.color;
    context.fillRect(obj.x, obj.y, obj.width, obj.height);

}

function updateSnakeArray(snake) {

    if (snakesEcho.length < snakeLength) {

        drawObject(snake);
        snakesEcho.push(Object.assign({}, snake));

    } else {

        context.clearRect(0, 0, canvas.width, canvas.height);
        snakesEcho.shift();
        snakesEcho[snake.length] = Object.assign({}, snake);
        snakesEcho.forEach((snake) => {

            drawObject(snake);

        });

    }

}

function isCollision (object1, object2) {
    if (object1.x < object2.x + object2.width  &&
        object1.x + object1.width  > object2.x &&
        object1.y < object2.y + object2.height &&
        object1.y + object1.height > object2.y) {

        return true;
    }

    return false;
}

function updateFood () {

    if (!hasFood) {

        food = getFood();
        drawObject(food);
        hasFood = true;

    } else {

        if (isCollision(snake, food)) {

            hasFood = false;
            snakeLength += parseInt(Constants.Food.SIZE/2);
            return;
        }

        drawObject(food);

    }

}

function draw () {

    snake.updatePosition(directionObject);
    updateSnakeArray(snake);
    updateFood();


    if (checkBoundaries(snake)) {

        requestAnimationFrame(draw);

    }

}

play();

