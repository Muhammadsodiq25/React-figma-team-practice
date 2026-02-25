import React from "react";
import "./Calendar.css";
import calendar from '../../assets/calendar.png';
const CalendarHeader = () => {
  return (
    <div className="calendar">
      <div className="calendar-top">
        <h2>Calendar</h2>
        <button className="add-btn">+ Add Event</button>
      </div>

      <div className="calendar-nav">
        <span className="arrow">←</span>
        <span className="date">September, 2020</span>
        <span className="arrow">→</span>
      </div>
      <div className="calendar-img">
        <img src={calendar} alt="Calendar" />
      </div>
    </div>
  );
};

export default CalendarHeader;
