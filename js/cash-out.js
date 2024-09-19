
document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('input-cash-out-pin').value;

    if(pinNumber === '1234'){
        const balance = document.getElementById('acount-balance').innerText;

        const balanceNumber = parseFloat(balance);

        const cashOurBalance = balanceNumber - cashOutNumber;


        document.getElementById('acount-balance').innerText = cashOurBalance;

    }
    else{
        alert('Filed to cash out, Please try again leter')
    }
})