let firstNum;
let secondNum;
let operation = null;
let refresh = false;

const numBtn = Array.from(document.querySelectorAll(".num"));
const opBtn = Array.from(document.querySelectorAll(".operand"));
const clear = document.querySelectorAll("#clear");
const equals = document.querySelectorAll(".equals");
const output = document.querySelectorAll(".output");

numBtn.forEach(button => addEventListener("click", appendNum(button.textContent)));
opBtn.forEach(button => addEventListener("click", appendOp(button.textContent)));

function appendNum(num) {
    output.textContent += `${num}`;
}