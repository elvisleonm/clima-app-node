const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${coors.direccion} es de ${temp}`;
    } catch {
        return `No se puede determinar el clima en ${direccion}`;
    }
}

/*lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e));

clima.getClima(20.5887932, -100.3898881)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));*/

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));