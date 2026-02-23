import { Link } from "react-router-dom"
import {dashboard__title,calendarImg,dashboardWorkload,dashboardWorkloadTopTitle,projectsTop,projectsCont,dashboardEvents,events__cont, streamTitle,streamCont} from "../../data/Muhammadsodiq.js"
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="dashboard__top">
        <h3 className="dashboard--title">{dashboard__title}</h3>
        <p className="dashboard--calendar">
          <img src={calendarImg} alt="" />
          <span>Nov 16, 2020 - Dec 16, 2020</span>
        </p>
      </div>
      <div className="dashboard__bot">
        <div className="dashboard__bot__left">
          <div className="dashboard__workload">
            <div className="dashboard__workload__top">
              <h3>{dashboardWorkloadTopTitle.title}</h3>
              <button>{dashboardWorkloadTopTitle.btn}</button>
            </div>
            <div className="dashboard__workload__cont">
              {
                dashboardWorkload.map((cart,index) => {
                  return <div key={index} className="dashboard__workload__cart">
                    <img src={cart.img} alt="" />
                    <h4>{cart.title}</h4>
                    <h5>{cart.work}</h5>
                    <p>{cart.level}</p>
                  </div>
                })
              }
            </div>
          </div>
          <div className="dashboard__projects">
            <div className="dashboard__workload__top">
              <h3>{projectsTop.title}</h3>
              <button>{projectsTop.btn}</button>
            </div>
            <div className="dashboard__projects__cont">
              {
                projectsCont.map((cart,index) => {
                  return <div key={index} className="dashboard__projects__cart">
                    <div className="dashboard__projects__cart__left">
                      <div className="dashboard__projects__cart__left__top">
                        <img src={cart.img} alt="" />
                        <di className="dashboard__projects__cart__left__top__text">
                          <p className="dashboard__projects__cart__left--id">{cart.id}</p>
                          <h3 className="dashboard__projects__cart__left--title">{cart.title1}</h3>
                        </di>
                      </div>
                      <div className="dashboard__projects__cart__left__bot">
                          <p className="dashboard__projects__cart--created">{cart.created}</p>
                          <p className="dashboard__projects__cart--difficulty" style={{color:`${cart.difficultyCol}`}}>{cart.difficulty}</p>
                      </div>
                    </div>
                    <div style={{height:"auto", border:'1px solid #E4E6E8'}}></div>
                    <div className="dashboard__projects__cart__right">
                      <h3 className="dashboard__projects__cart__right--title">{cart.title2}</h3>
                      <div className="dashboard__projects__cart__right__bot">
                        <div className="dashboard__projects__cart__right__cart">
                          <p>All tasks</p>
                          <h3>{cart.tasks}</h3>
                        </div>
                        <div className="dashboard__projects__cart__right__cart">
                          <p>Active tasks</p>
                          <h3>{cart.activeTasks}</h3>
                        </div>
                        <div className="dashboard__projects__cart__right__cart">
                          <p>Assignees</p>
                          <img width={80} src={cart.assignees} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </div>
        <div className="dashboard__bot__right">
          <div className="dashboard__events">
            <div className="dashboard__events__top">
              <h3 className="dashboard__events--title">{dashboardEvents.title}</h3>
              <Link className="dashboard__events--btn" to='/nearest_events'>{dashboardEvents.btn}</Link>
            </div>
            <div className="dashboard__events__cont">
              {
                events__cont.map((cart, index) => (
                  <div className="dashboard__events__cart" key={index}>
                    <div className="dashboard__events__cart__text">
                      <h4 className="dashboard__events__cart--title">{cart.title}</h4>
                      <div className="dashboard__events__cart__text__bot">
                        <p className="dashboard__events__cart--date">{cart.date}</p>
                        <p className="dashboard__events__cart--time">{cart.time}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="dashboard__events">
            <h3 className="dashboard__events__cart--title">{streamTitle}</h3>
            <div className="dashboard__events__cont">
              {
                streamCont.map((cart,index) => (
                  <div className="dashboard__stream__cart" key={index}>
                    <div className="dashboard__stream__cart__user">
                      <img src={cart.userImg} alt="" />
                      <div className="dashboard__stream__cart__user__text">
                        <h4>{cart.user}</h4>
                        <p>{cart.job}</p>
                      </div>
                    </div>
                    <div className="dashboard__stream__cart__cont">
                      {
                        cart.works.map((cart,index) => (
                          <div key={index} className="dashboard__stream__cart__works">
                            <img src={cart.icon} alt="" width={cart.iconWidth}/>
                            <h4>{cart.text}</h4>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
