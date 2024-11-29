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

      {/* Body with Fade Effect */}
      <div className="relative flex-1 p-4 overflow-hidden">
        <div className="max-h-full pb-10">
          {events.map((event, index) => (
            <div
              key={index}
              className="mb-6 last:mb-0 p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
            >
              {/* Event Name */}
              <h3 className="text-lg font-semibold text-gray-700">{event.name}</h3>
              {/* Event Date */}
              <p className="text-sm text-gray-600">
                <span className="font-medium">Date:</span> {event.date}
              </p>
              {/* Event Location */}
              <p className="text-sm text-gray-600">
                <span className="font-medium">Location:</span> {event.location}
              </p>
              {/* Event Link */}
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
        {/* Fade Effect */}
        <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
      </div>
    </div>
  );
};

export default EventWidget;
