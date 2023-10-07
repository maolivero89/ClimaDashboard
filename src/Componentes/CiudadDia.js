import React from "react";
import data from '../data.json'

function CuidadDia() {

    const Fecha = String(data.current_weather.time).slice(0, 10)
    const Hora = String(data.current_weather.time).slice(-5)

    return(
        <>
        <h2>Rio Cuarto, Cordoba</h2>
        <h3>{Fecha +" "+ Hora}</h3>
            
            
        </>
    )
} export default CuidadDia;