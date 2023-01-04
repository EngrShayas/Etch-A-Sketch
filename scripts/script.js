console.log('Etch-A-Sketch');

let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    if (button.value == 'rainbow') {
        button.style.background = `linear-gradient(90deg, Red, Orange, Yellow, Green, Blue, Indigo, Violet)`;
    }
    button.style.backgroundColor = `${button.value}`;
});