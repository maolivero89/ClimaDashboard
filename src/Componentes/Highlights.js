import '../App.css';


import AirQuality from './AriQuality';
import Humidity from './Humidity';
import IndiceUV from './IndiceUV';
import SunriseSunset from './SunriseSunset';
import Visibility from './Visibility';
import WindStatus from './WindStatus';
import 'animate.css';


function Highlights() {
    return (
<>
<h3>Highlights</h3>
    <div className='GridTemperatura'>
        <div className='Temperatura1'>
            <div className='TarjetaClima'>
               <IndiceUV/>
            </div>

            <div className='TarjetaClima'>
                <Visibility/>
                
            </div>

            <div className='TarjetaClima'>
                  <SunriseSunset/>
            </div>

            <div className='TarjetaClima'>
                <Humidity/>
            </div>

            <div className='TarjetaClima'>
                <WindStatus/>
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