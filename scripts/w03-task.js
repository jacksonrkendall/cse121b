 /* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
};

function addNumbers() {
    let num1 = Number(document.querySelector('#add1').value);
    let num2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(num1, num2);
};

/*self-reminder: place calls to functions OUTSIDE said function, so as to avoid a death loop, calling a function that calls itself*/
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
};

 const subtractNumbers = function() {
    let num1 = Number(document.querySelector('#subtract1').value);
    let num2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(num1, num2);
};
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    if (divisor === 0) {
        return "Cannot divide by zero. Try Again.";
    }
    return dividend / divisor;
}

function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', function() {
    let subTotal = Number(document.querySelector('#subtotal').value);
    if (document.querySelector('#member').checked) {
        subTotal = subTotal * 0.8;
    }
    document.querySelector('#total').innerText = `$${subTotal.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
/* Output Source Array */
document.querySelector('#array').innerHTML = `Array: ${numbersArray.join(', ')}`
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = `Odds: ${numbersArray.filter(number => number % 2 === 1).join(', ')}`;
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = `Evens: ${numbersArray.filter(number => number % 2 === 0).join(', ')}`;
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = `Sum: ${numbersArray.reduce((sum, number) => sum + number, 0)}`;
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = `Multiplied: ${numbersArray.map(number => number * 2).join(', ')}`;
/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = `Sum: ${numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0)}`;
