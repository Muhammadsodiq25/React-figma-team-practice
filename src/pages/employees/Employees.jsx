import { useState } from "react";
import "./Employees.css";
import illustration from "../../assets/illustration.png";
import Abdulaziz from "../../data/Abdulaziz";

const EmployeesList = () => {
  const [currentPage, setCurrentPage] = useState("employees");
  const [activeTab, setActiveTab] = useState("list");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const listData = Abdulaziz.filter((item) => item.id);
  const activityData = Abdulaziz.filter((item) => item.id1);

  const renderModal = () => {
    if (!isModalOpen) return null;
    return (
      <div className="modal__overlay" onClick={() => setIsModalOpen(false)}>
        <div className="modal__container" onClick={(e) => e.stopPropagation()}>
          <button
            className="modal__close"
            onClick={() => setIsModalOpen(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <h2 className="modal__title">Add Employee</h2>
          <div className="modal__illustration">
            <img src={illustration} />
          </div>
          <div className="modal__form">
            <label>Member's Email</label>
            <input
              type="email"
              placeholder="memberemail@gmail.com"
              className="modal__input"
            />
            <button className="add__another--btn">
              <i className="fa-solid fa-plus"></i> Add another Member
            </button>
            <div className="modal__actions">
              <button
                className="btn__approve"
                onClick={() => setIsModalOpen(false)}
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderProfile = () => (
    <div className="profile__container">
      <div className="profile__sidebar">
        <div className="profile__avatar--big">
          <img src="https://i.pravatar.cc/150?u=allen" alt="user" />
        </div>
        <h3 className="profile__name">Evan Yates</h3>
        <p className="profile__role">UI/UX Designer</p>
        <div className="profile__section">
          <h4 className="section__title">Main info</h4>
          <div className="info__field">
            <label>Position</label>
            <input type="text" value="UI/UX Designer" readOnly />
          </div>
          <div className="info__field">
            <label>Company</label>
            <input type="text" value="Cadabra" readOnly />
          </div>
          <div className="info__field">
            <label>Location</label>
            <input type="text" value="NYC, New York, USA" readOnly />
          </div>
          <div className="info__field">
            <label>Birthday</label>
            <input type="text" value="May 19, 1996" readOnly />
          </div>
        </div>
        <div className="profile__section">
          <h4 className="section__title">Contact Info</h4>
          <div className="info__field">
            <label>Email</label>
            <input type="text" value="allen@perkins.com" readOnly />
          </div>
          <div className="info__field">
            <label>Phone</label>
            <input type="text" value="+1 675 346 23-10" readOnly />
          </div>
        </div>
      </div>
      <div className="profile__content">
        <div className="content__tabs">
          <button className="tab__item active">Projects</button>
          <button className="tab__item">Team</button>
          <button className="tab__item">My vacations</button>
        </div>
        <div className="project__card">
          <div className="project__main">
            <div className="project__icon purple">💊</div>
            <div className="project__desc">
              <span className="project__id">PN0001265</span>
              <h4>Medical App (iOS native)</h4>
              <p>
                Created Sep 12, 2020 • <span className="prio">Medium</span>
              </p>
            </div>
          </div>
          <div className="project__data">
            <div className="data__block">
              <span>All tasks</span>
              <strong>34</strong>
            </div>
            <div className="data__block">
              <span>Active tasks</span>
              <strong>13</strong>
            </div>
            <div className="data__block">
              <span>Assignees</span>
              <div className="mini__avatars">👤👤+2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMainContent = () => {
    if (activeTab === "list") {
      return (
        <div className="employee__list">
          {listData.map((item) => (
            <div className="employee__card" key={item.id}>
              <div className="col__info">
                <img
                  src={item.img || "https://via.placeholder.com/40"}
                  className="employee__avatar"
                  alt={item.name}
                />
                <div className="text__details">
                  <h4>{item.name}</h4>
                  <p>{item.email}</p>
                </div>
              </div>
              <div className="col__item">
                <span>Gender</span>
                <strong>{item.Gender}</strong>
              </div>
              <div className="col__item">
                <span>Birthday</span>
                <strong>{item.Birthday}</strong>
              </div>
              <div className="col__item">
                <span>Full age</span>
                <strong>{item.ages}</strong>
              </div>
              <div className="col__pos">
                <span>Position</span>
                <div className="pos__flex">
                  <strong>{item.Position}</strong>
                  <span
                    className={`status__badge ${item.btnState?.toLowerCase()}`}
                  >
                    {item.btnState}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="activity__grid">
          {activityData.map((item) => (
            <div
              className={`activity__card ${["Ethel Weber", "Pearl Sims"].includes(item.name) ? "card--sleeping" : ""}`}
              key={item.id1}
            >
              {["Ethel Weber", "Pearl Sims"].includes(item.name) && (
                <div className="zzz">zzz</div>
              )}
              <div className="avatar__box">
                <img
                  src={
                    item.img1 || item.img || "https://via.placeholder.com/60"
                  }
                  alt={item.name}
                />
              </div>
              <h4>{item.name}</h4>
              <p className="pos__text">{item.Position}</p>
              <span className={`status__badge ${item.btnState?.toLowerCase()}`}>
                {item.btnState}
              </span>
              <div className="activity__stats">
                <div className="stat">
                  <strong>{item.task}</strong>
                  <span>Backlog</span>
                </div>
                <div className="stat">
                  <strong>{item.progress}</strong>
                  <span>Progress</span>
                </div>
                <div className="stat">
                  <strong>{item.revies}</strong>
                  <span>Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="employees__wrapper">
      {renderModal()}
      <div className="top__nav">
        <div className="search__container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search" />
        </div>
        <div
          className="nav__right"
          onClick={() =>
            setCurrentPage(currentPage === "profile" ? "employees" : "profile")
          }
        >
          <div className="profile__pill">
            <img src={listData[0]?.img} alt="user" />
            <span>Evan Yates</span>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </div>
      <div className="list__header">
        <h2 className="main__title">
          {currentPage === "profile" ? "Employee's Profile" : `Employees (28)`}
        </h2>
        {currentPage === "employees" && (
          <div className="header__actions">
            <div className="toggle__group">
              <button
                className={`toggle__btn ${activeTab === "list" ? "active" : ""}`}
                onClick={() => setActiveTab("list")}
              >
                List
              </button>
              <button
                className={`toggle__btn ${activeTab === "activity" ? "active" : ""}`}
                onClick={() => setActiveTab("activity")}
              >
                Activity
              </button>
            </div>
            <button className="btn__add" onClick={() => setIsModalOpen(true)}>
              + Add Employee
            </button>
          </div>
        )}
      </div>
      <div className="render__area">
        {currentPage === "profile" ? renderProfile() : renderMainContent()}
      </div>
    </div>
  );
};

export default EmployeesList;
