import { useState } from "react";
import Abdulbosit from "../../data/Abdulbosit";
import "./MyProfile.css";

function MyProfile() {
  const data = Abdulbosit;
  const [activeTab, setActiveTab] = useState("Projects");

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

            <button className="current-btn">Current Projects</button>
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

          {activeTab === "Team" && <div className="empty">Team Page</div>}
          {activeTab === "Vacations" && (
            <div className="empty">Vacations Page</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
