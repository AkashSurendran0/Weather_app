import React from 'react'
import './navbar.scss'
import { useContext } from 'react'
import mapContext from '../../context'

function PlaceSuggestions({places, clearSuggestions}) {
  const {handleLocationSelect}=useContext(mapContext)

  const setLocation = (coords) =>{
    handleLocationSelect(coords)
    clearSuggestions()
  }

  return (
    <div className='suggestions'>
        { places.map((place)=>(
            <div className="place" onClick={()=>setLocation({lat:place.lat, lng:place.lon})}>
                <p style={{color:"black"}}>{place.display_name}</p>
            </div>
        )) }
    </div>
    
  )
}

export default PlaceSuggestions
