import React from "react";

const EventWidget = ({ events }) => {
  const qrUrl = "https://example.com/qr-events"; // Replace with actual QR URL
  const qrPrompt = "Scan QR Code";

  return (
    <div className="w-[1011px] h-[1168px] bg-white rounded-lg shadow-md flex flex-col">
      {/* Mini Header */}
      <div className="w-full h-[157px] flex items-center justify-between px-4 bg-blue-400 text-white rounded-t-lg">
        <div className="flex items-center">
          <i className="mdi mdi-calendar-month text-4xl mr-4"></i>
          <h2 className="text-xl font-bold">Local Events</h2>
        </div>
        <div className="flex flex-col items-center">
          <a
            href={qrUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-[40px] h-[40px] bg-white rounded-full p-2"
          >
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(
                qrUrl
              )}`}
              alt="QR Code"
              className="w-full h-full"
            />
          </a>
          <span className="text-xs mt-2">{qrPrompt}</span>
        </div>
      </div>

      {/* Body */}
      <div className="w-full h-full flex-1 p-4 overflow-y-scroll">
        {events.map((event, index) => (
          <div
            key={index}
            className="mb-4 p-4 border border-gray-200 rounded-lg bg-gray-50"
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{event.name}</h3>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium text-gray-700">Date:</span> {event.date}
            </p>
            <p className="text-sm text-gray-600 mb-3">
              <span className="font-medium text-gray-700">Location:</span> {event.location}
            </p>
            <a
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800 text-sm"
            >
              More Info
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventWidget;
