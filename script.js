let css = document.querySelector("h3");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let body = document.getElementById("gradient");


function setGradient() {
    body.style.background = "linear-gradient(to right, " + left.value + ", " + right.value + ")";
    css.textContent = body.style.background;
}

left.addEventListener("input", setGradient);
right.addEventListener("input", setGradient);