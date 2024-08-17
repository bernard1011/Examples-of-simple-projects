const displayHome = document.getElementById("home-display");
const displayGuest = document.getElementById("guest-display");
const timerElement = document.getElementById("timer");
const startBtn = document.getElementById("start");
const btnContainer = document.getElementById("btn-container");

let interval;
let isRuning = false;
let time = 60;

document.getElementById("plusOneH").addEventListener("click", () => {
  updateDisplay(displayHome, 1);
});

document.getElementById("plusTwoH").addEventListener("click", () => {
  updateDisplay(displayHome, 2);
});

document.getElementById("plusThreeH").addEventListener("click", () => {
  updateDisplay(displayHome, 3);
});

document.getElementById("plusOneG").addEventListener("click", () => {
  updateDisplay(displayGuest, 1);
});

document.getElementById("plusTwoG").addEventListener("click", () => {
  updateDisplay(displayGuest, 2);
});

document.getElementById("plusThreeG").addEventListener("click", () => {
  updateDisplay(displayGuest, 3);
});


// startBtn.addEventListener("click", () => {
//   if (!isRuning) {
//     if(time == 60) {
//       displayGuest.value = '';
//       displayHome.value = ''
//     }
//     startBtn.innerHTML = "Stop";
//     isRuning = true;
//     interval = setInterval(() => {
//       const minutes = Math.floor(time / 60);
//       const seconds = time % 60;
      
//       const formatedSeconds = seconds < 10 ? `0${seconds}` : seconds;
//       timerElement.value = `${minutes}:${formatedSeconds}`;
      
//       time--;
      
//       if (time < 0) {
//         clearInterval(interval);
//         timerElement.value = "Over";
//         time = 1 * 60;
//         isRuning = false;
//         startBtn.innerHTML = "Restart";
        
//         if (displayHome.value > displayGuest.value) {
//           displayHome.value = "Win!";
//           displayHome.style.color = "green";
//         } else if (displayGuest.value > displayHome.value) {
//           displayGuest.value = "Win!";
//           displayGuest.style.color = "green";
//         }
//       }
//     }, 1000);
//   } else {
//     clearInterval(interval);
//     isRuning = false;
//     startBtn.innerHTML = "Start";
//   }
// });



startBtn.addEventListener("click", () => {
  if (!isRuning) {
    if(time == 60) {
      displayGuest.value = '';
      displayHome.value = ''
    }
    startBtn.innerHTML = "Stop";
    isRuning = true;
    interval = setInterval(() => {
      updateTimer();
      time--;
      
      if (time < 0) {
        stopGame()
        checkWinner();
      }
    }, 1000);
  } else {
    clearInterval(interval);
    isRuning = false;
    startBtn.innerHTML = "Start";
  }
});



function updateTimer () {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const formatedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  timerElement.value = `${minutes}:${formatedSeconds}`;
}

function stopGame() {
  clearInterval(interval);
  timerElement.value = "Over";
  time = 60;
  isRuning = false;
  startBtn.innerHTML = "Restart";
}

function checkWinner () {
   if (displayHome.value > displayGuest.value) {
     displayHome.value = "Win!";
     displayHome.style.color = "green";
   } else if (displayGuest.value > displayHome.value) {
     displayGuest.value = "Win!";
     displayGuest.style.color = "green";
   }
}



function updateDisplay(display, increment) {
  const maxValue = 21 - increment;
  // if (display.value < maxValue) {
  //   display.style.color = "red";
  //   display.value = +display.value + increment;
  // } else {
  //   display.style.color = "green";
  //   display.value = "Win!";
  //   clearInterval(interval);
  //   timerElement.value = "Over";
  //   time = 1 * 60;
  //   isRuning = false;
  //   startBtn.innerHTML = "Restart";
  // }
  if (display.value < maxValue) {
  display.value = +display.value + increment;
  display.style.color = 'red';
  }
  else {
    display.value = "Win!"
    display.style.color = 'green'
    stopGame();
  }
}















