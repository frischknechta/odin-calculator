let operand1 = "";
let operand2 = "";
let operator = "";
let calcResult = 0;
const operators = "+-x/";

const add = (num1, num2) => {
  return num1 + num2;
};

const substract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  if (!num2) {
    return "Hahaha nice try!";
  }

  return num1 / num2;
};

const operate = (operand1, operator, operand2) => {
  console.log("operate inputs", operand1, operator, operand2);

  let result = 0;

  switch (operator) {
    case "+":
      result = add(operand1, operand2);

      break;
    case "-":
      result = substract(operand1, operand2);
      break;
    case "x":
      result = multiply(operand1, operand2);
      break;
    case "/":
      result = divide(operand1, operand2);
      break;

    default:
      break;
  }

  console.log("operateResult", result);

  return result;
};

const populateDisplay = (content) => {
  display.textContent = content;
};

const buttons = document.querySelectorAll("button");
const equal = document.querySelector("#equal");
const display = document.querySelector(".display");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event.target.value);

    if (event.target.value === "=") {
      if (!operand1 || !operator || !operand2) {
        return;
      }

      calcResult = operate(Number(operand1), operator, Number(operand2));
      populateDisplay(calcResult);
      operand1 = "";
      operand2 = "";
      operator = "";
    } else if (
      operand1 &&
      operator &&
      operand2 &&
      operators.includes(event.target.value)
    ) {
      calcResult = operate(Number(operand1), operator, Number(operand2));
      operand1 = calcResult;
      operator = event.target.value;
      operand2 = "";
      populateDisplay(`${operand1} ${operator} ${operand2}`);
    } else if (event.target.value === "AC") {
      operand1 = "";
      operand2 = "";
      operator = "";
      display.textContent = "0";
    } else {
      if (operators.includes(event.target.value)) {
        operator = event.target.value;
      } else if (!operator) {
        if (event.target.value === "." && operand1.includes(".")) {
          if (operand1.includes(".")) {
            return;
          } else if (!operand1) {
            operand1 = "0.";
          }
        } else {
          operand1 += event.target.value;
        }
      } else {
        if (event.target.value === "." && operand2.includes(".")) {
          if (operand2.includes(".")) {
            return;
          } else if (!operand2) {
            operand1 = "0.";
          }
        } else {
          operand2 += event.target.value;
        }
      }

      populateDisplay(`${operand1} ${operator} ${operand2}`);
    }
  });
});
