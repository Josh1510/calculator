const numberButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const screen = document.querySelector('#screen');
const screenSum = document.querySelector('#screen-sum');

let a = 1;
let b = 2;

let operation;
let firstValue = '';
let secondValue = '';
let total = '';
let equalClicked = false;

//event listeners for number buttons
numberButtons.forEach((numberButton) =>
    numberButton.addEventListener('click', () => appendValue(numberButton.id))
);

//event listeners for operator buttons
/////// THIS NEEDS TO CALL FUNCTION BASED ON ID CLICKED
operatorButtons.forEach((operatorButton) =>
    operatorButton.addEventListener('click', () =>
        operate['operator_' + operatorButton.id]()
    )
);

//operators
const operate = {
    operator_addition: function (a, b) {
        return a + b;
    },
    operator_subtract: function (a, b) {
        return a - b;
    },
    operator_multiply: function (a, b) {
        return a * b;
    },
    operator_devide: function (a, b) {
        return a / b;
    },
    operator_square: function (a) {
        return a ** 2;
    },
    operator_squareRoot: function (a) {
        return Math.sqrt(a);
    },
    operator_reciprocal: function (a) {
        return 1 / a;
    },
    operator_percentage: function (a, b) {
        return b / reciprocal(a) / 100;
    },
    operator_changeArithmatic: function (a, b) {
        return a * -1;
    },

    operator_decimal: function () {
        if (screen.textContent.includes('.')) {
            console.log("decimal already written, can't have multiple");
            return;
        }

        return screen.textContent === ''
            ? (screen.textContent = '0.')
            : (screen.textContent += '.');
    },

    operator_clearEntry: function () {
        screen.textContent = '';
        total = '';
    },

    operator_clearAll: function () {
        firstValue = '';
        secondValue = '';
        screenSum.textContent = '';
        operate[operator_clearEntry]();
    },

    operator_backspace: function () {
        screen.textContent = screen.textContent.slice(0, -1);
    },
};

function appendValue(value) {
    if (screen.textContent == total && total != '') {
        firstValue = total;
        screen.textContent = '';
    }
    screen.textContent += value;
}

//////FIGURE THIS OUT
// function operator(operator) {
//     if (screen.textContent == total) {
//         screenSum.textContent = total;
//         screen.textContent = '';
//     }

//     if (firstValue === '') {
//         firstValue = screen.textContent;
//     } else if (secondValue === '') {
//         secondValue = screen.textContent;
//     }

//     screenSum.textContent = screen.textContent;
//     screenSum.textContent += ' ' + operator;

//     if (secondValue != '') {
//         //if (screenSum.textContent.includes('=')) {}
//         total = calculate(firstValue, operator, secondValue);

//         if (equalClicked == false) {
//             screenSum.textContent = total + ' ' + operator;
//         } else {
//             screenSum.textContent =
//                 firstValue + ' ' + operator + ' ' + secondValue + ' =';
//             equalClicked = false;
//             firstValue = total;
//         }
//     }

//     screen.textContent = total;
// }

function calculate(firstValue, operator, secondValue) {
    switch (operator) {
        case 'x':
            return firstValue * secondValue;
    }
}
