const display = document.getElementById('display')
function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}


function calc() {
    try {
        display.value = eval(display.value);
    }
    catch(err) {
        display.value = 'Error';
    }
}

