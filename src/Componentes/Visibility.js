import '../App.css';
import VisibilityIcon from '../Icons/horizon.svg'
import React  from 'react';
import Aire from '../Aire.json'

function Visibility() {
 
  const Visibilidad = (String(Aire.hourly.time[13].slice(-5)) +" "+ Aire.hourly.visibility[13] + Aire.hourly_units.visibility);


    

    return(
        <>
            <img className='Icon' src={VisibilityIcon} alt='Humidity'/>
            <span>Visibilidad: </span>
            <span>{Visibilidad}</span>
        </>
    )
}


export default Visibility;