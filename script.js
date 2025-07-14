const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const screen = document.getElementById('screen');
    screen.textContent += button.textContent;
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

