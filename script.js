let display = document.getElementById("display");

let currentInput = "";
let operator = "";
let firstNumber = "";

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function chooseOperator(op) {
    if (currentInput === "") {
        return;
    }

    firstNumber = currentInput;
    operator = op;
    currentInput = "";
}

function calculate() {
    if (firstNumber === "" || currentInput === "" || operator === "") {
        return;
    }

    let secondNumber = currentInput;
    let result;

    if (operator === "+") {
        result = Number(firstNumber) + Number(secondNumber);
    } 
    else if (operator === "-") {
        result = Number(firstNumber) - Number(secondNumber);
    } 
    else if (operator === "*") {
        result = Number(firstNumber) * Number(secondNumber);
    } 
    else if (operator === "/") {
        if (Number(secondNumber) === 0) {
            display.value = "Error";
            currentInput = "";
            firstNumber = "";
            operator = "";
            return;
        }

        result = Number(firstNumber) / Number(secondNumber);
    }

    display.value = result;
    currentInput = result.toString();
    firstNumber = "";
    operator = "";
}

function clearDisplay() {
    currentInput = "";
    firstNumber = "";
    operator = "";
    display.value = "";
}