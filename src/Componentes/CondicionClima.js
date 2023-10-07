import React from "react";
import '../App.css'
import data from '../data.json'
import InfoCodigoClima from '../CodigosClima.json'

function CondicionClima() {

    const CodigoClima = data.daily.weathercode[0].toString();
    const ConditionClima = InfoCodigoClima[CodigoClima];

    return (
<>
    <div> 
        <p>Estado del Clima</p>       
        {ConditionClima?.name}
        <img src={ConditionClima?.icons} alt={ConditionClima?.name}/>
    </div>
        

    
</>
    );
        
    
}

export default CondicionClima;