let num = document.querySelector('[type="number"]');
let text = document.querySelector('[type="text"]');
let btn = document.querySelector('[type="submit"]');
let option = document.getElementsByTagName("select");

let container = document.createElement("div");
container.className = "container";

btn.onclick = function (event) {
    event.preventDefault()
    container.innerHTML = ""

    if (option[0].value === "Div") {
        for (let i = 0; i < num.value; i++) {
            let ele = document.createElement("div");
            ele.className = "opt";
            ele.id = `id-${i + 1}`;
            let txt = document.createTextNode(text.value);
            ele.appendChild(txt);
            container.appendChild(ele);
        }
    } else {
        for (let i = 0; i < num.value; i++) {
            let ele = document.createElement("section");
            ele.className = "opt";
            ele.id = `id-${i + 1}`;
            let txt = document.createTextNode(text.value);
            ele.appendChild(txt);
            container.appendChild(ele);
        }
    }
}
document.body.appendChild(container);