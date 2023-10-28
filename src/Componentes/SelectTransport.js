import React, { useEffect, useState } from 'react';
import Conversion from '../Componentes/convertirTrans.json';
import Mapa from './dashboard2';
import './select.css';


function SeleccionarLinea() {
  const [transportData, setTransportData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [seleccionarLinea, setSeleccionarLinea] = useState('')

  const fetchdata = (idRuta) => {

    const apiUrl = `https://datosabiertos-transporte-apis.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?route_id=${idRuta}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`;

    setLoading(true);
    fetch(apiUrl)
      .then((resp) => resp.json())
      .then((data) => {
        setTransportData(data);
        setLoading(false);
        
      })
      .catch((ex) => {
        console.error(ex);
      });
  }
  
  useEffect(() => {
    fetchdata(Conversion[seleccionarLinea])
  }, [seleccionarLinea]);


  useEffect(() => {
    fetchdata(Conversion[seleccionarLinea])
    const interval = setInterval(() => {
      fetchdata(Conversion[seleccionarLinea])
    }, 31000);
    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <h1>Colectivos de la Ciudad de Buenos Aires</h1>
      <div className='content-select'>
      <select  value={seleccionarLinea} onChange={(e) => setSeleccionarLinea(e.target.value)}>
        <option value="">Seleccione una opción</option>
        {Object.keys(Conversion).map((routeName, index) => (
          <option key={index} value={Conversion[index]}>
            {routeName}
          </option>
        ))}
      </select>
      </div>
      <p></p>
      <Mapa transportData={transportData} loading={loading}/>
      
         
    </>
  );
}


export default SeleccionarLinea;



