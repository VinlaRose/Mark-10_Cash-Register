const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const numberOfNotes = document.querySelectorAll(".number-of-notes");

const notes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
//   hideMessage();
  if (billAmount.value > 0) {
    // console.log(billAmount.value)
    // console.log(cashGiven.value)
   
    if (cashGiven.value >= billAmount.value) {
        
        const amountToBeReturned = cashGiven.value - billAmount.value;
        calculateChange(amountToBeReturned);



    } else {
      showMessage("put more money");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});

function calculateChange(amountToBeReturned) {
    for (let i=0; i < notes.length; i++){
        const noOfNotes = Math.trunc(amountToBeReturned/notes[i]);
        amountToBeReturned %= notes[i];
        numberOfNotes[i].innerText = noOfNotes;

    }

}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}