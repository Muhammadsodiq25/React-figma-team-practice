import './Projects.css'
import ImageMedium from '../../assets/MediumOne.png'
import ImageLowOne from '../../assets/LowOne.png'
import ImageLowTwo from '../../assets/LowTwo.png'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='ConTainer'>
      <h3>
        <p><Link>Info</Link></p>
        <p><Link>About</Link></p>
        <p><Link>Use</Link></p>
      </h3>
        <div className="Container">
      <div className="LeftDiv">
        <h3>Current Projects</h3>
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
                <main className="TextMain">
                    <p>PN0001245</p>
                    <h3>Medical App (iOS native)</h3>
                    <p>View details</p>
                </main>
      </div>
      <div className='Task'>
          <p className='TaskNav'>Activ Tasks</p>
              <div className='Div'>
                  <p>Task Name <span>Research</span></p>
                  <p>Estimate<span>2d 4h</span></p>
                  <p>Spent Time<span>2d 4h</span></p>
                  <p>Assignee <img src={ImageMedium}/></p>
              </div>
              <div className='Div'>
                  <p>Task Name <span>Research</span></p>
                  <p>Estimate<span>2d 4h</span></p>
                  <p>Spent Time<span>2d 4h</span></p>
                  <p>Assignee <img src={ImageMedium}/></p>
              </div>
              <div className='Div'>
                  <p>Task Name <span>Research</span></p>
                  <p>Estimate<span>2d 4h</span></p>
                  <p>Spent Time<span>2d 4h</span></p>
                  <p>Assignee <img src={ImageLowOne}/></p>
              </div>
              <div className='Div'>
                  <p>Task Name <span>Research</span></p>
                  <p>Estimate<span>2d 4h</span></p>
                  <p>Spent Time<span>2d 4h</span></p>
                  <p>Assignee <img src={ImageLowTwo}/></p>
              </div>
              <div className='Div'>
                  <p>Task Name <span>Research</span></p>
                  <p>Estimate<span>2d 4h</span></p>
                  <p>Spent Time<span>2d 4h</span></p>
                  <p>Assignee <img src={ImageMedium}/></p>
              </div>
              <div className='Div'>
                  <p>Task Name <span>Research</span></p>
                  <p>Estimate<span>2d 4h</span></p>
                  <p>Spent Time<span>2d 4h</span></p>
                  <p>Assignee <img src={ImageMedium}/></p>
              </div>
      </div>
    </div>
    </div>
  )
}

export default Projects
