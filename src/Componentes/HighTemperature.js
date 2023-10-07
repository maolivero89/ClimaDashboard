import '../App.css'
import React from 'react';
import HighIcon from '../Icons/thermometer-warmer.svg'
import data from '../data.json'

function HighTemp() {

    const TempMax = data.daily.temperature_2m_max + data.daily_units.temperature_2m_max;

    return (
<>
    <img className='Icon' src={HighIcon} alt='High-Icon'/>
    <span> Temperatura maxima: </span>
    <span>{TempMax}</span>
</>
    );
        
    
}

export default HighTemp;