import React from 'react'
import ChosenLocation from './chosenLocation'
import './card.scss'
import { useContext } from 'react'
import mapContext from '../../context'

function SlidingSelectedLocations() {
    const {selectedLocation}=useContext(mapContext)
    console.log('asdf', selectedLocation)

    return (
        <div className='selectedLocationsDiv'>
            <div className="chosenHeading">
                Selected Locations
            </div>
            <div className="allSelectedLocations">
                {selectedLocation.map((climate, index)=>(
                    <ChosenLocation key={index} index={index} climate={climate}/>
                ))}
            </div>
        </div>
    )
}

export default SlidingSelectedLocations
