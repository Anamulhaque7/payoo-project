// Add money to the acount 


// Step 1: add money an event handler to the add button inside the form
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    // Prevent page reload after form submit
    event.preventDefault();

    // step  2: get money to be added to the account

    const addMoneyinput = document.getElementById('input-add-money').value;
    console.log(addMoneyinput)

    // get the pin number
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(typeof pinNumberInput)

    // step 3: vrifly the pin number

    if (pinNumberInput === '1234') {
        console.log('adding money to the acount')
        // step 4 : curent balance
        const balance = document.getElementById('acount-balance').innerText;
        console.log(typeof balance)

        // step 5 : add addmoney withe balance
        const addMoneyNumber = parseFloat(addMoneyinput)
        const balanceNumber = parseFloat(balance)
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance)

        // steap 6 updet balance in UI 
        document.getElementById('acount-balance').innerText = newBalance;
    }
    else {
        alert('Fild to add money! pleas tri agein')
    }
})