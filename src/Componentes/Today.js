import '../App.css';
import LinesChart from './ChartBar';
import SpinnerA from "./Spiner";
import LowIcon from '../Icons/thermometer-colder.svg'
import CondicionClima from './CondicionClima';
import 'animate.css';
import React, { useEffect, useState } from "react";
import HighIcon from '../Icons/thermometer-warmer.svg'
import ActTemperature from '../Icons/thermometer-colder.svg'





function Today() {

  const [datosClima, setDatosClima] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-33.1307&longitude=-64.3499&current=temperature_2m,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=America%2FSao_Paulo&forecast_days=1').then(resp => resp.json()).then(data => {
      setDatosClima(data);
      setLoading(false);
    }).catch(ex => {
      console.error(ex);
    })
  }, [])

 



  return (
    <>

      <h3>Today</h3>
      <div className='GridTemperatura'>

        <div className='Temperatura2 '>
          <div className='TarjetaClima'>
            <img className='Icon' src={HighIcon} alt='High-Icon' />
            <div>
              <span> Temperatura maxima: </span>
              {!loading && datosClima && datosClima['daily']['temperature_2m_max']}
              <div className="Spiner"> {loading && <SpinnerA />}</div>
            </div>
          </div>
          <div className='TarjetaClima'>
            <img className='Icon' src={LowIcon} alt='Low-Icon' />
            <div>
              <span> Temperatura minima: </span>
              {!loading && datosClima && datosClima['daily']['temperature_2m_min']}
              <div className="Spiner"> {loading && <SpinnerA />}</div>
            </div>
          </div>
          <div className='TarjetaClima'>
            <CondicionClima />
          </div>
        </div>

        <div className='Temperatura3'>
          <div className='TarjetaClima2' style={{ width: "600px", height: "230px" }}>
            <LinesChart />
          </div>
          <div className='TarjetaClima'>
          <img className='Icon' src={ActTemperature} alt='Temperature'/>
            <div>
              <span> Temperatura Actual </span>
              {!loading && datosClima && datosClima['current']['temperature_2m']}
              <div className="Spiner"> {loading && <SpinnerA />}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Today;