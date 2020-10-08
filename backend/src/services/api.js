const axios = require('axios');

const api = axios.create({
    baseURL: ' http://fipeapi.appspot.com/api/'
});

module.exports = api;