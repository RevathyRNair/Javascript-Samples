// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

let num1 = 8
let num2 = 2
let output = 0
let outputText = document.getElementById("output-el").textContent

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

console.log(document.getElementById("num1-el").textContent)
console.log(document.getElementById("num2-el").textContent)

function add() {
    output = num1 + num2
    document.getElementById("output-el").textContent = outputText + output
}

function subtract() {
    output = num1 - num2
    document.getElementById("output-el").textContent = outputText + output
}

function multiply() {
    output = num1 * num2
    document.getElementById("output-el").textContent = outputText + output
}

function divide() {
    output = num1 / num2
    document.getElementById("output-el").textContent = outputText + output
}