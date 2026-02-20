import {dashboard__title,calendarImg,dashboardWorkload,dashboardWorkloadTopTitle,projectsTop,projectsCont} from "../../data/Muhammadsodiq.js"
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
                        <div className="dashboard__projects__cart__left__bot">
                          <p className="dashboard__projects__cart--created">{cart.created}</p>
                          <p className="dashboard__projects__cart--difficulty" style={{color:`${cart.difficultyCol}`}}>{cart.difficulty}</p>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard__projects__cart__left__bot--title">
                      <h3>{cart.title2}</h3>
                      <div className="dashboard__projects__cart__left__bot__bot">
                        
                      </div>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
