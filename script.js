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
