//const show = new Show();

class Show {

    constructor() {
        this.init();
    }

    init() {
        this.constructSelect();
    }

    constructSelect(){
        quote.getCoinsApi()
        .then(coins => {

            const select = document.querySelector('#criptocurrency');

            //search in api results
            for(const [key, value] of Object.entries(coins.coins.Data)) {
               // console.log(value);

               const option = document.createElement('option');
               option.value = value.Symbol;
               option.appendChild(document.createTextNode(value.CoinName));
               select.appendChild(option);
            }
           
        })
    }

    showMessage(message, classes) {
        const div = document.createElement('div');
        div.className = classes;
        div.appendChild(document.createTextNode(message));

        //console.log(div);

        //select messages
        const divMessage = document.querySelector('.messages');
        divMessage.appendChild(div);

        setTimeout(() => {
            document.querySelector('.messages div').remove();
        }, 3000);
    }
}