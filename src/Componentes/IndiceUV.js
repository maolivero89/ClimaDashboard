import '../App.css'
import React from 'react';
import data from '../data.json'
import UvIconImg from '../Icons/uv-index.svg'

function IndiceUV() {

    const IndUV = data.daily.uv_index_max;


    return (
<>
    <img className='Icon' src={UvIconImg} alt='Uv-icon'/>
    <span>Indice UV: {IndUV} </span>
</>
    );
        
    
}

export default IndiceUV;