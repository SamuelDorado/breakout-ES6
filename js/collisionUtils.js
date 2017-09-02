export function ballCollisionsPlayer(ball, player, canvas) {
    return ((ball.coordX > player.coordX && ball.coordX < player.coordX + player.width) && (ball.coordY > canvas.height - player.height - player.offsetBottom))
}

export function ballCollisionsBricks(ball, brickWall, brick, onCollision) {
    if (brickWall.bricks.length > 0) {
        for (var c = 0; c < brickWall.columnCount; c++) {
            for (var r = 0; r < brickWall.rowCount; r++) {
                var b = brickWall.bricks[c][r];
                if (b.status == 1) {
                    if (ball.coordX > b.x && ball.coordX < b.x + brick.width && ball.coordY > b.y && ball.coordY < b.y + brick.height) {
                        b.status = 0
                        onCollision()
                    }
                }

            }
        }
    }
}

export function ballCollisionCanvasBorders(ball, canvas, gameOver) {
    if (ball.coordX + ball.speedX > canvas.width - ball.radius || ball.coordX + ball.speedX < ball.radius) {
        ball.speedX = -ball.speedX;
    }
    if (ball.coordY + ball.speedY < ball.radius) {
        ball.speedY = -ball.speedY;
    } else if (ball.coordY > canvas.height - ball.radius) {
        gameOver()
    }
}