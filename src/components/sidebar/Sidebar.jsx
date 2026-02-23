import "./Sidebar.css"
import {logo, link, support, logout,support_img} from "../../data/Muhammadsodiq.js"
import { Link, } from "react-router-dom"
import { useState } from "react"

const Sidebar = () => {
    const [hide,setHide] = useState(false)
    const [open, setOpen] = useState(false)
  return (
    <div style={{width:`${hide ? '5%' : '10%'}`, height:'100%'}}>
        <div style={{position:'fixed', top:'10%', width:'100%', alignItems:'center', display:`${open ? 'flex' : 'none'}`, justifyContent:'center', zIndex:'1000', background:'', height:'100%', margin:'0 auto'}}>
        <div className="support">
            <div className="support__close">
                <button onClick={()=> setOpen(false)}>✕</button>
            </div>
            <div className="support__text">
                <h3 className="support--title">Need some Help?</h3>
                <img width={'100%'} src={support_img} alt="" />
                <p className="support__des">Describe your question and our specialists will answer you <br />within 24 hours.</p>
                <form>
                    <label htmlFor="requestSubject">Request Subject</label>
                    <input type="text" placeholder="Technical difficulites" required/>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" placeholder="Add some description of the request" required></textarea>
                    <button type="submit">Send Request</button>
                </form>
            </div>
        </div>
        </div>
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
            <button className="sidebar__support--btn" onClick={()=> setOpen(!open)}>
                <img src={support.btnImg} alt="" />
                <span onClick={()=> setOpen(!open)} style={{display:`${hide ? 'none' : ''}`, cursor:'pointer'}}>{support.btn}</span>
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
