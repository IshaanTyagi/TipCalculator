function calculateTip() {
  //   var calculate = document.querySelector(".calculate").value;
  var res = document.querySelector("#tip-box");
  var serviceQual = document.querySelector("#service-input").value;
  var billAmount = document.querySelector("#bill-amt").value;
  var numofPeople = document.querySelector("#num-people").value;
  var tipDisplay = document.querySelector("#tipRs");

  // ----->
  // Check if the validation of the input
  if (billAmount == 0 || serviceQual === 0) {
    alert("Please check the input!!");
    alert("Dumb💀");
    return;
  }

  // Check if the number of people entered is correct
  if (numofPeople == "" || numofPeople <= 1) {
    numofPeople = 1;
  }

  // ----->
  // Calculate the tip

  var total = (billAmount * serviceQual) / numofPeople;
  total = Math.round(total);
  console.log(total);

  // ----->
  //Display the tip
  res.style.display = "block";
  document.querySelector("#tipRS").innerHTML = "Rs. " + total + " each";
}
