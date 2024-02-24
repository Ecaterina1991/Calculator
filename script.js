"use strict";

const afisaj = document.querySelector(".afisaj");
const seven = document.getElementById("b-7");
const eight = document.getElementById("b-8");
const nine = document.getElementById("b-9");
const four = document.getElementById("b-4");
const five = document.getElementById("b-5");
const six = document.getElementById("b-6");
const one = document.getElementById("b-1");
const two = document.getElementById("b-2");
const three = document.getElementById("b-3");
const zero = document.getElementById("b-0");
const divide = document.getElementById("op-divide");
const multiply = document.getElementById("op-multiply");
const equal = document.getElementById("op-equal");
const point = document.getElementById("point");
const minus = document.getElementById("op-minus");
const buttons = document.querySelectorAll(".button");
const plus = document.getElementById("op-plus");
const operators = document.querySelectorAll(".operator");

one.value = "1";
two.value = "2";
three.value = 3;
four.value = 4;
five.value = 5;
six.value = 6;
seven.value = 7;
eight.value = 8;
nine.value = 9;
multiply.value = "*";
equal.value = "=";
minus.value = "-";
divide.value = "/";
point.value = ".";
plus.value = "+";
zero.value = 0;

function afisare() {
  buttons.forEach((item) =>
    item.addEventListener("click", function () {
      if (item.value != null && item.value != undefined) {
        console.log(item.value);
        afisaj.value += item.value;
      }
    })
  );
  operators.forEach((item) =>
    item.addEventListener("click", function () {
      if (item.value != null && item.value != undefined && item.value != NaN) {
        console.log(item.value);
        afisaj.value += item.value;
      }
    })
  );
}

afisare();

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    afisaj.value = "";
  }
});

const date = new Date();
const year = date.getFullYear();
const placeholderYear = document.querySelector(".year");
const textNode = document.createTextNode(year);
placeholderYear.appendChild(textNode);
