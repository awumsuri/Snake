class Snake {

    constructor (x, y)  {

        this.x = x || 0;
        this.y = y || 0;
        this.width = Constants.Snake.SIZE;
        this.height = Constants.Snake.SIZE;
        this.color = Constants.Snake.COLOR;

    }


    updatePosition(directionObject) {

       this.x += Constants.Snake.MOVE * directionObject.HORIZONTAL;
       this.y += Constants.Snake.MOVE * directionObject.VERTICAL;

    }

}