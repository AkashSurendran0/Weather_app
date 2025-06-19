import Navbar from "../components/navbar/navbar"
import LiveLocation from "../components/card/liveLocation"
import SlidingSelectedLocations from "../components/card/slidingSelectedLocations"
// import { useState } from "react"

function HomePage() {
    return (
        <div className="mainDiv">
            <div className="backgroundDiv">
                <Navbar/>
                <LiveLocation/>
                <SlidingSelectedLocations/>
            </div>
        </div>
    )
}

export default HomePage
