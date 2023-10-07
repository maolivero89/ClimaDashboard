import '../App.css';
import React from 'react';
import data from '../data.json'
import LowIcon from '../Icons/thermometer-colder.svg'

function LowTemp() {

    const TempMin = data.daily.temperature_2m_min + data.daily_units.temperature_2m_min;

    return (
<>
<img className='Icon' src={LowIcon} alt='Low-Icon'/>
<span>Temperatura minima:</span>
<span>{TempMin}</span>
</>
    );
        
    
}

export default LowTemp;