import '../App.css';
import ActTemperature from '../Icons/thermometer-colder.svg'
import React from 'react';
import data from '../data.json'

function ActualyTemp() {

    const TempAct = data.current_weather.temperature + data.hourly_units.temperature_2m;

    return (
<>
    <img className='Icon' src={ActTemperature} alt='Temperature'/>
    <span>Actualy Temperature</span>   
    <span>{TempAct}</span> 
</>
    );
        
    
}

export default ActualyTemp;