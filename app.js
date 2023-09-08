// Define your DOM elements using querySelector and getElementById
var button = document.querySelector("button");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var text = document.getElementById("text");
// Define a function to slice text
function sliceText(inputText, startIndex, endIndex) {
    return inputText.substring(startIndex, endIndex);
}
// Add a click event listener to the button
button.addEventListener("click", function () {
    // Parse input values to numbers safely
    var startIndex = parseInt(num1.value, 10);
    var endIndex = parseInt(num2.value, 10);
    // Check if parsing is successful and values are valid
    if (!isNaN(startIndex) && !isNaN(endIndex) && startIndex >= 0 && endIndex <= text.value.length) {
        var slicedText = sliceText(text.value, startIndex, endIndex);
        console.log(slicedText);
    }
    else {
        console.error("Invalid input values.");
    }
});
// Make Basic Logic Typescript With DOM
// const button = document.querySelector("button");
// const num1 = document.getElementById("num1") as HTMLInputElement;
// const num2 = document.getElementById("num2") as HTMLInputElement;
// const text = document.getElementById("text") as HTMLInputElement;
// function sliceText(text: string, num1: number, num2: number): string {
//     return text.substring(num1, num2);
// }
// button!.addEventListener("click", function () {
//     const slicedText = sliceText(text.value, +num1.value, +num2.value);
//     console.log(slicedText);
// });
