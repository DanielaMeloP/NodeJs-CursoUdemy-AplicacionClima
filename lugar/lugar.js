const axios = require("axios");

const getLugarLatLng = async(direccion) => {

    const encodedUrl = encodeURI(direccion);
    //console.log(encodedUrl);

    // Informacion de la API
    // Se utiliza de esta forma cuando debe enviar informacion desde el header
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': '2bcc946b97msh2252b701e23fbd8p167d1ajsn53ec4eef0d04' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direcion}`);
    }

    const data = resp.data.Results[0];
    const ubicacion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        ubicacion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}