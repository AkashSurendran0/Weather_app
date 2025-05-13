import HomePage from './pages/home.jsx'
import './main.scss'
import Map from './components/map/map.jsx'
import mapContext from './context.js'
import { useState } from 'react'
import 'leaflet/dist/leaflet.css';


function App() {
  const [map, showMap]=useState(false)
  const [coordinates, selectCoordinates]=useState(null)
  const toggleMap = () =>{
    if(map) showMap(false)
    else showMap(true)
  }
  const handleLocationSelect = (coords) =>{
    selectCoordinates(coords)
    console.log('Coords:', coordinates)
  }

  return (
    <>
      <mapContext.Provider value={{map, toggleMap}}>
        { map &&
          <Map locationSelect={handleLocationSelect}/>
        }
        <HomePage/> 
      </mapContext.Provider>   
    </>
  )
}

export default App
