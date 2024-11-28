import React from 'react';

const Widget = ({ applet, content }) => (
  <div className="widget" style={{ width: '1011px', height: '1168px' }}>
    <div className="widget-header" style={{ width: '1011px', height: '157px' }}>
      <h2>{applet}</h2>
    </div>
    <div className="widget-body" style={{ width: '1011px', height: '1011px' }}>
      {content}
    </div>
  </div>
);

export default Widget;
