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
const sum = (val1, val2, val3) => val1 + val2 + val3;

function init() {
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
  menuElement.value = "select";
}

init(); // Reset on script load

const foodItem = {
  burger: {
    element: burgerElement,
    quantityElement: burgerQuantityElement,
    price: 3,
    index: 0,
  },
  corndog: {
    element: corndogElement,
    quantityElement: corndogQuantityElement,
    price: 5,
    index: 1,
  },
  fries: {
    element: friesElement,
    quantityElement: friesQuantityElement,
    price: 2,
    index: 2,
  },
};

function food(name) {
  const foodSelected = foodItem[name];
  let quantity = Number(quantityElement.value);
  let val = Number(foodSelected.quantityElement.textContent);

  foodSelected.element.classList.remove("hidden");
  foodSelected.quantityElement.textContent = val + quantity;
  val = Number(foodSelected.quantityElement.textContent);
  totalThree[foodSelected.index] += foodSelected.price * quantity;
  totalAmount.textContent = sum(totalThree[0], totalThree[1], totalThree[2]);
}

function changePrice(name, quanAmount) {
  const foodSelected = foodItem[name];
  priceElement.textContent = foodSelected.price;
  if (quanAmount > 0) {
    priceElement.textContent = foodSelected.price * quanAmount;
  }
}

menuElement.addEventListener("click", function () {
  let quantity = Number(quantityElement.value);
  if (menuElement.value === "Burger") {
    changePrice("burger", quantity);
  } else if (menuElement.value === "Corndog") {
    changePrice("corndog", quantity);
  } else if (menuElement.value === "Fries") {
    changePrice("fries", quantity);
  } else {
    priceElement.textContent = 0;
  }
});

quantityElement.addEventListener("change", function () {
  let quantity = Number(quantityElement.value);
  if (quantity > 0) {
    if (menuElement.value === "Burger") {
      changePrice("burger", quantity);
    } else if (menuElement.value === "Corndog") {
      changePrice("corndog", quantity);
    } else if (menuElement.value === "Fries") {
      changePrice("fries", quantity);
    } else {
      priceElement.textContent = 0;
    }
  }
});

addEl.addEventListener("click", function () {
  let quantity = Number(quantityElement.value);
  if (quantity > 0) {
    if (menuElement.value === "Burger") {
      food("burger");
    } else if (menuElement.value === "Corndog") {
      food("corndog");
    } else if (menuElement.value === "Fries") {
      food("fries");
    }
  }
  priceElement.textContent = 0;
  menuElement.value = "select";
  quantityElement.value = "";
});

clearEl.addEventListener("click", function () {
  init();
});
