import './navbar.scss'
import { useContext, useState, useRef } from 'react'
import mapContext from '../../context'
import axios from 'axios'
import PlaceSuggestions from './placeSuggestions'

function Navbar() {
  const {toggleMap}=useContext(mapContext)
  const [suggestionPlaces, setSuggestionPlaces]=useState(null)
  const [place, setPlace]=useState(null)
  
    const debounceTimeout = useRef(null);

  const checkPlace = (e) => {
    const value = e.target.value;

    clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(async () => {
      if (value.trim() === '') return setSuggestionPlaces('');

      try {
        const result = await axios.get('https://nominatim.openstreetmap.org/search', {
          params: {
            q: value,
            format: 'json',
            limit: 5,
          },
        });

        setSuggestionPlaces(result.data);
      } catch (err) {
        console.error('Error fetching location suggestions:', err);
      }
    }, 500);
  };

  return (
    <div className="container">
        <div className='navbar row'>
            <div className="welcomeText col-md-4">
              <div>Welcome to weather app!</div>
            </div>  
            <div className="citySpace col-md-8">
                <div className="searchCity col-sm-6">
                  <input type="text" placeholder='Search for a city' onChange={checkPlace}/>
                  { suggestionPlaces &&
                      <PlaceSuggestions places={suggestionPlaces}/>
                  }
                </div>
                <div className="addCity col-sm-6">
                  <button onClick={()=>toggleMap()}>Open Maps</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
