const axios = require('axios');

let getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=08fbcb4faae099f44061a84807c22c73`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}