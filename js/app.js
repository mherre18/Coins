const quote = new Api('78a45005c9f5c08ba2541eff882f8f60a017793eefe13d286b6ad84815d0eec0');
const show = new Show();

quote.getCoinsApi();


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
        //console.log('select something');
        show.showMessage('Please complete the form', 'alert bg-danger text-center');

    } else {
        console.log('ok');
    }
});