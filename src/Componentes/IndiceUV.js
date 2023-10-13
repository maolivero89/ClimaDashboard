import '../App.css'
import React from 'react';

import UvIconImg from '../Icons/uv-index.svg'


function IndiceUV({value}) {

   


    return (
<>
    <img className='Icon' src={UvIconImg} alt='Uv-icon'/>
    <span>Indice UV: {value} </span>
</>
    );
        
    
}

export default IndiceUV;