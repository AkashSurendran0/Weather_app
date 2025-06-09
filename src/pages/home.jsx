import Navbar from "../components/navbar/navbar"
import LiveLocation from "../components/card/liveLocation"
// import { useState } from "react"

function HomePage() {
    return (
        <div className="mainDiv">
            <div className="backgroundDiv">
                <Navbar/>
                <LiveLocation/>
            </div>
        </div>
    )
}

export default HomePage
