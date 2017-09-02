"use-strict";
import { Score, GAME_INIT } from './gameStats'
import { Brick, BrickWall } from './bricks'
import Player from './player'
import Ball from './ball'
import * as collisionUtils from './collisionUtils'

var canvas = document.getElementById("gameBoard"),
    ctx = canvas.getContext("2d"),
    rightPressed = false,
    leftPressed = false;
document.addEventListener("keydown", function(e) {
    if (e.keyCode === 39) {
        rightPressed = true;
    } else if (e.keyCode === 37) {
        leftPressed = true;
    }
});
document.addEventListener("keyup", function(e) {
    if (e.keyCode === 39) {
        rightPressed = false;
    } else if (e.keyCode === 37) {
        leftPressed = false;
    }
});
var brick = new Brick(GAME_INIT.brickWidth,
    GAME_INIT.brickHeight,
    GAME_INIT.brickPadding,
    GAME_INIT.brickOffsetTop,
    GAME_INIT.brickOffsetLeft,
    GAME_INIT.mainColor);

var brickWall = new BrickWall(GAME_INIT.brickRowCount, GAME_INIT.brickColumnCount);

canvas.width = (brick.offsetLeft * 2) + ((brick.padding + brick.width) * brickWall.columnCount);
canvas.height = canvas.width / 1.618;

var player = new Player(GAME_INIT.playerWidth,
    GAME_INIT.playerHeight,
    (canvas.width - GAME_INIT.playerWidth) / 2,
    GAME_INIT.mainColor,
    GAME_INIT.playerSpeed,
    GAME_INIT.playerOffsetBottom);

var ball = new Ball(GAME_INIT.ballRadius,
    canvas.width / 2,
    canvas.height - 30,
    GAME_INIT.mainColor,
    GAME_INIT.dx,
    GAME_INIT.dy);

var gameScore = new Score(GAME_INIT.scoreModifier, GAME_INIT.mainColor)

var ballCollidesBrick = () => {
    ball.speedY = -ball.speedY
    gameScore.score = gameScore.score + gameScore.scoreModifier;
    if (gameScore.score === brickWall.rowCount * brickWall.columnCount * gameScore.scoreModifier) {
        alert("YOU WIN, CONGRATULATIONS!");
        document.location.reload();
    }
}
var gameOver = () => {
    alert("GAME OVER");
    document.location.reload();
}
var gameThread = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gameScore.drawScore(ctx);
    ball.drawBall(ctx);
    player.drawPlayer(canvas, ctx);
    collisionUtils.ballCollisionsBricks(ball, brickWall, brick, ballCollidesBrick);
    brickWall.drawBricks(brick, ctx);

    collisionUtils.ballCollisionCanvasBorders(ball, canvas, gameOver)

    if (collisionUtils.ballCollisionsPlayer(ball, player, canvas)) {
        if (rightPressed) {
            ball.speedX += 1
        } else if (leftPressed) {
            ball.speedX -= 1
        }
        (ball.speedY > 0 && (ball.speedY <= 7 || ball.speedY >= -7)) ? ball.speedY += 0.5: ball.speedY -= 0.5;
        ball.speedY = -ball.speedY
    }

    player.moove(rightPressed, leftPressed, canvas)
    ball.moove()
    requestAnimationFrame(gameThread);
}

gameThread()