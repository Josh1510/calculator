const container = document.getElementById('button-container');
const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];
const operators = [
    '%',
    'CE',
    'C',
    '<-',
    '1/X',
    'x²',
    '2√x',
    '÷',
    'X',
    '-',
    '+',
    '+/-',
    '=',
];

var numbersCounter = 0;
var operatorsCounter = 0;

const makeCalculatorButtons = () => {
    container.style.setProperty('--grid-rows', 6);
    container.style.setProperty('--grid-cols', 4);
    for (i = 0; i < 24; i++) {
        let calculatorButton = document.createElement('div');
        calculatorButton.addEventListener('click', function () {
            console.log(calculatorButton.innerText);
            //add in code to append number to sum / print opperator
        });
        container.appendChild(calculatorButton).className = 'calculator-button';
        if (i < 8 || (i + 1) % 4 == 0 || i == 20) {
            container.appendChild(calculatorButton).className +=
                ' operator-button';
            content = document.createTextNode(operators[operatorsCounter]);
            calculatorButton.appendChild(content);
            operatorsCounter++;
        } else {
            container.appendChild(calculatorButton).className +=
                ' number-button';
            content = document.createTextNode(numbers[numbersCounter]);
            calculatorButton.appendChild(content);
            numbersCounter++;
        }
    }
};

makeCalculatorButtons();

//Calculator operators / functions
const addition = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const devide = (a, b) => a / b;

const square = (a) => a ** 2;

const squareRoot = (a) => Math.sqrt(a);

const reciprocal = (a) => 1 / a;

const percentage = (a, b) => b / reciprocal(a) / 100;

const changeArithmatic = (a) => a * -1;
