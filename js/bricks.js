export class Brick {
    constructor(width,
        height,
        padding,
        offsetTop,
        offsetLeft, color) {
        this.width = width
        this.height = height
        this.padding = padding
        this.offsetTop = offsetTop
        this.offsetLeft = offsetLeft
        this.color = color
    }

}

export class BrickWall {
    constructor(rowCount, columnCount) {
        this.rowCount = rowCount
        this.columnCount = columnCount
        this.bricks = []
        for (let i = 0; i < columnCount; i++) {
            this.bricks[i] = [];
            for (let j = 0; j < rowCount; j++) {
                this.bricks[i][j] = { x: 0, y: 0, status: 1 };
            }
        }
    }
    drawBricks(brick, canvasCtx) {
        for (var c = 0; c < this.columnCount; c++) {
            for (var r = 0; r < this.rowCount; r++) {
                if (this.bricks[c][r].status === 1) {
                    var brickX = (c * (brick.width + brick.padding)) + brick.offsetLeft,
                        brickY = (r * (brick.height + brick.padding)) + brick.offsetTop;
                    this.bricks[c][r].x = brickX;
                    this.bricks[c][r].y = brickY;
                    canvasCtx.beginPath();
                    canvasCtx.rect(brickX, brickY, brick.width, brick.height);
                    canvasCtx.fillStyle = brick.color;
                    canvasCtx.fill();
                    canvasCtx.closePath();
                }
            }
        }
    }
}