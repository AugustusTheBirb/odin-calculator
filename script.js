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
    return Math.round(1000*parseFloat(a) / parseFloat(b))/1000
}

function percent(a) {
    return parseFloat(a)/100
}

function sign(a) {
    return -1 * parseFloat(a)
}

function update(){
    if (op === '') {
        display.innerText = num1
    }
    else {
        display.innerText = num2
    }
}

function chooseOperation(val){
    switch (val){
        case "%":
            num1 = String(percent(num1))
            update()
            break
        case "+/-":
            num1 = String(sign(num1))
            update()
            break
        default:
            op = val;
    }
    
}

function updateNum(val){
    if (op === '') { //means this is the first number, since no op
        num1 += val
    }
    else {
        num2 += val
    }
    update()
}

function calculate(){
    switch (op) {
        case "+":
            num1 = String(add(num1, num2))
            break
        case "-":
            num1 = String(sub(num1, num2))
            break
        case "*":
            num1 = String(mul(num1, num2))
            break
        case "/":
            num1 = String(div(num1, num2))
            break
    }
    op = ''
    num2 = ''
    update()
}

let num1 = '';
let num2 = '';
let op = '';

const display = document.querySelector(".text")

const numberButtons = document.querySelectorAll(".nm");
const operationButtons = document.querySelectorAll(".operation");

const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals")

clearButton.addEventListener("click", () => {
    num1 = ''
    op = ''
    num2 = ''
    update()
})

document.querySelectorAll("button").forEach(element => {
    element.addEventListener("mousedown", () => {element.style.cssText = "box-shadow: 0px 0px; transform: translateY(5px)"})
    element.addEventListener("mouseup", () => element.style.cssText = "")
})



equalsButton.addEventListener("click", calculate)

numberButtons.forEach(element => {
    element.addEventListener("click", () => updateNum(element.value))    
});

operationButtons.forEach(element => {
    element.addEventListener("click", () => chooseOperation(element.value))
})

