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

window.addEventListener("keydown", handlKeyboard);

function handlKeyboard(e) {
    if (e.key >= 0 && e.key <= 9) appendNum(e.key);
    if (e.key === 'Escape') reload();
    if (e.key === '=') evaluate();
    if (e.key == '/' || e.key == '+' || e.key == 'x' || e.key == '-') setOperation(e.key);
}

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
        case "x":
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

function reload() {
    input.innerText = "";
    output.innerText = 0;
    firstOperand = '';
    secondOperand = '';
    operation = null;
}

clear.addEventListener("click", reload);


equals.addEventListener("click", evaluate);