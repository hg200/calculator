const numButtons = Array.from(document.querySelectorAll(".num"));
const operandButtons = Array.from(document.querySelectorAll(".operand"));
const clear = document.querySelector("#clear");
const equals = document.querySelector(".equals");
const input = document.querySelector(".input");
const output = document.querySelector(".output");
for (let button of numButtons) {
    button.addEventListener("click", (e) => {
        let clicked = `${e.target.id}`
        const p = document.createElement("p");
        p.innerText = clicked;
        input.appendChild(p);
    });
}

for (let button of operandButtons) {
    button.addEventListener("click", (e) => {
        let clicked = `${e.target.id}`
        const p = document.createElement("p");
        p.innerText = clicked;
        input.appendChild(p);
        button.removeEventListener("click");
    });

}

clear.addEventListener("click", () => {
    input.innerText = "";
});

equals.addEventListener("click", () => {
    let equation = Array.from(output.innerHTML);
    const p = document.querySelector("p");
    let arr = ["<", ">", "p", "/"];
    //equation.join(",");
    console.log(equation);
});