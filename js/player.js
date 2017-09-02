export default class Player {
    constructor(width, height, coordX, playerColor, playerSpeed, offsetBottom) {
        this.width = width;
        this.height = height;
        this.coordX = coordX;
        this.playerSpeed = playerSpeed;
        this.offsetBottom = offsetBottom;
        this.playerColor = playerColor;
    }
    drawPlayer(canvas, canvasCtx) {
        canvasCtx.beginPath();
        canvasCtx.rect(this.coordX, canvas.height - this.height - this.offsetBottom, this.width, this.height);
        canvasCtx.fillStyle = this.playerColor;
        canvasCtx.fill();
        canvasCtx.closePath();
    }

    moove(rightPressed, leftPressed, canvas) {
        if (rightPressed && this.coordX < canvas.width - this.width) {
            this.coordX += this.playerSpeed;
        } else if (leftPressed && this.coordX > 0) {
            this.coordX -= this.playerSpeed;
        }
    }
}