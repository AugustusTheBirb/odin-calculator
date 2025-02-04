function add(a,b) {
    return parseFloat(a) + parseFloat(b)
}

function sub(a,b) {
    return parseFloat(a) - parseFloat(b)
}

function mul(a,b) {
    return parseFloat(a) * parseFloat(b)
}

function div(a,b) {
    if (b == 0) {return "DIVISION BY ZERO"}
    return parseFloat(a) / parseFloat(b)
}

function percent(a) {
    return parseFloat(a)/100
}

function sign(a) {
    return -1 * parseFloat(a)
}

let num1 = 0
let num2 = 0
let op = ''

const numberButtons = document.querySelectorAll(".nm")
const operationButtons = document.querySelectorAll(".operation")

const clearButton = document.querySelector(".clear")

operationButtons.forEach(element => {
    element.addEventListener("click", )    
});