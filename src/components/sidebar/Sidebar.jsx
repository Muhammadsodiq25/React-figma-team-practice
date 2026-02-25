import "./Sidebar.css"
import {logo, link, support, logout} from "../../data/Muhammadsodiq.js"
import { Link, } from "react-router-dom"
import { useState } from "react"

const Sidebar = () => {
    const [hide,setHide] = useState(false)
  return (
    <div style={{width:`${hide ? '5%' : '10%'}`}}>
            <div className="sidebar" style={{alignItems:`${hide ? 'center' : ''}`, padding:`${hide ? '10px' : ''}`}}>
        <button className="sidebar--logo" onClick={()=> {setHide(!hide)}}>
            <img width={50} height={50} src={logo} alt="" />
        </button>
      <nav>
        <ul className="sidebar__links">
            {
                link.map((lin,index) => {
                    return <li key={index} className="sidebar--link">
                        <Link className="sidebar--link--text" style={{borderRadius:'8px', color:'#7d8592',}} to={lin.to}>
                        <img src={lin.img} alt="" />

                        <span style={{display:`${hide ? 'none' : ''}`}}>{lin.text}</span>
                        </Link>
                    </li>
                })
            }
        </ul>
      </nav>
              <div className="sidebar__support">
            <img style={{width:"150px", display:`${hide ? 'none' : ''}`}} src={support.img} alt="" />
            <button>
                <img src={support.btnImg} alt="" />
                <span style={{display:`${hide ? 'none' : ''}`}}>{support.btn}</span>
                </button>
        </div>
        <button className="sidebar--logout">
            <img src={logout.img} alt="" />
            <span style={{display:`${hide ? 'none' : ''}`}}>{logout.text}</span>
        </button>
    </div>
    </div>
  )
}

export default Sidebar
