import './map.scss'
import { useContext, useState } from 'react'
import mapContext from '../../context'
import {MapContainer, TileLayer, useMapEvents, Marker} from 'react-leaflet'

function LocationSelector({onSelect}){
    useMapEvents({
        click(e){
            const{lat, lng}=e.latlng
            onSelect({lat, lng})
        }
    })
    return null
}

function Map({locationSelect}) {
    const {toggleMap}=useContext(mapContext)
    const [position, setPosition]=useState(null)
    const handleSelect = (coords) =>{
        setPosition(coords)
        locationSelect(coords)
    }

    return (
        <div className='mapBackgroundDiv'>
            <div className='mapFixedDiv'>
                <div className="mapNavbar">
                    <div>Select a point in this map</div>
                    <i class="bi bi-x-circle mapCloseBtn" onClick={()=>toggleMap()}></i>
                </div>
                <div className="map">
                    <MapContainer center={[11, 76]} zoom={10} style={{ height: '400px', width: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <LocationSelector onSelect={handleSelect} />
                        {position && <Marker position={[position.lat, position.lng]} />}
                    </MapContainer>
                </div>
            </div>
        </div>
    )
}

export default Map
