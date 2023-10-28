import './App.css';
import Today from './Componentes/Today';
import Highlights from './Componentes/Highlights';
import React from 'react'
import CuidadDia from './Componentes/CiudadDia';
import DashBoardTrans from './Componentes/DashboardTransito';
import SeleccionarLinea from './Componentes/SelectTransport';


function App() {
  return (
    <div className='App'>
      <h2 id='titulo' > DASHBOARD DE CLIMA y TRANSPORTE CON REACT Y API</h2>

      <div className='Clima'>
        <div>
          <CuidadDia />
        </div>
        <div className='GridClima'>
          <div className='Clima1'>
            <Today />
          </div>

          <div className='Clima2'>
            <Highlights />
          </div>
        </div>
      </div>


      <div className='AppT'>
        <div className='Clima'>
          <h3>DashBoard de transito de la Ciudad de Buenos Aires</h3>     
          <SeleccionarLinea/>     
          {/* <DashBoardTrans/> */}
        </div>

      </div>



    </div>
  );
}

export default App;