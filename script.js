const breadPrice = 20;
const milkPrice = 25;
const cheesePrice = 35;
const butterPrice = 80;

const breadBtn = document.getElementById("breadBtn");
const milkBtn = document.getElementById("milkBtn");
const cheeseBtn = document.getElementById("cheeseBtn");
const butterBtn = document.getElementById("butterBtn");

const displayBoxText = document.getElementById("displayBoxText");

const totalValueText = document.getElementById("totalValueText");

const customerCash = document.getElementById("customerCash");

const customerChange = document.getElementById("customerChange");

const submitBtn = document.getElementById("submitBtn");
const clearBtn = document.getElementById("clearBtn");


let total = 0;


breadBtn.onclick = function () {
    total += breadPrice;
    displayBoxText.textContent = `Bread @ R${breadPrice}`;
    totalValueText.textContent = total;
    console.log(total);
}

milkBtn.onclick = function () {
    total += milkPrice;
    displayBoxText.textContent = `Milk \t\t@ R${milkPrice}`;
    totalValueText.textContent = total;
    console.log(total);
}

cheeseBtn.onclick = function () {
    total += cheesePrice;
    displayBoxText.textContent = `Cheese \t\t@ R${cheesePrice}`;
    totalValueText.textContent = total;
    console.log(total);
}

butterBtn.onclick = function () {
    total += butterPrice;
    displayBoxText.textContent = `Butter \t\t@ R${butterPrice}`;
    totalValueText.textContent = total;
    console.log(total);
}

submitBtn.onclick = function () {
    let cash = customerCash.value;
    let change = cash - total;
    customerChange.textContent = change;
}

clearBtn.onclick = function () {
    displayBoxText.textContent = "No items";
    totalValueText.textContent = 0;
    customerCash.value = "";
    customerChange.textContent = 0;
    total = 0;
}