import React from 'react';
//import '../styles/LandownerWidget.css'; // Optional CSS file for styling

const LandownerWidget = ({ header, post, qrUrl }) => {
  return (
    <div className="landowner-widget">
      <h2>{header}</h2>
      <img src={`https://res.cloudinary.com/${post.creative.cloudinaryId}`} alt="Ad" />
      <a href={qrUrl} target="_blank" rel="noopener noreferrer">View All Posts</a>
    </div>
  );
};

export default LandownerWidget;
