import { useState } from "react";
import vacationData from "../../data/Akbarshox";
import "./Vacations.css";

const Vacations = () => {
  const [tab, setTab] = useState("employees");

  return (
    <div className="vacations_page">
      <div className="vacations_header">
        <div className="vacation-navbar">
          <h1 className="vacation-navbar__title">Vacations</h1>

          <div className="vacation-tabs">
            <button
              className={`vacation-tabs__btn ${
                tab === "employees" ? "vacation-tabs__btn--active" : ""
              }`}
              onClick={() => setTab("employees")}
            >
              Employees' vacations
            </button>

            <button
              className={`vacation-tabs__btn ${
                tab === "calendar" ? "vacation-tabs__btn--active" : ""
              }`}
              onClick={() => setTab("calendar")}
            >
              Calendar
            </button>
          </div>

          <button className="vacation-action-btn">
            <span className="vacation-action-btn__icon">+</span> Add Request
          </button>
        </div>
      </div>

      {tab === "employees" &&
        vacationData.map((user, index) => (
          <div className="vacation_card" key={index}>
            <div className="vacation_user">
              <img src={user.img} />
              <div>
                <h4>{user.name}</h4>
                <p>{user.email}</p>
              </div>
            </div>

            <div className="vacation_stats">
              <div>
                <span>Vacations</span>
                <b>{user.vacation}</b>
              </div>
              <div>
                <span>Sick Leave</span>
                <b>{user.sickLeave}</b>
              </div>
              <div>
                <span>Work remotely</span>
                <b>{user.workRemotely}</b>
              </div>
            </div>
          </div>
        ))}

      {tab === "calendar" && (
        <div className="calendar_wrapper">
          <div className="calendar_header">
            <span>First month (September)</span>
          </div>

          <div className="calendar_body">
            <div className="employees_panel">
              <div className="employees_header">
                <h3>Employees</h3>
                <div className="employees_search">🔍</div>
              </div>

              <div className="employees_list">
                {vacationData.map((user, i) => (
                  <div className="employee_item" key={i}>
                    <img src={user.img} />
                    <span>{user.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="calendar_grid">
              <div className="calendar_days">
                {Array.from({ length: 30 }, (_, i) => (
                  <span key={i}>{i + 1}</span>
                ))}
              </div>

              <div className="calendar_rows">
                {vacationData.map((_, i) => (
                  <div className="calendar_row" key={i}>
                    <div className="calendar_cells">
                      {Array.from({ length: 30 }, (_, d) => (
                        <div
                          key={d}
                          className={`calendar_cell ${
                            d >= 4 && d <= 6 && i % 2 === 0 ? "cell_blue" : ""
                          } ${
                            d >= 10 && d <= 13 && i % 3 === 0 ? "cell_purple" : ""
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vacations;
