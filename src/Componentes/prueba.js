import HighIcon from '../Icons/thermometer-colder.svg'
import './prueba.css'



function Prueba() {
    return (
        <>
<div className="boxesContainer">
  <div className="cardBox">
    <div className="card">
      <div className="front">{<>
        <img  src={HighIcon} alt='High-Icon'/>
        <span> High Temperature</span>
      </>        
      }</div>
      <div className="back">{'23°'}</div>
    </div>
  </div>
</div>
        </>
    )
}
 
export default Prueba;

