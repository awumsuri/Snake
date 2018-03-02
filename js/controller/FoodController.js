function getFood () {

    const point = getRandomPoint();
    const food = new Food(point.x, point.y);

    return food;

}

function getRandomPoint() {

    const randomX = Math.floor(Math.random() * Math.floor(Constants.Game.BOUNDARY_X - 2 * Constants.Food.SIZE ));
    const randomY = Math.floor(Math.random() * Math.floor(Constants.Game.BOUNDARY_Y));

    return {
        x: randomX,
        y: randomY
    }

}