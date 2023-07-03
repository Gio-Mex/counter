const addBtn = document.querySelector('[addButton]')
const minusBtn = document.querySelector('[minusButton]')
const resetBtn = document.querySelector('[resetButton')
const display = document.querySelector('[display]')

// Initialization
let number = 0
display.innerText = number

// Events
addBtn.addEventListener('click', () => {
    increase();
    updateDisplay();
})

minusBtn.addEventListener('click', () => {
    decrease();
    updateDisplay();
})

resetBtn.addEventListener('click', () => {
    reset();
    updateDisplay();
}
)

// Functions
function increase() {
    number += 1;
}

function decrease() {
    number -= 1;
}

function reset() {
    number = confirm("Do you really want to reset the count?") ? 0 : exit;
}

function updateDisplay() {
    display.innerText = number;
}
