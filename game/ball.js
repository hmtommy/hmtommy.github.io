const gameContainer = document.getElementById('game-container');
const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');
let score = 0;

// Function to move the ball to a random position
function moveBall() {
    const containerRect = gameContainer.getBoundingClientRect();
    const ballSize = ball.offsetWidth;
    const maxX = containerRect.width - ballSize;
    const maxY = containerRect.height - ballSize;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    ball.style.left = `${randomX}px`;
    ball.style.top = `${randomY}px`;
}

// Event listener to handle ball click
ball.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    moveBall();
});

// Move the ball initially when the game starts
moveBall();

// Move the ball every 2 seconds
setInterval(moveBall, 2000);
