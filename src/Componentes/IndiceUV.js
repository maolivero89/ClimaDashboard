import '../App.css'
import React from 'react';
import data from '../data.json'
import UvIconImg from '../Icons/uv-index.svg'

function IndiceUV() {


    
    return (
<>
    <img className='Icon' src={UvIconImg} alt='Uv-icon'/>
    <span>Indice UV: </span>
</>
    );
        
    
}

export default IndiceUV;