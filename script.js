const numberButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const screenLower = document.querySelector('#screen');
const screenUpper = document.querySelector('#screen-sum');

let firstValue = '1';
let secondValue = '2';
let usedOperator = '';
let total = '';

// let a = 1;
// let b = 2;
// let c = 'multiply';

//operators
const operate = {
    operator_addition: function (a, b) {
        console.log(`a:${a}  b:${b}`);
        return parseFloat(a) + parseFloat(b);
    },
    operator_subtract: function (a, b) {
        return a - b;
    },
    operator_multiply: function (a, b) {
        return a * b;
    },
    operator_devide: function (a, b) {
        console.log(a / b);
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
        return b / (1 / a) / 100;
    },
    operator_changeArithmatic: function (a) {
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
        screenLower.textContent = '';
    },

    operator_backspace: function () {
        screenLower.textContent = screenLower.textContent.slice(0, -1);
    },
};

//event listeners for number buttons
numberButtons.forEach((numberButton) =>
    numberButton.addEventListener('click', () => appendValue(numberButton.id))
);

//PROBABLY NEED TO CHANGE FUNCTION CALLED OR ADD CHECK TO MAKE SURE NUMBERS EXIST
operatorButtons.forEach((operatorButton) =>
    operatorButton.addEventListener('click', () =>
        //operatorButtonClicked(firstValue, secondValue, operatorButton.id)
        operatorButtonClicked(operatorButton.id)
    )
);

function appendValue(value) {
    if (screenLower.textContent == total && total != '') {
        firstValue = total;
        screenLower.textContent = '';
    }
    screenLower.textContent += value;
}

function operatorButtonClicked(operator) {
    if (
        operator != 'equal' &&
        isNaN(
            parseFloat(operate[`operator_${operator}`](firstValue, secondValue))
        ) == false
    ) {
        usedOperator = operator;
        operate[`operator_${operator}`](firstValue, secondValue);
        console.log(`first value ${firstValue}`);
        console.log(`second value ${secondValue}`);
        console.log(`operator ${usedOperator}`);
        console.log(
            `total = ${operate[`operator_${usedOperator}`](
                firstValue,
                secondValue,
                operator
            )}`
        );
    } else if (usedOperator == '') {
        console.log('no operator set');
    } else {
        total = operate[`operator_${usedOperator}`](firstValue, secondValue);
        console.log('equals');
        console.log(`first value ${firstValue}`);
        console.log(`first value ${secondValue}`);
        console.log(`first value ${usedOperator}`);
        console.log(`total ${total}`);
    }
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
