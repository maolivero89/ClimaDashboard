// client_id: cb6b18c84b3b484d98018a791577af52

// client_secret:3e3DB105Fbf642Bf88d5eeB8783EE1E6

import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import marker from '../BusIcon/6.png';
import L from 'leaflet';
import DatosTransporte from '../DatosTransporte.json'

function DashBoardTrans() {
  const position = [-34.599722, -58.381944]
  const myIcon = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    popupAnchor: [-0, -0],
    iconSize: [60, 60],
  });

  return (

    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {DatosTransporte.map((item, index) => {
        return (<Marker position={[item["latitude"], item["longitude"]]} icon={myIcon}>
          <Popup>
            Linea: {[item['route_short_name']]} <br/>
            Empresa: {[item["agency_name"]]} <br/>
            Destino: {[item['trip_headsign']]}
          </Popup>
        </Marker>)
      })}

    </MapContainer>

  )
} export default DashBoardTrans;




