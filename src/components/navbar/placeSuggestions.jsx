import React from 'react'
import './navbar.scss'

function PlaceSuggestions({places}) {
  return (
    <div className='suggestions'>
        { places.map((place)=>(
            <div className="place">
                <div>{place.display_name}</div>
            </div>
        )) }
    </div>
    
  )
}

export default PlaceSuggestions
