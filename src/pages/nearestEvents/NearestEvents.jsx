import "./NearestEvents.css"
import {backto_btn, nearestTop,nearestCont} from "../../data/Muhammadsodiq.js"
import { Link } from "react-router-dom"

const NearestEvents = () => {
  return (
    <div className="nearest-events">
      <div className="nearest-events__backto">
        <Link to="/" className="nearest-events__backto--link">{backto_btn.text}</Link>
      </div>
      <div className="nearest-events__top">
        <h3>{nearestTop.title}</h3>
        <button>{nearestTop.btn}</button>
      </div>
      <div className="nearest-events__cont">
        {
          nearestCont.map((cart,index) => (
            <div className="nearest-events__cart" key={index}>
              <div className="nearest-events__cart__top">
                <img className="nearest-events__cart--icon" src={cart.icon} alt="" />
                <h4 className="nearest-events__cart--title">{cart.title}</h4>
              </div>
              <div className="nearest-events__cart__bot">
                <p className="nearest-events__cart--date">{cart.date}</p>
                <p className="nearest-events__cart--time">{cart.time}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default NearestEvents
