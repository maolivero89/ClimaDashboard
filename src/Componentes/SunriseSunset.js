import '../App.css'
import Sunrise from '../Icons/sunrise.svg'
import Sunset from '../Icons/sunset.svg'

function SunriseSunset() {
    return (
<>
    <img className='Icon' src={Sunrise} alt='Sunrise'/>
    <span>Sunrise and Sunset</span>
    <img className='Icon' src={Sunset} alt='Sunset'/>   
</>
    );
        
    
}

export default SunriseSunset;