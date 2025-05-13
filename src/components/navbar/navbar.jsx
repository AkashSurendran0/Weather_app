import './navbar.scss'
import { useContext } from 'react'
import mapContext from '../../context'

function Navbar() {
  const {toggleMap}=useContext(mapContext)

  return (
    <div className="container">
        <div className='navbar row'>
            <div className="welcomeText col-md-4">
              <div>Welcome to weather app!</div>
            </div>  
            <div className="citySpace col-md-8">
                <div className="searchCity col-sm-6">
                  <input type="text" placeholder='Search for a city'/>
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
