import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import marker from '../BusIcon/2.png';
import L from 'leaflet';
import React, { useState } from 'react';



function MarkerModif({ data }) {
    const { latitude, longitude, route_short_name, trip_headsign, speed, agency_name} = data;
    const position = [latitude, longitude]; 
    
    const myIcon = new L.Icon({
        iconUrl: marker,
        iconRetinaUrl: marker,
        popupAnchor: [-0, -0],
        iconSize: [60, 60],


        
    });

    return (
        <Marker position={position} icon={myIcon}>
            <Popup>
                <span>Linea: {route_short_name}</span><br />
                <span>Destino: {trip_headsign}</span><br />
                <span>Velocidad:{speed}km/h</span><br />                 
                <span>Nombre de la Empresa: {agency_name}</span><br />                
            </Popup>
        </Marker>
    );
}


function Mapa({ loading, transportData }) {
    const [selectedLine, setSelectedLine] = useState('');
    const filteredData = !loading ? transportData : [];

    const filteredDataByLine = filteredData.filter((item) => {
        const routeName = item.route_short_name.match(/\d+/);
        return selectedLine === '' || routeName.toString() === selectedLine;
    }); 

   
    

    return (

        <MapContainer center={[-34.599722, -58.381944]} zoom={10} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
              {filteredDataByLine.map((item, index) => {                    
                return <MarkerModif key={index} data={item} iconUrl={marker} />              
                   
                  })}

        </MapContainer>

    )
} export default Mapa;


