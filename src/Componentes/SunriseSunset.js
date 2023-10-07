import '../App.css'
import Sunrise from '../Icons/sunrise.svg'
import Sunset from '../Icons/sunset.svg'
import React from 'react'
import data from '../data.json'

function SunriseSunset() {

    const Amanecer = (String(data.daily.sunrise)).slice(-5)
    const Anochecer = (String(data.daily.sunset)).slice(-5);

    return (
<>
    <img className='Icon' src={Sunrise} alt='Sunrise'/>
    <span>Amanecer {Amanecer} Anochecer {Anochecer}</span>
    <img className='Icon' src={Sunset} alt='Sunset'/>   
</>
    );
        
    
}

export default SunriseSunset;