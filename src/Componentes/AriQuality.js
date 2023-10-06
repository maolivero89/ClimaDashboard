import '../App.css';
import AirQ from '../Icons/wi_dust-wind.svg'

function AirQuality() {
    return(
        <>
            <img className='Icon' src={AirQ} alt='Humidity'/>
            <span>Air Quality</span>
        </>
    )
}


export default AirQuality;