const axios = require("axios");

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9d6b51db26ffe36da284c0778b1d2256&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}