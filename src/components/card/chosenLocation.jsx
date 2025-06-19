import React, { useEffect, useState } from 'react'
import './card.scss'
import {Trash2} from 'lucide-react'
import { getGif } from './getGif'
import { useContext } from 'react'
import mapContext from '../../context'

function ChosenLocation({index, climate}) {
    const {removeLocation}=useContext(mapContext)
    const [climateGif, setGIf]=useState(null)
    useEffect(()=>{
        const gif=getGif(climate.climate)
        setGIf(gif)
    }, [])

    return (
        <div className="container">
            {climate && (
                <div className='chosenDiv'>
                    <div className="chosenLocation row">
                        <div className="deleteDiv trashDiv col-md-2">
                            <Trash2 className='trash' size={30} onClick={()=>removeLocation(index)}/>
                        </div>
                        <div className="gifDiv gif col-md-4 selectedLocationDiv">
                            <img src={climateGif} alt="" />
                        </div>
                        <div className="locationDetailsDiv col-md-3 selectedDetailsDiv">
                            <p className='livePlace'>{climate.place}</p>
                            <p className='liveDesc'>{climate.desc}</p>
                        </div>
                        <div className="tempDiv col-md-3">
                            <p className='liveTemp'>{climate.temp}&deg;C</p>
                        </div>
                    </div>
                </div>  
            )}
        </div>
    )
}

export default ChosenLocation
