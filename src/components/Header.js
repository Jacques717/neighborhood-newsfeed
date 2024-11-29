import React from 'react';

const Header = ({ name, forecast, date }) => (
  <div className="header">
    <h1>{name} - NEIGHBORHOOD NEWSFEED</h1>
    <p>{date}</p>
    <p>{forecast.shortForecast} | High: {forecast.tempHigh}°F | Low: {forecast.tempLow}°F</p>
  </div>
);

export default Header;
