import React from "react";

const EventWidget = ({ events }) => {
  return (
    <div className="w-full h-[1168px] bg-white rounded-lg shadow-lg p-4">
      {/* Widget Header */}
      <div className="w-full h-[157px] bg-gray-200 flex items-center p-4 rounded-t-lg">
        <div className="flex items-center space-x-4">
          {/* Icon */}
          <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full">
            <i className="mdi mdi-calendar-month text-2xl"></i>
          </div>
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800">Local Events</h2>
        </div>
      </div>

      {/* Widget Body */}
      <div className="w-full h-[1011px] overflow-y-auto p-4 space-y-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="event bg-gray-50 border border-gray-200 rounded-lg p-4"
          >
            {/* Event Name */}
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              {event.name}
            </h3>

            {/* Event Date */}
            <p className="text-gray-600 text-sm mb-1">
              <span className="font-medium text-gray-700">Date:</span> {event.date}
            </p>

            {/* Event Location */}
            <p className="text-gray-600 text-sm mb-3">
              <span className="font-medium text-gray-700">Location:</span> {event.location}
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
    </div>
  );
};

export default EventWidget;
