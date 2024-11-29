import React from "react";

const WayfindingWidget = ({ header, icon, locations, qrUrl, qrPrompt }) => {
  return (
    <div className="w-[1011px] h-[1168px] bg-white rounded-lg shadow-md flex flex-col">
      {/* Mini Header */}
      <div className="w-full h-[157px] flex items-center px-4 bg-blue-500 text-white rounded-t-lg">
        <i className={`mdi mdi-${icon} text-4xl mr-4`}></i>
        <h2 className="text-xl font-bold">{header}</h2>
      </div>

      {/* Body */}
      <div className="w-full h-full flex-1 overflow-y-scroll p-4">
        {locations.map((location, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-bold text-gray-800">{location.name}</h3>
            {location.formattedPhoneNumber && (
              <p className="text-gray-600 text-sm mb-1">
                <span className="font-medium text-gray-700">Phone:</span> {location.formattedPhoneNumber}
              </p>
            )}
            <p className="text-sm">
              <a
                href={location.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                View on Google Maps
              </a>
            </p>
          </div>
        ))}
      </div>

      {/* QR Code */}
      <div className="w-full p-4 bg-gray-100 rounded-b-lg flex justify-center items-center">
        <a
          href={qrUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          {qrPrompt}
        </a>
      </div>
    </div>
  );
};

export default WayfindingWidget;
