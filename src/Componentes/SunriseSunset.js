import '../App.css'
import Sunset from '../Icons/sunset.svg'
import React from 'react'


function SunriseSunset({ value }) {
    return (
       <>
            <img className='Icon' src={Sunset} alt='Sunset' />
            <span>Anochecer: </span>
            <span>{value}</span>
        </>
    );


}

export default SunriseSunset;