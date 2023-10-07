import '../App.css'
import WindIcon from '../Icons/windsock.svg'
import React from 'react';
import data from '../data.json'


function WindStatus() {

    const DireccionViento = data.current_weather.winddirection + data.hourly_units.winddirection_10m       
    const VelocidadViento = data.current_weather.windspeed + data.hourly_units.windspeed_10m

    return (
<>
    <img className='Icon' src={WindIcon} alt='Wind-Status'/>
    <span>Direccion del Viento {DireccionViento}</span> 
    <span>Velocidad del Viento {VelocidadViento}</span>   
</>
    );
        
    
}

export default WindStatus;