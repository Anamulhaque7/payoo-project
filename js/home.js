// Add money to the acount 


// Step 1: add money an event handler to the add button inside the form
document.getElementById('btn-add-money').addEventListener('click',function(event){
    // Prevent page reload after form submit
event.preventDefault();

// step  2: get money to be added to the account

const addMoney = document.getElementById('input-add-money').value;
console.log(addMoney)

// grt the pin number
const pinNumber = document.getElementById('input-pin-number').value;
console.log(pinNumber)

})