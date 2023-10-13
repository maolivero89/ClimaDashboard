import '../App.css';
import HumidityIcon from '../Icons/humidity.svg'
import React  from 'react';



function Humidity({value}) { 
    return(
        <>
            <img className='Icon' src={HumidityIcon} alt='Humidity'/>
            <span>Humedad</span>
            <span>{value}</span>
        </>
    )
}


export default Humidity;