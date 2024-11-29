import React from "react";

const HeaderWidget = ({ header }) => {
  return (
    <div className="relative w-full h-[448px] rounded-lg shadow-lg overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://asset.cloudinary.com/dlalovyeu/815ff0f62ece40875199a94751843715')`,
        }}
      ></div>

      {/* Overlay for text */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 flex items-center justify-between px-8 text-white">
        {/* Left: Title Section */}
        <div>
          <div className="text-4xl font-black leading-none mb-2">
            {header.name}
          </div>
          <div className="text-lg font-light leading-none">
            <div>NEIGHBORHOOD</div>
            <div>NEWSFEED</div>
          </div>
        </div>

        {/* Right: Weather Section */}
        <div className="text-right">
          {/* Date */}
          <div className="text-lg font-light mb-2">
            <span className="font-bold">{header.monthStr}</span> {header.dayStr}
          </div>
          <hr className="border-gray-200 my-2" />

          {/* Forecast */}
          <div className="flex items-center space-x-4">
            {/* Weather Icon */}
            <div className="text-6xl">
              <i
                className={`mdi mdi-${header.forecast.icon}`}
                aria-hidden="true"
              ></i>
            </div>
            {/* Temp Max/Min */}
            <div className="flex flex-col items-start">
              <div className="flex items-center">
                <i className="mdi mdi-arrow-up text-xl mr-1"></i>
                <span className="text-xl">{header.forecast.tempHigh}°</span>
              </div>
              <div className="flex items-center">
                <i className="mdi mdi-arrow-down text-xl mr-1"></i>
                <span className="text-xl">{header.forecast.tempLow}°</span>
              </div>
            </div>
            {/* Condition Text */}
            <div className="text-lg font-light">{header.forecast.shortForecast}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderWidget;
