import '../App.css';
import LinesChart from './ChartBar';
import HighTemp from './HighTemperature';
import LowTemp from './LowTemperature';
import ActualyTemp from './ActualyTemperature';



function Today() {
    return (
<>
    
    <h3>Today</h3>
            <div className='GridTemperatura'>

              <div className='Temperatura2'>
                <div className='TarjetaClima'>
                 <HighTemp/>              
                </div>
                <div className='TarjetaClima'>
                 <LowTemp/>
                </div>
                <div className='TarjetaClima'>
                  <ActualyTemp/>
                </div>        
               </div>

              <div className='Temperatura3'>
                <div className='TarjetaClima' style={{width:"600px", height:"230px"}}>
                  <LinesChart/>
                </div>
              </div> 
            </div>
</>
    )

}

export default Today;