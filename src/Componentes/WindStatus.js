import '../App.css'
import WindIcon from '../Icons/windsock.svg'
import React from 'react';



function WindStatus({value}) {
    return (
        <>
            <img className='Icon' src={WindIcon} alt='Wind-Status' />
            <span>Direccion del Viento: {value}</span>
            
        </>
    );


}

export default WindStatus;