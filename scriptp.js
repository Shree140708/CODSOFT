const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value) {
      currentInput += value;
      display.value = currentInput;
    } else if (button.id === "clear") {
      currentInput = "";
      display.value = "";
    } else if (button.id === "equals") {
      try {
        // Evaluate input using Function constructor (safer than eval)
        let result = new Function("return " + currentInput)();
        display.value = result;
        currentInput = result.toString();
      } catch (err) {
        display.value = "Error";
        currentInput = "";
      }
    }
  });
});
