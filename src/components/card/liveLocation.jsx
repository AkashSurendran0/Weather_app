import './card.scss'
import { useContext } from 'react'
import mapContext from '../../context'
import React from 'react'
import { getGif } from './getGif'

function LiveLocation() {
    let {liveInfo}=useContext(mapContext)
    const gif=getGif(liveInfo.climate)
    console.log(liveInfo, gif)

    return (
        <div className="container">
            <div className='liveLocation row'>
                { liveInfo? (
                <>
                    <div className='col-md-3 details'>
                        <p className='liveTag'>Live location Details:</p>
                    </div>
                    <div className="gif details col-md-3">
                        <img src={gif} alt="Live Location not accessible" />
                    </div>
                    <div className="details location col-md-3">
                        <p className='livePlace'>{liveInfo.place}</p>
                        <p className='liveDesc'>{liveInfo.desc}</p>
                    </div>
                    <div className="temp col-md-3 details">
                        <p className='liveTemp'>{liveInfo.temp}&deg;C</p>
                    </div>
                </>
                ):(
                <>
                    <div className='fetchError'>
                        <div className='col-md-6 fetchErrorGif'>
                            <img src="weather_gifs/cantFetch.gif" alt="gif loading..." />
                        </div>
                        <div className='col-md-6'>
                            <p>Cant fetch live Info :(</p>
                        </div>
                    </div>
                </>
                )}
            </div>
        </div>
    )
}

export default LiveLocation
