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

clear.addEventListener("click", () => {
    input.innerText = "";
    output.innerText = 0;
    firstOperand = '';
    secondOperand = '';
    operation = null;
});

equals.addEventListener("click", () => {
    let equation = Array.from(output.innerHTML);
    const p = document.querySelector("p");
    let arr = ["<", ">", "p", "/"];
    //equation.join(",");
    console.log(equation);
});