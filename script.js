const buttons = document.querySelectorAll('.button');
const screen = document.getElementById('screen');

let currentNumber = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    currentNumber += button.textContent;
    screen.textContent = currentNumber;
  });

  button.addEventListener("mouseover", () => {
    button.classList.add('dark');
  });

  button.addEventListener("mouseout", () => {
    button.classList.remove('dark');
  });
});


function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Can't divide by 0!";
  }
  return a / b;
}

let rightNumber = null;
let operator = null;
let LeftNumber = null;

function operate(operator, a, b) {
    if (operator === "+") return add(a, b);
    if (operator === "-") return subtract(a, b);
    if (operator === "*") return multiply(a, b);
    if (operator === "/") return divide(a, b);
}