const form = document.querySelector('#form');

//Read form

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //console.log('sending');

    //read coin & criptocurrency

    const coinSelect = document.querySelector('#coin');
    const coinSelected = coinSelect.options[coinSelect.selectedIndex].value;

    const criptoCurrencySelect = document.querySelector('#criptocurrency');
    const criptoCurrencySelected = criptoCurrencySelect.options[criptoCurrencySelect.selectedIndex].value;

    if(coinSelected === '' || criptoCurrencySelected === ''){
        console.log('select something');
    } else {
        console.log('ok');
    }
});