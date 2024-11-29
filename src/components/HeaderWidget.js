import React from 'react';
import '../styles/HeaderWidget.css'; // Optional CSS file for styling

const HeaderWidget = ({ header }) => {
  return (
    <div className="header-widget">
      <h1>{header.name}</h1>
      <p>{header.monthStr} {header.dayStr}</p>
      <div className="forecast">
        <i className={`weather-icon ${header.forecast.icon}`}></i>
        <span>{header.forecast.shortForecast}</span>
        <span>{header.forecast.tempLow}° - {header.forecast.tempHigh}°</span>
      </div>
    </div>
  );
};

export default HeaderWidget;
