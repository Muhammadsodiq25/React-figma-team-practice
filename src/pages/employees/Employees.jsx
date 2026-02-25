import "./Employees.css";
import Abdulaziz from "../../data/Abdulaziz";
import { useState } from "react";

const EmployeesD = Abdulaziz;

const EmployeesList = () => {
  const [activeTab, setActiveTab] = useState("List");
  return (
    <div className="hidden employees__container">
      <div className="navbar">
        <div className="search__bar">
          <i className="fa-solid fa-magnifying-glass search__icon"></i>
          <input type="text" placeholder="Search" className="search__input" />
        </div>

        <div className="nav__actions">
          <div className="notification__badge">
            <i className="fa-regular fa-bell"></i>
          </div>
          <div className="user__profile">
            <img src={EmployeesD[0]?.img} className="user__avatar" />
            <span className="user__name">Evan Yates</span>
          </div>
        </div>
      </div>

      <div className="header">
        <h2 className="title">
          Employees <span className="count">(28)</span>
        </h2>
      </div>
      <div className="button__group">
        <div className="tab__container">
          <button
            className={activeTab === "list" ? "tab__btn active" : "tab__btn"}
            onClick={() => setActiveTab("list")}
          >
            List
          </button>
          <button
            className={
              activeTab === "activity"
                ? "tab__btn active Activity__button"
                : "tab__btn Activity__button"
            }
            onClick={() => setActiveTab("activity")}
          >
            {" "}
            Activity
          </button>
        </div>
      </div>

      <button className="add__employee--button">+ Add Employee</button>

      <div className="employee__list">
        {EmployeesD.map((item) => (
          <div key={item.id} className="employee__card">
            <div className="employee__info">
              <img src={item.img} className="employee__image" alt={item.name} />
              <div>
                <h4 className="employee__name">{item.name}</h4>
                <p className="employee__email">{item.email}</p>
              </div>
            </div>

            <div className="gender__info">
              <span className="gender">{item.gender}</span>
              <span className="Gender">{item.Gender}</span>
            </div>

            <div className="date__info">
              <span className="date">{item.data}</span>
              <span className="date">{item.Birthday}</span>
            </div>

            <div className="age__info">
              <span className="age">{item.age}</span>
              <span className="ages">{item.ages}</span>
            </div>

            <div className="position__info">
              <div>
                <span className="position">{item.position}</span>
              </div>
              <span className="position__detail">{item.Position}</span>
              <span
                className={`btn__state state--${item.btnState.toLowerCase()}`}
              >
                {item.btnState}
              </span>
            </div>

            <div className="icon__container">
              {typeof item.img1 === "string" ? (
                <img src={item.img1} alt="icon" />
              ) : (
                item.img1
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <span className="pagination__info">1-8 of 28</span>
        <div className="pagination__buttons">
          <button className="prev__button">{"<"}</button>
          <button className="next__button">{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default EmployeesList;
