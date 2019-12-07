const axios = require('axios');

const url = "https://api.dragonglass.me/hedera/api/accounts/0.0.27992/transactions";

const instance = axios.create({
    baseURL: url,
    timeout: 1000000,
    headers: {'X-API-KEY': 'ACCESS_TOKEN'}
});

var txs = instance.request().then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });