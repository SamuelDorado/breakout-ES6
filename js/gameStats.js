export class Score {
    constructor(scoreModifier, fontColor) {
        this.score = 0;
        this.scoreModifier = scoreModifier;
        this.font = "16px Arial";
        this.fontColor = fontColor;
    }

    drawScore(canvasCtx) {
        canvasCtx.font = this.font;
        canvasCtx.fillStyle = this.fontColor;
        canvasCtx.fillText("Score: " + this.score, 8, 20);
    }
}

export const GAME_INIT = {
    mainColor: "#0095DD",
    ballRadius: 10,
    playerHeight: 10,
    playerWidth: 75,
    playerOffsetBottom: 10,
    playerSpeed: 7,
    dx: 0,
    dy: -2,
    brickRowCount: 5,
    brickColumnCount: 9,
    brickWidth: 75,
    brickHeight: 20,
    brickPadding: 10,
    brickOffsetTop: 30,
    brickOffsetLeft: 30,
    scoreModifier: 10
}