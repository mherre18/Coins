class Api {
    constructor(apikey) {
        this.apikey = apikey;
    }

    async getCoinsApi() {
        const url = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR?api_key=${this.apikey}';

        //fetch
        const urlGetCoins = await fetch(url);
        const coins = await urlGetCoins.json();

        console.log(coins);

        return {
            coins
        }
    }
}