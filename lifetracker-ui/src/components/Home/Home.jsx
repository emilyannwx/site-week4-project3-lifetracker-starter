import { Link } from "react-router-dom"
import health from "../../assets/health.png"

import "./Home.css"

export default function Home() {
  return (
    <div className="Home">
      <div className="jumbo">
        <h3 className="subheading">Helping you take back control of your world</h3>

        <h1 className="heading">LifeTracker</h1>
      </div>
      <div className="media">
        <img src={health} alt="health" />
      </div>
    </div>
  )
}
