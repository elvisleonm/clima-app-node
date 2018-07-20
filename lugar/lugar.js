const axios = require('axios');

let getLugarLatLng = async(direccion) => {

    /*let encodeUrl = encodeURI(direccion);

    axios(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyBL-XP3W6nMMZnlOO4eS8XKMkLo5eIF_qA`)
        .then(resp => {
            // console.log(JSON.stringify(resp.data, undefined, 2));
            // console.log(resp.status);

            let location = resp.data.results[0];
            let coors = location.geometry.location;

            console.log('Dirección:', location.formatted_address);
            console.log('Lat:', coors.lat);
            console.log('Lon:', coors.lng);
        })
        .catch(e => console.log('ERROR!!!', e));*/

    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyBL-XP3W6nMMZnlOO4eS8XKMkLo5eIF_qA`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }

}

module.exports = {
    getLugarLatLng
}