let firstOperand = '';
let secondOperand = '';
let operation = null;
let resetScreen = false;

const numButtons = Array.from(document.querySelectorAll(".num"));
const operandButtons = Array.from(document.querySelectorAll(".operand"));
const clear = document.querySelector("#clear");
const equals = document.querySelector(".equals");
const input = document.querySelector(".input");
const output = document.querySelector(".output");

numButtons.forEach((button) =>
    button.addEventListener("click", () => appendNum(button.textContent))
)

operandButtons.forEach((button) =>
    button.addEventListener("click", () => setOperation(button.textContent))
)

function appendNum(Number) {
    if (output.textContent === "0" || resetScreen)
        reset();
    output.textContent += Number;
}

function reset() {
    output.textContent = '';
    resetScreen = false;
}

function setOperation(operator) {
    firstOperand = output.textContent;
    operation = operator;
    input.textContent = `${firstOperand} ${operation}`;
    resetScreen = true;
}

function evaluate() {
    secondOperand = output.textContent;
    output.textContent = round(operate(operation, firstOperand, secondOperand));
    input.textContent = `${firstOperand} ${operation} ${secondOperand}`;
}

function round(num) {
    return Math.round(num * 100) / 100;
}

function add(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function product(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operation, firstOperand, secondOperand) {
    let a = Number(firstOperand);
    let b = Number(secondOperand);
    switch (operation) {
        case "+":
            return add(a, b);
        case "-":
            return minus(a, b);
        case "X":
            return product(a, b);
        case "/":
            if (b === "0") {
                return null;
            }
            return divide(a, b);
        default:
            return;
    }
}

clear.addEventListener("click", () => {
    input.innerText = "";
    output.innerText = 0;
    firstOperand = '';
    secondOperand = '';
    operation = null;
});

equals.addEventListener("click", evaluate);