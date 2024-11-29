import React from "react";

const WayfindingWidget = ({ header, icon, locations, qrUrl, qrPrompt }) => {
  return (
    <div className="w-[1011px] h-[1168px] bg-white rounded-lg shadow-md">
      {/* Mini Header */}
      <div className="w-full h-[157px] flex items-center px-4 bg-blue-500 text-white">
        <i className={`mdi mdi-${icon} text-4xl mr-4`}></i>
        <h2 className="text-xl font-bold">{header}</h2>
      </div>

      {/* Body */}
      <div className="w-full h-[1011px] overflow-y-scroll p-4">
        {locations.map((location, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-bold">{location.name}</h3>
            <p className="text-sm">
              {location.formattedPhoneNumber && (
                <span>Phone: {location.formattedPhoneNumber}</span>
              )}
            </p>
            <p className="text-sm">
              <a
                href={location.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View on Google Maps
              </a>
            </p>
          </div>
        ))}
      </div>

      {/* QR Code */}
      <div className="flex justify-center mt-4">
        <a
          href={qrUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          {qrPrompt}
        </a>
      </div>
    </div>
  );
};

export default WayfindingWidget;
