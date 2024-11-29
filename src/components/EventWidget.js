import React from 'react';
//import '../styles/EventWidget.css'; // Optional CSS file for styling

const EventWidget = ({ events }) => {
  return (
    <div className="event-widget">
      <h2>Local Events</h2>
      {events.map((event, index) => (
        <div key={index} className="event">
          <h3>{event.name}</h3>
          <p>{event.date}</p>
          <p>{event.location}</p>
          <a href={event.url} target="_blank" rel="noopener noreferrer">More Info</a>
        </div>
      ))}
    </div>
  );
};

export default EventWidget;
