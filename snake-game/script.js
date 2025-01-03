// Отримуємо доступ до елементів HTML
const canvas = document.querySelector('.game-canvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.querySelector('.game-score p');
const startButton = document.querySelector('.game-start');
const restartButton = document.querySelector('.game-restart');

// Розміри та розташування на полотні
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const gridSize = 20;

const snakeImage = new Image();
snakeImage.src = 'images/snake.png';

const foodImage = new Image();
foodImage.src = 'images/cherry.png';

// Змінні для гри
let snake = [{ x: 5, y: 5 }];
let food = getRandomPosition();
let direction = 'right';
let score = 0;
let gameRunning = false;

// Головна функція для оновлення гри
function updateGame() {
    if (!gameRunning) return;

    moveSnake();
    checkCollision();
    drawGame();

    setTimeout(updateGame, 100);
}

// Рух змійки
function moveSnake() {
    const head = { ...snake[0] };

    switch (direction) {
        case 'up':
            head.y -= 1;
            break;
        case 'down':
            head.y += 1;
            break;
        case 'left':
            head.x -= 1;
            break;
        case 'right':
            head.x += 1;
            break;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score += 10;
        food = getRandomPosition();
        scoreElement.textContent = `Очки: ${score}`;
    } else {
        snake.pop();
    }
}

// Перевірка на зіткнення змійки зі стінами або собою
function checkCollision() {
    const head = snake[0];
    if (
        head.x < 0 || head.x >= canvasWidth / gridSize ||
        head.y < 0 || head.y >= canvasHeight / gridSize ||
        snake.some(segment => segment !== head && segment.x === head.x && segment.y === head.y)
    ) {
        endGame();
    }
}

// Закінчення гри
function endGame() {
    gameRunning = false;
    alert('Гра завершена. Ваш рахунок: ' + score);
}

// Випадкове розташування їжі
function getRandomPosition() {
    return {
        x: Math.floor(Math.random() * (canvasWidth / gridSize)),
        y: Math.floor(Math.random() * (canvasHeight / gridSize))
    };
}

// Малювання гри
function drawGame() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    snake.forEach(segment => {
        ctx.drawImage(snakeImage, segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
    });

    ctx.drawImage(foodImage, food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}


// Обробка клавіш
document.addEventListener('keydown', event => {
    switch (event.key) {
        case 'ArrowUp':
            if (direction !== 'down') direction = 'up';
            break;
        case 'ArrowDown':
            if (direction !== 'up') direction = 'down';
            break;
        case 'ArrowLeft':
            if (direction !== 'right') direction = 'left';
            break;
        case 'ArrowRight':
            if (direction !== 'left') direction = 'right';
            break;
    }
});

// Обробка натискання кнопок "Старт" та "Перезапуск"
startButton.addEventListener('click', () => {
    if (!gameRunning) {
        snake = [{ x: 5, y: 5 }];
        food = getRandomPosition();
        score = 0;
        scoreElement.textContent = 'Очки: 0';
        gameRunning = true;
        updateGame();
    }
});

restartButton.addEventListener('click', () => {
    endGame();
});

// Запускаємо гру
drawGame();
