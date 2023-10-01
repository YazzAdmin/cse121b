/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}
function addNumbers (add1, add2) {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1,addNumber2);
    
}
    document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2) {
    return number1 - number2;
}
function subtractNumbers (subtract1,subtract2) {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1,subtractNumber2);
}
    document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers)

/* Arrow Function - Multiply Numbers */
let multiply = (number1,number2) => number1 * number2;

let multiplyNumbers = ()  =>   {
    let multiply1 = Number(document.querySelector('#factor1').value);
    let multiply2 = Number(document.querySelector('#factor2').value);
    return document.querySelector('#product').value = multiply(multiply1,multiply2);
   
}

document.querySelector('#multiplyNumbers').addEventListener('click' ,multiplyNumbers);

    
/* Open Function Use - Divide Numbers */
let divide = (number1,number2) => number1 / number2;
let divideNumbers = ()  =>   {    
    let dividend1 = Number(document.querySelector('#dividend').value);
    let devisor2 = Number(document.querySelector('#divisor').value);
    let divideNumbers = Number(document.querySelector('#divideNumbers').value);
    return document.querySelector('#quotient').value = divide(dividend,divisor2);
}
document.querySelector('#divideNumbers').addEventListener('click' ,divideNumbers);


/* Decision Structure */

const date = new Date();
const year = date.getFullYear();
document.querySelector('#year').value = year;

/* ARRAY METHODS - Functional Programming */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.querySelector('#array').innerHTML = numbersArray;

/* Output Odds Only Array */
let numbersArray_odds = numbersArray.filter((numbersArray) => (numbersArray % 2) > 0)
document.querySelector('#odds').innerHTML = numbersArray_odds;

/* Output Evens Only Array */
let numbersArray_evens = numbersArray.filter ((numbersArray) => (numbersArray % 2) === 0)
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */

let numbersArray_sum = numbersArray.reduce( (sum, number) => sum + number)
document.querySelector('#sumOfArray').innerHTML = numbersArray_sum;

/* Output Multiplied by 2 Array */
let numbersArray_multiply = numbersArray.map( (x) => x * 2);
document.querySelector('#multiplied').innerHTML = numbersArray_multiply;

/* Output Sum of Multiplied by 2 Array */
let numbersArray_sumOfMultiplied = numbersArray.map((x) => x * 2);
let numbersArray_sumOfMultiplied2 = numbersArray_sumOfMultiplied.reduce(( sum,number) => sum + number)
document.querySelector('#sumOfMultiplied').innerHTML = numbersArray_sumOfMultiplied2;