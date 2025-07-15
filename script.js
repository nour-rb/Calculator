const buttons = document.querySelectorAll('.button');
const screen = document.getElementById('screen');

let firstNumber = "";
let secondNumber = "";
let operator = null;
let isFirstNumber = true;

buttons.forEach(button => {
  button.addEventListener("mouseover", () => {
    button.classList.add('dark');
  });

  button.addEventListener("mouseout", () => {
    button.classList.remove('dark');
  });

  button.addEventListener("click", () => {
    const value = button.textContent;

    if (!isNaN(value)) {
      // It's a number
      if (isFirstNumber) {
        firstNumber += value;
        screen.textContent = firstNumber;
      } else {
        secondNumber += value;
        screen.textContent = secondNumber;
      }
    }

    if (["+", "-", "*", "/"].includes(value)) {
      operator = value;
      isFirstNumber = false;
    }

    if (value === "=") {
      if (firstNumber !== "" && secondNumber !== "" && operator) {
        const result = operate(operator, Number(firstNumber), Number(secondNumber));
        screen.textContent = result;

        // Prepare for next operation
        firstNumber = result.toString();
        secondNumber = "";
        operator = null;
        isFirstNumber = true;
      }
    }

    if (value === "AC") {
      firstNumber = "";
      secondNumber = "";
      operator = null;
      isFirstNumber = true;
      screen.textContent = "";
    }
  });
});

// Math functions
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
  if (b === 0) return "Can't divide by 0!";
  return a / b;
}
function operate(operator, a, b) {
  if (operator === "+") return add(a, b);
  if (operator === "-") return subtract(a, b);
  if (operator === "*") return multiply(a, b);
  if (operator === "/") return divide(a, b);
}
