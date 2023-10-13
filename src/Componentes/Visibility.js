import '../App.css';
import React from 'react';
import Sunrise from '../Icons/sunrise.svg'

function Visibility({ value }) {    
    return (
        <>
            <img className='Icon' src={Sunrise} alt='Humidity' />
            <span>Amanecer: </span>
            <span>{value}</span>
        </>
    )
}


export default Visibility;