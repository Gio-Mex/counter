// Initialization
const counter = document.querySelector('[counter]')

const display = document.createElement('div');
display.className = 'display';
counter.append(display);

const div = document.createElement('div');
div.classList.add('d-flex', 'flex-row', 'mb-4');
counter.append(div);

const addButton = document.createElement('button');
addButton.classList.add('btn', 'btn-success','me-2', 'fs-1', 'w-50');
addButton.innerText = '+';
div.append(addButton);

const minusButton = addButton.cloneNode(true);
minusButton.classList.remove('btn-success', 'me-2')
minusButton.classList.add('btn-danger', 'ms-2');
minusButton.innerText = '-';
div.append(minusButton);

const resetButton = document.createElement('button')
resetButton.classList.add('btn', 'btn-primary', 'fs-1', 'w-100');
resetButton.innerText = 'RESET';
counter.append(resetButton);

let number = 0
updateDisplay()

// Events
counter.addEventListener('click', function (event) {
  switch (event.target) {
    case addButton:
      increase();
      break;
    case minusButton:
      decrease();
      break;
    case resetButton:
      reset();
      break;
  }
  updateDisplay()
}
);

// Functions
function increase() {
  number++;
}

function decrease() {
  number--;
}

function reset() {
  number = confirm ("Do you really want to reset the count?") ? 0 : number;
}

function updateDisplay() {
  display.textContent = number;
}
