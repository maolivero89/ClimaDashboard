import '../App.css';
import AirQ from '../Icons/wi_dust-wind.svg'


function AirQuality({calidadAire}) {

    let aqi = calidadAire['current']['us_aqi']
    let aqiUni= calidadAire['current_units']['pm10']

    function CalidadDeAire() {
        if (aqi >= 0 && aqi <= 50 ) {
            return 'Bueno';
        } else if (aqi >= 51 && aqi <= 100 ) {
            return 'Moderado';
        } else if (aqi >= 101 && aqi <= 150 ) {
            return 'Dañino para la salud para grupos sensibles';
        } else if (aqi >= 151 && aqi <= 200 ) {
            return 'Dañino para la salud';
        } else if (aqi >= 201 && aqi <= 300 ) {
            return 'Muy dañino para la salud';
        } else {
            return 'Peligroso';
        }
        
    }

    const CalAire = CalidadDeAire(aqi)

    return(
        <>
            <img className='Icon' src={AirQ} alt='Humidity'/>
            <span>Calidad del Aire: {CalAire}</span>
            <span>{aqi}{aqiUni}</span> 
        </>
    )
}


export default AirQuality;