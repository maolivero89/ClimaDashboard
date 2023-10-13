import React, { useEffect, useState } from "react";
import SpinnerA from "./Spiner";



function CuidadDia() {


    const [datosClima, setDatosClima] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('https://api.open-meteo.com/v1/forecast?latitude=-33.1307&longitude=-64.3499&current=temperature_2m&hourly=temperature_2m&timezone=America%2FSao_Paulo').then(resp => resp.json()).then(data => {
            setDatosClima(data);
            setLoading(false);
        }).catch(ex => {
            console.error(ex);
        })
    }, [])



    return (
        <>
            <h3> <div> {!loading && datosClima && datosClima['timezone']}</div>
                <div className="Spiner"> {loading && <SpinnerA/>}</div>
                <div> {!loading && datosClima && (datosClima['current']['time']).slice(0, 10)}</div>
                <div> {!loading && datosClima && (datosClima['current']['time']).slice(-5)}</div>
            </h3>

        </>
    )
} export default CuidadDia;