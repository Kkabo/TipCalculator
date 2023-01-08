// VARIABLES
const bill = document.getElementById("bill");
const tipPercentage = document.getElementById("tip__percentage");
const tipAmount = document.getElementById("tip__amount");
const totalAmount = document.getElementById("total__amount");


// FUNCTIONS
window.addEventListener("change", () => {
  tipAmount.innerHTML = ((Number(tipPercentage.value) / 100) * bill.value).toFixed(2);
  totalAmount.innerHTML = (Number(bill.value) + (Number(tipPercentage.value) / 100) * bill.value).toFixed(2);
})  