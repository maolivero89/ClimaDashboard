import '../App.css'
import WindIcon from '../Icons/windsock.svg'

function WindStatus() {
    return (
<>
    <img className='Icon' src={WindIcon} alt='Wind-Status'/>
    <span>Wind Status</span>    
</>
    );
        
    
}

export default WindStatus;