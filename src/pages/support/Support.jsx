import "./Support.css"
import {support_img} from '../../data/Muhammadsodiq.js'
import { Link } from "react-router-dom"

const Support = () => {
  return (
    <div className="support">
        <img className="support--img" src={support_img} alt="" />
        <div className="support__text">
            <h3 className="support--title">Need some Help?</h3>
            <p className="support--des">Describe your question and our specialists will answer you <br />within 24 hours.</p>
            <form className="support__form">
                <label htmlFor="requestSubject">Request Subject</label>
                <input type="text" placeholder="Technical difficulites" required/>
                <label htmlFor="description">Description</label>
                <textarea name="dscription" id="description" placeholder="Add some description of the request"></textarea>
                <button type="submit" className="support--submit">
                    <Link className="support--submit" to="/">
                    Send Request
                    </Link>
                </button>
            </form>
        </div>
    </div>
  )
}

export default Support
