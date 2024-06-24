const resultElement = document.getElementById('result');
const clearBtn = document.getElementById('clear-button');
const deleteBtn = document.getElementById('delete-button');
const devideBtn = document.getElementById('devide-button');
const multiplyBtn = document.getElementById('multiply-button');
const subtractionBtn = document.getElementById('subtraction-button');
const addBtn = document.getElementById('add-button');
const decimalBtn = document.getElementById('decimal-button');
const equalBtn = document.getElementById('equal-button');
const numberBtns = document.querySelectorAll('.number')


// Initialize the variables 
let result = '';
let operation = '';
let previousOperand = 0;


// Function to append number 
const appendNumber = (number) => {
   if(number === '.' && result.includes('.')) return;

   result += number;
   updateDisplay();
}


//  Function to update display 
const updateDisplay = () => {
    if(operation){
        resultElement.innerText = `${previousOperand} ${operation} ${result}`;
    }else{
        resultElement.innerText = result;
    }
}

// Function to select operator
const selectOperator = (operatorValue) => {
    if(result === '') return;

    if(operation !== '' && previousOperand !== ''){
        calculateResult();
    }

    operation = operatorValue;
    previousOperand = result;
    result = '';
    updateDisplay();
}

// Function to calculate result
const calculateResult = () => {

}

// Add event listener to number buttons
numberBtns.forEach(button => {
    button.addEventListener('click', ()=>{
        // console.log(button.innerText);
        appendNumber(button.innerText);
    })
});

decimalBtn.addEventListener('click',() => appendNumber('.'));
addBtn.addEventListener('click',() => appendNumber('+'));
subtractionBtn.addEventListener('click',() => appendNumber('-'));
multiplyBtn.addEventListener('click',() => appendNumber('*'));
devideBtn.addEventListener('click',() => appendNumber('/'));

