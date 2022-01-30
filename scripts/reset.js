// Reset Script
const billInput = document.getElementById("bill-amt");
const peopleInput = document.getElementById("num-people");
const res = document.querySelector("#tip-box");
const serviceQual = document.querySelector("#service-input");

function reset() {
  billInput.value = "";
  peopleInput.value = "";
  serviceQual.value = "";
  res.style.display = "none";
  console.log("reset done");
}
