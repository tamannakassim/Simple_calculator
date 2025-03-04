const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");

// Variables to store the current calculation state
let a = null;
let operator = null;
let b = null;

buttons.forEach(button => {
    button.addEventListener("click", function () {
        let value = button.innerText; // Get button text content
        
        if (["+", "-", "×", "÷"].includes(value)) {
            // Store the first number and operator
            if (display.value !== "") {
                a = parseFloat(display.value);
                operator = value;
                display.value = "";
            }
        } else if (value === "=") {
            if (a !== null && operator && display.value !== "") {
                b = parseFloat(display.value);

                // Perform the calculation
                let result;
                switch (operator) {
                    case "÷":
                        result = a / b;
                        break;
                    case "×":
                        result = a * b;
                        break;
                    case "+":
                        result = a + b;
                        break;
                    case "-":
                        result = a - b;
                        break;
                }

                display.value = result;
                a = result; // Store result for further calculations
                operator = null;
                b = null;
            }
        } else if (value === "AC") {
            clearDisplay();
        } else {
            // Handle numbers and decimals
            if (value === "." && display.value.includes(".")) return; // Prevent multiple decimals
            if (display.value === "0") {
                display.value = value;
            } else {
                display.value += value;
            }
        }
    });
});

function clearDisplay() {
    display.value = "";
    a = null;
    operator = null;
    b = null;
}
