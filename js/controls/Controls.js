function addControlListeners (directionObject) {

    window.onkeyup = function (e) {

        const code = e.keyCode ? e.keyCode : e.which;

        switch(code) {

            case Constants.Key.UP:
                directionObject.HORIZONTAL = 0;
                directionObject.VERTICAL = -1;
                console.log("up");
                break;
            case Constants.Key.DOWN:
                directionObject.HORIZONTAL = 0;
                directionObject.VERTICAL = 1;
                console.log("down");
                break;
            case Constants.Key.RIGHT:
                directionObject.HORIZONTAL = 1;
                directionObject.VERTICAL = 0;
                console.log("right");
                break;
            case Constants.Key.LEFT:
                directionObject.HORIZONTAL = -1;
                directionObject.VERTICAL = 0;
                console.log("left");
                break;
        }
    }

}

function checkBoundaries (snake) {

    if (snake.x < 0 || snake.x > Constants.Game.BOUNDARY_X) {
        alert("Game Over");
        return false;
    } else if(snake.y < 0 || snake.y > Constants.Game.BOUNDARY_Y) {
        alert("Gamer Over");
        return false;
    }

    return true;

}