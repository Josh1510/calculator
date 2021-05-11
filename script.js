const numberButtons = document.querySelectorAll('.number-button');
const screen = document.querySelector('#screen');
const screenSum = document.querySelector('#screen-sum');

let operation;
let firstValue;
let secondValue;
let total = '';

//selectors for operator buttons
const percentageButton = document.querySelector('#percentage');
const clearEntryButton = document.querySelector('#clear-entry');
const clearAllButton = document.querySelector('#clear-all');
const backspaceButton = document.querySelector('#backspace');

const reciprocalButton = document.querySelector('#reciprocal');
const squareButton = document.querySelector('#square');
const squareRootButton = document.querySelector('#square-root');
const devideButton = document.querySelector('#devide');

const multiplyButton = document.querySelector('#multiply');
const subtractButton = document.querySelector('#subtract');
const additionButton = document.querySelector('#addition');
const changeArithmaticButton = document.querySelector('#change-arithmatic');
const equalButton = document.querySelector('#equal');

const decimalButton = document.querySelector('#decimal');

//listeners for operator buttons
percentageButton.addEventListener('click', percentage);
clearEntryButton.addEventListener('click', clearEntry);
clearAllButton.addEventListener('click', clearAll);
backspaceButton.addEventListener('click', backspaceNumber);

reciprocalButton.addEventListener('click', reciprocal);
squareButton.addEventListener('click', square);
squareRootButton.addEventListener('click', squareRoot);
devideButton.addEventListener('click', devide);

multiplyButton.addEventListener('click', multiply);
subtractButton.addEventListener('click', subtract);
additionButton.addEventListener('click', addition);
changeArithmaticButton.addEventListener('click', changeArithmatic);
equalButton.addEventListener('click', equal);

decimalButton.addEventListener('click', decimal);

//Calculator operators / functions
// const addition = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// multiply = (a, b) => a * b;
// const devide = (a, b) => a / b;
// const square = (a) => a ** 2;
// const squareRoot = (a) => Math.sqrt(a);
// const reciprocal = (a) => 1 / a;
// const percentage = (a, b) => b / reciprocal(a) / 100;
// const changeArithmatic = (a) => a * -1;

/////
numberButtons.forEach((numberButton) =>
    numberButton.addEventListener('click', () => appendValue(numberButton.id))
);

function appendValue(value) {
    screen.textContent += value;
}

function percentage() {}

//removes all entered numbers on the current line
function clearEntry() {
    screen.textContent = '';
    total = '';
}

function clearAll() {
    firstValue = null;
    secondValue = null;
    screenSum.textContent = '';
    screen.textContent = '';
    total = '';
}

//remove the last entered number
function backspaceNumber() {
    screen.textContent = screen.textContent.slice(0, -1);
}

function reciprocal() {}
function square() {}
function squareRoot() {}
function devide() {}
function multiply() {
    operator('x');
}
function subtract() {}
function addition() {}
function changeArithmatic() {}
function equal() {}

function decimal() {
    if (screen.textContent.includes('.')) {
        console.log("decimal already written, can't have multiple");
        return;
    }

    return screen.textContent === ''
        ? (screen.textContent = '0.')
        : (screen.textContent += '.');
}

function operator(operator) {
    if (screen.textContent == total) {
        screenSum.textContent = total;
        screen.textContent = '';
    }

    firstValue === null || firstValue === undefined
        ? (firstValue = screen.textContent)
        : (secondValue = screen.textContent);

    screenSum.textContent = screen.textContent;
    screenSum.textContent += ' ' + operator;

    if (secondValue != null || secondValue != undefined) {
        total = calculate(firstValue, operator, secondValue);
        screenSum.textContent =
            firstValue + ' ' + operator + ' ' + secondValue + ' =';
    }

    screen.textContent = total;
}

function calculate(firstValue, operator, secondValue) {
    switch (operator) {
        case 'x':
            return firstValue * secondValue;
    }
}
