// show the cash out form and hidden add money form

document.getElementById('btn-show-cash-out').addEventListener('click', function () {
    // show cash out button click
    document.getElementById('cash-out-form').classList.remove('hidden');

    // hid addmoney form
    document.getElementById('add-money-form').classList.add('hidden');

})

// addmoney form show and hidden cash out

document.getElementById('btn-show-add-money').addEventListener('click', function () {
    // show the add mony
    document.getElementById('add-money-form').classList.remove('hidden');
    // hidden the casour money
    document.getElementById('cash-out-form').classList.add('hidden');

})




