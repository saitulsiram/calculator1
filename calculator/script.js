let display = document.getElementById("display");

function appendValue(value) {
  const lastChar = display.value.slice(-1);
  const operators = "+-*/.%";

  if (operators.includes(value) && operators.includes(lastChar)) return;

  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    const expression = display.value.replace(/%/g, '/100');
    display.value = eval(expression);
  } catch (e) {
    display.value = "Error";
  }
}

document.addEventListener("keydown", function (e) {
  if ((e.key >= "0" && e.key <= "9") || "+-*/.%".includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === "Enter") {
    calculateResult();
  } else if (e.key === "Backspace") {
    deleteChar();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});
