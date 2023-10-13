import React from "react";
import '../App.css'


function CondicionClima({datosEstadoClima, estadoClimaIconos}) {

    const codigoClima = datosEstadoClima['daily']['weathercode'];

    let estadoClimaHoy = estadoClimaIconos[codigoClima]['name'];
    let iconoHoy = estadoClimaIconos[codigoClima]['icons'];
    return (
<>
    <div> 
        <p>Estado del Clima</p>       
        {estadoClimaHoy}
        <img src={iconoHoy} alt={estadoClimaHoy}/>
    </div>
        

    
</>
    );
        
    
}

export default CondicionClima;