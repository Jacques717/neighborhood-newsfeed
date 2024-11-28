import React from 'react';

const Header = ({ name, forecast, date }) => (
  <div className="header" style={{ width: '2160px', height: '448px' }}>
    <h1>{name} - NEIGHBORHOOD NEWSFEED</h1>
    <p>{date}</p>
    <p>{forecast.shortForecast} | High: {forecast.tempHigh}°F | Low: {forecast.tempLow}°F</p>
  </div>
);

export default Header;
