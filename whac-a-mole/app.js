const squres = document.querySelectorAll('.squere');
const mole = document.querySelector('.mole');
const score = document.querySelector('.your-score');
const timeLeft = document.querySelector('.time-left');
let currentTime = 60;
let timeId = null;

let result = 0;
let hitPostion;
function randomSqure() {
    squres.forEach((squre) => {
        squre.classList.remove('mole');
    })

    let randomSqure = squres[Math.floor(Math.random()*9)];
    randomSqure.classList.add('mole');
    hitPostion = randomSqure.id;
}

squres.forEach((squre)=>{
    squre.addEventListener('mousedown', () => {
        if(squre.id === hitPostion) {
            result++;
            score.textContent = result;
            hitPostion = null;
        }
    })
})

function moveMole(){
    timeId = setInterval(randomSqure, 500)
}

moveMole();

function timeDown(){
 currentTime--;
 timeLeft.textContent = currentTime;
 if(currentTime == 0) {
    clearInterval(timerCountDownId);
    clearInterval(timeId);
    alert('GAME OVER. Your result: ' + result );
 }
}

let timerCountDownId = setInterval(timeDown, 1000)
