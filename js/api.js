class Api {
    constructor(apikey) {
        this.apikey = apikey;
    }

    async getCoinsApi() {
        const url = 'https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}';

        //fetch
        const urlGetCoins = await fetch(url);
        const coins = await urlGetCoins.json();

        //console.log(coins);

        return {
            coins
        }
    }

    async getValues(coin, criptocoin) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptocoin}&tsyms=${coin}&api_key=${this.apikey}`;

        //consult in rest api
        const urlConverter = await fetch(url);
        const result = await urlConverter.json();

        return {
            result
        }
    }
}