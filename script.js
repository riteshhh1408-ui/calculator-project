let display = document.getElementById("display");

let currentInput = "";
let operator = "";
let firstNumber = "";

function appendNumber(number) {
    if (number === "." && currentInput.includes(".")) {
        return;
    }

    currentInput += number;
    display.value = firstNumber + operator + currentInput;
}

function chooseOperator(op) {
    if (currentInput === "") {
        return;
    }

    firstNumber = currentInput;
    operator = op;
    currentInput = "";

    display.value = firstNumber + " " + operator + " ";
}

function calculate() {
    if (firstNumber === "" || currentInput === "" || operator === "") {
        return;
    }

    let num1 = Number(firstNumber);
    let num2 = Number(currentInput);
    let result;

    if (operator === "+") {
        result = num1 + num2;
    } 
    else if (operator === "-") {
        result = num1 - num2;
    } 
    else if (operator === "*") {
        result = num1 * num2;
    } 
    else if (operator === "/") {
        if (num2 === 0) {
            display.value = "Error";
            currentInput = "";
            firstNumber = "";
            operator = "";
            return;
        }

        result = num1 / num2;
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

function deleteNumber() {
    if (currentInput !== "") {
        currentInput = currentInput.slice(0, -1);
        display.value = firstNumber + operator + currentInput;
    }
}

function percentage() {
    if (currentInput !== "") {
        currentInput = (Number(currentInput) / 100).toString();
        display.value = firstNumber + operator + currentInput;
    }
}