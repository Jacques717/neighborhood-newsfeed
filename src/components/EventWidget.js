import React from 'react';

const EventWidget = ({ events }) => {
  return (
    <div className="event-widget p-4 bg-white rounded-lg shadow-md">
      {/* Widget Header */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">Local Events</h2>

      {/* Event List */}
      {events.map((event, index) => (
        <div
          key={index}
          className="event mb-6 last:mb-0 p-4 border border-gray-200 rounded-lg bg-gray-50"
        >
          {/* Event Name */}
          <h3 className="text-lg font-semibold text-gray-700 mb-2">{event.name}</h3>

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
  );
};

export default EventWidget;
