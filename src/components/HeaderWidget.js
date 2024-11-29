import React from 'react';

const HeaderWidget = ({ header }) => {
  return (
    <div className="w-full h-[448px] bg-gradient-to-r from-blue-600 to-indigo-500 text-white flex flex-col justify-center items-center rounded-lg shadow-lg">
      {/* Location Name */}
      <h1 className="text-4xl font-bold mb-2">{header.name}</h1>

      {/* Subheading */}
      <div className="text-lg font-medium mb-4">Neighborhood Newsfeed</div>

      {/* Date */}
      <p className="text-xl mb-4">
        {header.monthStr} {header.dayStr}
      </p>

      {/* Weather Forecast */}
      <div className="flex items-center gap-4">
        {/* Weather Icon */}
        <i
          className={`weather-icon ${header.forecast.icon} text-4xl`}
          aria-hidden="true"
        ></i>

        {/* Forecast Details */}
        <div className="text-center">
          <span className="block text-lg font-semibold">{header.forecast.shortForecast}</span>
          <span className="block text-sm">
            {header.forecast.tempLow}° - {header.forecast.tempHigh}°
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderWidget;
