const buttons = Array.from(document.querySelectorAll("button"));
const output = document.querySelector(".output");
for (let button of buttons) {
    button.addEventListener("click", (e) => {
        let clicked = `${e.target.id}`
        if (clicked != "clear") {
            const p = document.createElement("p");
            p.innerText = clicked;
            output.appendChild(p);
        } else {
            output.innerHTML = "";
        }



    });

}