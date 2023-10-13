import '../App.css';
import AirQuality from './AriQuality';
import Humidity from './Humidity';
import IndiceUV from './IndiceUV';
import SunriseSunset from './SunriseSunset';
import Visibility from './Visibility';
import WindStatus from './WindStatus';
import 'animate.css';
import React, { useEffect, useState } from "react";
import SpinnerA from "./Spiner";


function Highlights() {

        const [datosClima, setDatosClima] = useState(null);
        const [loading, setLoading] = useState(true);
      
        useEffect(() => {
          setLoading(true);
          fetch('https://api.open-meteo.com/v1/forecast?latitude=-33.1307&longitude=-64.3499&current=temperature_2m,relativehumidity_2m,is_day,windspeed_10m,winddirection_10m&hourly=relativehumidity_2m,weathercode,visibility,windgusts_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,windspeed_10m_max,winddirection_10m_dominant&timezone=America%2FSao_Paulo&forecast_days=1').then(resp => resp.json()).then(data => {
            setDatosClima(data);
            setLoading(false);
          }).catch(ex => {
            console.error(ex);
          })
        }, [])

console.log(datosClima);



    return (
<>
<h3>Highlights</h3>
    <div className='GridTemperatura'>
        <div className='Temperatura1'>
            <div className='TarjetaClima'>          
               <IndiceUV value={!loading && datosClima && datosClima['daily']['uv_index_max']}/>
               <div className="Spiner"> {loading && <SpinnerA />}</div>
            </div>

            <div className='TarjetaClima'>
                <Visibility value={!loading && datosClima && datosClima['daily']['sunrise'][0].slice(-5)}/>
               <div className="Spiner"> {loading && <SpinnerA />}</div>
                
            </div>

            <div className='TarjetaClima'>
                  <SunriseSunset value={!loading && datosClima && datosClima['daily']['sunset'][0].slice(-5)}/>
               <div className="Spiner"> {loading && <SpinnerA />}</div>
            </div>

            <div className='TarjetaClima'>
                <Humidity value={!loading && datosClima && datosClima['current']['relativehumidity_2m'] + datosClima['current_units']['relativehumidity_2m'] }/>
               <div className="Spiner"> {loading && <SpinnerA />}</div>
            </div>

            <div className='TarjetaClima'>
                <WindStatus value={!loading && datosClima && datosClima['current']['winddirection_10m'] + datosClima['current_units']['winddirection_10m'] + '. Velocidad: ' + datosClima['current']['windspeed_10m'] + datosClima['current_units']['windspeed_10m'] }/>
               <div className="Spiner"> {loading && <SpinnerA />}</div>
            </div>

            <div className='TarjetaClima'>
                <AirQuality/>
            </div>
        </div>              
    </div>
</>
    );
        
    
}

export default Highlights;