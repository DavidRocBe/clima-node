const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccòn de la ciudad para obetener el clima',
        demand: true,

    }
}).argv;

lugar.getLugarLatLg(argv.direccion).then(console.log);
clima.getClima(40.7500000, -74.000000).then(console.log).catch(console.log);

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLg(direccion);
        const temp = await lugar.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}`;
    } catch(err) {
        return `No se pudo determinar el clima de ${direccion}`;
    }




}

getInfo(argv.direccion).then(console.log()).catch(console.log())

