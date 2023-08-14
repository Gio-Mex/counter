// Initialization
const counter = document.querySelector('[counter]')
let number = 0
const display = newElement('div', 'display', number);
const div = newElement('div', 'd-flex flex-row flex-wrap', '');
const addBtn = newElement('button', 'btn btn-success fs-1 me-auto mb-4', '+');
const minusBtn = newElement('button', 'btn btn-danger fs-1 mb-4', '-');
const resetBtn = newElement('button', 'btn btn-primary fs-1 w-100', 'RESET');

// Events
counter.addEventListener('click', function (event) {
  switch (event.target) {
    case addBtn:
      increase();
      break;
    case minusBtn:
      decrease();
      break;
    case resetBtn:
      reset();
      break;
  }
  updateDisplay()
});

// Functions
function newElement(tagName, styleParameters, text) {
  element = document.createElement(tagName);
  element.className = styleParameters;
  element.innerHTML = text;
  for (let style of element.classList) {
    if (style == 'btn') {
      div.append(element); 
      return element;
    } 
      counter.append(element);
      return element;
  }
};

function increase() {
  number++;
};

function decrease() {
  number--;
}

function reset() {
  number = confirm("Do you really want to reset the count?") ? 0 : number;
}

function updateDisplay() {
  display.innerHTML = number;
}
