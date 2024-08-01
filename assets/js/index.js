"use strict";

const menuElement = document.querySelector("#menu");
const quantityElement = document.querySelector("#quantity");

const burgerQuantityElement = document.querySelector(".burger-quantity");
const corndogQuantityElement = document.querySelector(".corndog-quantity");
const friesQuantityElement = document.querySelector(".fries-quantity");
const burgerElement = document.querySelector(".burger");
const corndogElement = document.querySelector(".corndog");
const friesElement = document.querySelector(".fries");

const priceElement = document.querySelector(".price");

const totalAmount = document.querySelector(".total-amount");

// Button
const clearEl = document.querySelector(".clear");
const addEl = document.querySelector(".add");

// Initialized
let total = 0;
const totalThree = [0, 0, 0]; // 0 = Burger, 1 = Corndog, 2 = Fries
const burgerPrice = 3;
const corndogPrice = 5;
const friesPrice = 2;
const sum = (val1, val2, val3) => val1 + val2 + val3;
burgerElement.classList.add("hidden");
corndogElement.classList.add("hidden");
friesElement.classList.add("hidden");
priceElement.textContent = "0";

menuElement.addEventListener("click", function () {
  let quantity = Number(quantityElement.value);
  if (menuElement.value === "Burger") {
    priceElement.textContent = burgerPrice;
    if (quantity > 0) {
      priceElement.textContent = burgerPrice * quantity;
    }
  } else if (menuElement.value === "Corndog") {
    priceElement.textContent = corndogPrice;
    if (quantity > 0) {
      priceElement.textContent = corndogPrice * quantity;
    }
  } else if (menuElement.value === "Fries") {
    priceElement.textContent = friesPrice;
    if (quantity > 0) {
      priceElement.textContent = friesPrice * quantity;
    }
  } else {
    priceElement.textContent = 0;
  }
});

quantityElement.addEventListener("change", function () {
  let quantity = Number(quantityElement.value);
  if (quantity > 0) {
    if (menuElement.value === "Burger") {
      priceElement.textContent = burgerPrice * quantity;
    } else if (menuElement.value === "Corndog") {
      priceElement.textContent = corndogPrice * quantity;
    } else if (menuElement.value === "Fries") {
      priceElement.textContent = friesPrice * quantity;
    } else {
      priceElement.textContent = 0;
    }
  }
});

addEl.addEventListener("click", function () {
  let quantity = Number(quantityElement.value);
  if (quantity > 0) {
    if (menuElement.value === "Burger") {
      let val = Number(burgerQuantityElement.textContent);
      burgerElement.classList.remove("hidden");
      burgerQuantityElement.textContent = val + quantity;
      val = Number(burgerQuantityElement.textContent);
      totalThree[0] += burgerPrice * quantity;
      totalAmount.textContent = sum(
        totalThree[0],
        totalThree[1],
        totalThree[2]
      );
    } else if (menuElement.value === "Corndog") {
      let val = Number(corndogQuantityElement.textContent);
      corndogElement.classList.remove("hidden");
      corndogQuantityElement.textContent = val + quantity;
      val = Number(corndogQuantityElement.textContent);
      totalThree[0] += corndogPrice * quantity;
      totalAmount.textContent = sum(
        totalThree[0],
        totalThree[1],
        totalThree[2]
      );
    } else if (menuElement.value === "Fries") {
      let val = Number(friesQuantityElement.textContent);
      friesElement.classList.remove("hidden");
      friesQuantityElement.textContent = val + quantity;
      val = Number(friesQuantityElement.textContent);
      totalThree[0] += friesPrice * quantity;
      totalAmount.textContent = sum(
        totalThree[0],
        totalThree[1],
        totalThree[2]
      );
    }
  }
  priceElement.textContent = 0;
  menuElement.value = "select";
  quantityElement.value = "";
});

clearEl.addEventListener("click", function () {
  total = 0;
  burgerElement.classList.add("hidden");
  corndogElement.classList.add("hidden");
  friesElement.classList.add("hidden");
  priceElement.textContent = "0";
  totalAmount.textContent = "0";
  quantityElement.value = "";
  burgerQuantityElement.textContent = 0;
  corndogQuantityElement.textContent = 0;
  friesQuantityElement.textContent = 0;
  totalThree[0] = 0; // Burger
  totalThree[1] = 0; // Corndog
  totalThree[2] = 0; // Fries
});
