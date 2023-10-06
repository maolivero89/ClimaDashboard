import '../App.css';
import HumidityIcon from '../Icons/humidity.svg'

function Humidity() {
    return(
        <>
            <img className='Icon' src={HumidityIcon} alt='Humidity'/>
            <span>Humidity</span>
        </>
    )
}


export default Humidity;