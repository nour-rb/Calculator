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
