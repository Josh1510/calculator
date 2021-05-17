const numberButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const screenLower = document.querySelector('#screen');
const screenUpper = document.querySelector('#screen-sum');

let firstValue = '';
let secondValue = '';
let total = '';

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
        if (screenLower.textContent.includes('.')) {
            console.log("decimal already written, can't have multiple");
            return;
        }

        return screenLower.textContent === ''
            ? (screenLower.textContent = '0.')
            : (screenLower.textContent += '.');
    },

    operator_clearEntry: function () {
        screenLower.textContent = '';
    },

    operator_clearAll: function () {
        firstValue = '';
        secondValue = '';
        total = '';
        screenUpper.textContent = '';
        operate[operator_clearEntry]();
    },

    operator_backspace: function () {
        screenLower.textContent = screenLower.textContent.slice(0, -1);
    },
};

//event listeners for number buttons
numberButtons.forEach((numberButton) =>
    numberButton.addEventListener('click', () => appendValue(numberButton.id))
);

operatorButtons.forEach((operatorButton) =>
    operatorButton.addEventListener(
        'click',
        operate[`operator_${operatorButton.id}`]
    )
);

function appendValue(value) {
    if (screenLower.textContent == total && total != '') {
        firstValue = total;
        screenLower.textContent = '';
    }
    screenLower.textContent += value;
}

//////FIGURE THIS OUT
// function operator(operator) {
//     if (screenLower.textContent == total) {
//         screenUpper.textContent = total;
//         screenLower.textContent = '';
//     }

//     if (firstValue === '') {
//         firstValue = screenLower.textContent;
//     } else if (secondValue === '') {
//         secondValue = screenLower.textContent;
//     }

//     screenUpper.textContent = screenLower.textContent;
//     screenUpper.textContent += ' ' + operator;

//     if (secondValue != '') {
//         //if (screenUpper.textContent.includes('=')) {}
//         total = calculate(firstValue, operator, secondValue);

//         if (equalClicked == false) {
//             screenUpper.textContent = total + ' ' + operator;
//         } else {
//             screenUpper.textContent =
//                 firstValue + ' ' + operator + ' ' + secondValue + ' =';
//             equalClicked = false;
//             firstValue = total;
//         }
//     }

//     screenLower.textContent = total;
// }

// function calculate(firstValue, operator, secondValue) {
//     switch (operator) {
//         case 'x':
//             return firstValue * secondValue;
//     }
// }
