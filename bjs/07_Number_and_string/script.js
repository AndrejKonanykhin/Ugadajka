let lastOperand = 0;
let operation = null;

const inputWindow = document.querySelector("#inputWindow");

document.querySelector("#btn_clr").addEventListener("click", (event) => {
  lastOperand = 0;
  operation = null;
  inputWindow.value = "";
});

document.querySelector("#btn_1").addEventListener("click", (event) => {
  inputWindow.value += "1";
});
document.querySelector("#btn_2").addEventListener("click", (event) => {
  inputWindow.value += "2";
});
document.querySelector("#btn_3").addEventListener("click", (event) => {
  inputWindow.value += "3";
});
document.querySelector("#btn_4").addEventListener("click", (event) => {
  inputWindow.value += "4";
});
document.querySelector("#btn_5").addEventListener("click", (event) => {
  inputWindow.value += "5";
});
document.querySelector("#btn_6").addEventListener("click", (event) => {
  inputWindow.value += "6";
});
document.querySelector("#btn_7").addEventListener("click", (event) => {
  inputWindow.value += "7";
});
document.querySelector("#btn_8").addEventListener("click", (event) => {
  inputWindow.value += "8";
});
document.querySelector("#btn_9").addEventListener("click", (event) => {
  inputWindow.value += "9";
});
document.querySelector("#btn_0").addEventListener("click", (event) => {
  inputWindow.value += "0";
});

document.querySelector("#btn_add").addEventListener("click", (event) => {
  lastOperand = parseInt(inputWindow.value);
  operation = "add";
  inputWindow.value = "";
});
document.querySelector("#btn_sub").addEventListener("click", (event) => {
  lastOperand = parseInt(inputWindow.value);
  operation = "sub";
  inputWindow.value = "";
});
document.querySelector("#btn_mult").addEventListener("click", (event) => {
  lastOperand = parseInt(inputWindow.value);
  operation = "mult";
  inputWindow.value = "";
});
document.querySelector("#btn_div").addEventListener("click", (event) => {
  lastOperand = parseInt(inputWindow.value);
  operation = "div";
  inputWindow.value = "";
});
document.querySelector("#btn_sqr").addEventListener("click", (event) => {
  lastOperand = parseInt(inputWindow.value);
  operation = "sqrt";
});

document.querySelector("#btn_result").addEventListener("click", (event) => {
  if (operation === "add") {
    const result = lastOperand + parseInt(inputWindow.value);
    operation = null;
    lastOperand = "";
    inputWindow.value = result;
  } else if (operation === "sub") {
    result = lastOperand - parseInt(inputWindow.value);
    operation = null;
    lastOperand = "";
    inputWindow.value = result;
  } else if (operation === "mult") {
    result = lastOperand * parseInt(inputWindow.value);
    operation = null;
    lastOperand = "";
    inputWindow.value = result;
  } else if (operation === "div") {
    result = lastOperand / parseInt(inputWindow.value);
    operation = null;
    lastOperand = "";
    inputWindow.value = result;
  } else if (operation === "sqrt") {
    result = Math.sqrt(lastOperand);
    operation = null;
    lastOperand = "";
    inputWindow.value = result;
  }
});
