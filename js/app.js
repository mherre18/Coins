const quote = new Api('37fb25b2ff19d349f001973d7d70b3afc042e7f11aa2ebc94c417e15558b3929');
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
        //console.log('ok');
        quote.getValues(coinSelected, criptoCurrencySelected)
        .then(data => {
            //console.log(data);
            show.showResult(data.result.RAW, coinSelected, criptoCurrencySelected );
        })
    }
});