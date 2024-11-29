import React from 'react';
//import '../styles/HeaderWidget.css'; // Optional CSS file for styling

const HeaderWidget = ({ header }) => {
  return (
    <div class="w-full h-[448px] bg-gray-200">
      <h1>{header.name}</h1>
      <div>Neighborhood Newsfeed</div>
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
