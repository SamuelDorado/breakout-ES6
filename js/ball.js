export default class Ball {
    constructor(radius, coordX, coordY, color, speedX, speedY) {
        this.radius = radius;
        this.coordX = coordX;
        this.coordY = coordY;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
    }
    drawBall(canvasCtx) {
        canvasCtx.beginPath();
        canvasCtx.arc(this.coordX, this.coordY, this.radius, 0, Math.PI * 2);
        canvasCtx.fillStyle = this.color;
        canvasCtx.fill();
        canvasCtx.closePath();
    }
    moove() {
        this.coordX += this.speedX;
        this.coordY += this.speedY;
    }
}