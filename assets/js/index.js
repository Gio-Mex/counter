// Initialization
const counter = document.querySelector('[counter]')
counter.insertAdjacentHTML('afterbegin',
`
<div display class="bg-info rounded w-100 mb-3 d-flex justify-content-center 
  align-items-center"></div>
<div class="d-flex flex-column">
    <div class="d-flex flex-row mb-4">
        <button addButton type="button" class="btn btn-success me-2 fs-1 w-50">+</button>
        <button minusButton type="button" class="btn btn-danger ms-2 fs-1 w-50">-</button>
    </div>
    <button resetButton type="button" class="btn btn-primary fs-1 w-100">RESET</button>
</div>
`
)

const display = document.querySelector('[display]')
let number = 0
updateDisplay()

const addBtn = document.querySelector('[addButton]')
const minusBtn = document.querySelector('[minusButton]')
const resetBtn = document.querySelector('[resetButton')


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
  number = confirm("Do you really want to reset the count?") ? 0 : number;
}

function updateDisplay() {
  display.textContent = number;
}
