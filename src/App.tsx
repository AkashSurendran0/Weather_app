import HomePage from './pages/home.jsx'
import './main.scss'
import Map from './components/map/map.jsx'
import mapContext from './context.js'
import { useState, useEffect } from 'react'
import 'leaflet/dist/leaflet.css';
import axios from 'axios'

function App() {
  interface LocationData {
    climate: string;
    desc: string;
    place: string;
    temp: number;
  }

  const [selectedLocation, setLocation] = useState<LocationData[]>([]);
  const [liveInfo, setInfo]=useState({climate:'', desc:'', place:'', temp:0})
  const [map, showMap]=useState(false)
  const toggleMap = () =>{
    if(map) showMap(false)
    else showMap(true)
  }
  const handleLocationSelect = (coords) =>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&appid=b54e4953ed085a3c2e0af7913c2d1bc5&units=metric`)
    .then(weather=>{
      const weatherData=weather.data
      setLocation(prev=>{
        const updated=prev.length>=5? prev.slice(1):prev

        return[
          ...updated,
          {
            climate: weatherData.weather[0].main,
            desc: weatherData.weather[0].description,
            place: weatherData.name,
            temp: weatherData.main.temp
          }
        ]
      })
    })
    console.log('Details, ', selectedLocation)
  }

  function removeLocation(index) {
    setLocation(prev => prev.filter((_, i) => i !== index));
  }

  // useEffect(()=>{
  //   axios.get('https://ipapi.co/json')
  //     .then(response => {
  //       const data = response.data
  //       axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${data.latitude}&lon=${data.longitude}&appid=b54e4953ed085a3c2e0af7913c2d1bc5&units=metric`)
  //       .then(weather=>{
  //         const weatherData=weather.data
  //         setInfo({
  //           climate: weatherData.weather[0].main,
  //           desc: weatherData.weather[0].description,
  //           place: weatherData.name,
  //           temp: weatherData.main.temp
  //         })
  //       })
  //       console.log('IP-based location:', data.latitude, data.longitude)
  //     })
  //     .catch(error => {
  //       console.error('IP Geolocation error:', error)
  //     })
  // }, [])

  return (
    <>
      <mapContext.Provider value={{map, toggleMap, liveInfo, selectedLocation, removeLocation}}>
        { map &&
          <Map locationSelect={handleLocationSelect}/>
        }
        <HomePage/> 
      </mapContext.Provider>   
    </>
  )
}

export default App
