const buttons = document.querySelectorAll('.button')

buttons.forEach(button => {
    button.addEventListener("click", showOnScreen)

        function showOnScreen(){
            const screen = document.getElementById('screen') 
            // This adds the button text to the screen
            screen.textContent += button.textContent;
}})
