// Define your DOM elements using querySelector and getElementById
const button = document.querySelector("button") as HTMLButtonElement;
const num1 = document.getElementById("num1") as HTMLInputElement;
const num2 = document.getElementById("num2") as HTMLInputElement;
const text = document.getElementById("text") as HTMLInputElement;

// Define a function to slice text
function sliceText(inputText: string, startIndex: number, endIndex: number): string {
    return inputText.substring(startIndex, endIndex);
}

// Add a click event listener to the button
button.addEventListener("click", () => {
    // Parse input values to numbers safely
    const startIndex = parseInt(num1.value, 10);
    const endIndex = parseInt(num2.value, 10);

    // Check if parsing is successful and values are valid
    if (!isNaN(startIndex) && !isNaN(endIndex) && startIndex >= 0 && endIndex <= text.value.length) {
        const slicedText = sliceText(text.value, startIndex, endIndex);
        console.log(slicedText);
    } else {
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

