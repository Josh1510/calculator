const container = document.getElementById('grid-container');

const makeCalculatorButtons = () => {
    container.style.setProperty('--grid-rows', 5);
    container.style.setProperty('--grid-cols', 4);
    for (i = 0; i < 20; i++) {
        let CalculatorButton = document.createElement('div');
        CalculatorButton.addEventListener('mouseup', function () {
            //add in code to append number to sum / print opperator
        });
        container.appendChild(CalculatorButton).className = 'calculator-button';
    }
};

makeCalculatorButtons();

//Calculator functions
const addition = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const devide = (a, b) => a / b;

const square = (a) => a ** 2;

const squareRoot = (a) => Math.sqrt(a);

const reciprocal = (a) => 1 / a;

const percentage = (a, b) => b / reciprocal(a) / 100;

const changeArithmatic = (a) => a * -1;
