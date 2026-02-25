import { useState } from "react";
import Abdulbosit from "../../data/Abdulbosit";
import "./MyProfile.css";

function MyProfile() {
  const data = Abdulbosit;
  const [activeTab, setActiveTab] = useState("Projects");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="myprofile">
      <h1 className="page-title">My Profile</h1>

      <div className="profile-wrapper">
        <div className="profile-left">
          <div className="profile-card">
            <img src={data.avatar} alt="" />
            <h2>{data.name}</h2>
            <p className="profile-card-p">{data.role}</p>
            <hr />
            <div className="info-list">
              {data.info.map((item, index) => (
                <div key={index} className="info-item">
                  <span>{item.label}</span>
                  <input type="text" placeholder={item.value} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="profile-right">
          <div className="tabs-header">
            <div className="tabs">
              <button
                className={activeTab === "Projects" ? "active" : ""}
                onClick={() => setActiveTab("Projects")}
              >
                Projects
              </button>
              <button
                className={activeTab === "Team" ? "active" : ""}
                onClick={() => setActiveTab("Team")}
              >
                Team
              </button>
              <button
                className={activeTab === "Vacations" ? "active" : ""}
                onClick={() => setActiveTab("Vacations")}
              >
                My Vacations
              </button>
            </div>

            <button className="current-btn" onClick={() => setShowModal(true)}>
              Current Projects
            </button>
          </div>

          {activeTab === "Projects" &&
            data.projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-main">
                  <span className="project-code">{project.code}</span>
                  <h3>{project.title}</h3>
                  <div className="project-main-bottom">
                    <p>Created {project.created}</p>
                    <span
                      className={`priority ${project.priority.toLowerCase()}`}
                    >
                      {project.priority}
                    </span>
                  </div>
                </div>

                <div className="gorizontal__line"></div>

                <div className="project-data-card">
                  <h4>Project Data</h4>
                  <div className="project-data-rows">
                    <div className="data-row">
                      <span>All tasks</span>
                      <p>{project.projectData.allTasks}</p>
                    </div>
                    <div className="data-row">
                      <span>Active tasks</span>
                      <p>{project.projectData.activeTasks}</p>
                    </div>
                    <div className="data-row">
                      <span>Assignees</span>
                      <p>{project.assignees}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {activeTab === "Team" && (
            <div className="team-grid">
              {data.team.map((member) => (
                <div key={member.id} className="team-card">
                  <img src={member.avatar} alt="" />
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                  <span className={`level ${member.level.toLowerCase()}`}>
                    {member.level}
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Vacations" && (
            <div className="vacation-page">
              <div className="vacation-top">
                {data.vacation.vacationTop.map((item, index) => (
                  <div key={index} className="vacation-top-card">
                    <img src={item.img} alt="" />
                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.day}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="vacation-title">{data.vacation.vacationName}</h3>

              <div className="vacation-cards">
                {data.vacation.vacationCards.map((card) => (
                  <div key={card.id} className="vacation-card">
                    <div className="vacation-card-title">
                      <span>{card.subTitle}</span>
                      <h3>{card.title}</h3>
                    </div>

                    <div className="vacation-info">
                      {card.cardsLeft.map((item, i) => (
                        <div key={i} className="vacation-info-item">
                          <span>{item.type}</span>
                          <p>{item.date}</p>
                        </div>
                      ))}
                    </div>

                    <button
                      className={`vacation-btn ${card.btn.toLowerCase()}`}
                    >
                      {card.btn}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {showModal && (
            <div className="modal-overlay" onClick={() => setShowModal(false)}>
              <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                  <h3>{data.requestModal.title}</h3>
                  <button onClick={() => setShowModal(false)}>X</button>
                </div>

                <p className="modal-type">Request Type</p>

                <div className="type-buttons">
                  {data.requestModal.types.map((type, i) => (
                    <button key={i}>{type}</button>
                  ))}
                </div>

                <div className="days-hours">
                  <button style={{ background: "#4f7cff", color: "white" }}>
                    Days
                  </button>
                  <button>Hours</button>
                </div>

                <div className="calendar">
                  <div className="calendar-header">
                    <span>{data.requestModal.month}</span>
                  </div>

                  <div className="calendar-days">
                    {data.requestModal.days.map((d, i) => (
                      <span key={i}>{d}</span>
                    ))}
                  </div>

                  <div className="calendar-dates">
                    {data.requestModal.dates.map((date, i) => (
                      <p key={i}>{date}</p>
                    ))}
                  </div>
                </div>

                <div className="modal-footer">
                  <button className="send-btn">Send Request</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
