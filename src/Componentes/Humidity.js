import '../App.css';
import HumidityIcon from '../Icons/humidity.svg'
import React  from 'react';
import Aire from '../Aire.json'


function Humidity() {

    const Humedad = (String(Aire.hourly.time[13].slice(-5)) +" "+ Aire.hourly.relativehumidity_2m[13] + Aire.hourly_units.relativehumidity_2m);

    return(
        <>
            <img className='Icon' src={HumidityIcon} alt='Humidity'/>
            <span>{Humedad}</span>
        </>
    )
}


export default Humidity;