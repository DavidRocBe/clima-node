const axios = require('axios');

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${
        lng}&appid=a5b00d90a38e2633de1c2d2ba917a292&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima,
}