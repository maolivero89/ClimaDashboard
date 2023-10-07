import '../App.css';
import AirQ from '../Icons/wi_dust-wind.svg'
import Aire from '../Aire.json'

function AirQuality() {

    const aqi = Aire.hourly.european_aqi[13]

    function CalidadDeAire() {
        if (aqi >= 0 && aqi <= 50 ) {
            return 'Good';
        } else if (aqi >= 51 && aqi <= 100 ) {
            return 'Moderate';
        } else if (aqi >= 101 && aqi <= 150 ) {
            return 'Unhealthy for Sensitive Groups';
        } else if (aqi >= 151 && aqi <= 200 ) {
            return 'Unhealthy';
        } else if (aqi >= 201 && aqi <= 300 ) {
            return 'Very Unhealthy';
        } else {
            return 'Hazardous';
        }
        
    }

    const CalAire = CalidadDeAire(aqi)

    return(
        <>
            <img className='Icon' src={AirQ} alt='Humidity'/>
            <span>Air Quality {CalAire}</span>
            <span>{aqi}</span> 
        </>
    )
}


export default AirQuality;