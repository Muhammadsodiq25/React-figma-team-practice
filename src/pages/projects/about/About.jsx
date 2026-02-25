import React from 'react'
import ImageMedium from '../../../assets/MediumOne.png'
import ImageLowOne from '../../../assets/LowOne.png'
import ImageLowTwo from '../../../assets/LowTwo.png'
import './About.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="container">
        <p><Link to={'/projects'}>Project</Link></p>
        <div className="LeftDiv">
        <h3>Current Projects</h3>
                <main className="TextMain">
                    <main className='MainMiniText'>
                        <p>PN0001245</p>
                        <h3>Medical App (iOS native)</h3>
                        <p>View details</p>
                    </main>
                </main>
                <main className="TextMain">
                    <p>PN0001245</p>
                    <h3>Medical App (iOS native)</h3>
                    <p>View details</p>
                </main>
                <main className="TextMain">
                    <p>PN0001245</p>
                    <h3>Medical App (iOS native)</h3>
                    <p>View details</p>
                </main>
                <main className="TextMain">
                    <p>PN0001245</p>
                    <h3>Medical App (iOS native)</h3>
                    <p>View details</p>
                </main>
                <main className="TextMain">
                    <p>PN0001245</p>
                    <h3>Medical App (iOS native)</h3>
                    <p>View details</p>
                </main>
                <main className="TextMain">
                    <p>PN0001245</p>
                    <h3>Medical App (iOS native)</h3>
                    <p>View details</p>
                </main>
      </div>
      <div className='cardsDiv'>
            <div className='MainNavTx'>
                <main className='TextC'>
                    <p>TS0001245</p>
                    <h3>UX sketches</h3>
                </main>
                <main className='TextD'>
                    <p>4d</p>
                    <img src={ImageMedium}/>
                </main>
            </div>
            <div className='MainNavTx'>
                <main className='TextC'>
                    <p>TS0001245</p>
                    <h3>UX sketches</h3>
                </main>
                <main className='TextD'>
                    <p>4d</p>
                    <img src={ImageMedium}/>
                </main>
            </div>
            <div className='MainNavTx'>
                <main className='TextC'>
                    <p>TS0001245</p>
                    <h3>UX sketches</h3>
                </main>
                <main className='TextD'>
                    <p>4d</p>
                    <img src={ImageMedium}/>
                </main>
            </div>
            <div className='MainNavTx'>
                <main className='TextC'>
                    <p>TS0001245</p>
                    <h3>UX sketches</h3>
                </main>
                <main className='TextD'>
                    <p>4d</p>
                    <img src={ImageMedium}/>
                </main>
            </div>
      </div>
    </div>
  )
}

export default About