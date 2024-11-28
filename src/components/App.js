import React, { useEffect, useState } from 'react';
import { database } from '../services/firebase';
import { ref, onValue } from 'firebase/database';
import Header from '../components/Header';
import Widget from '../components/Widget';

const App = () => {
  const [screenState, setScreenState] = useState(null);

  useEffect(() => {
    const screenStateId = window.location.pathname.split('/').pop();
    const screenStateRef = ref(database, `screenStates/${screenStateId}`);
    
    onValue(screenStateRef, (snapshot) => {
      const data = snapshot.val();
      if (data && data.contentData) {
        setScreenState(JSON.parse(data.contentData));
      }
    });
  }, []);

  if (!screenState) return <div>Loading...</div>;

  const headerData = screenState.states.find((state) => state.applet === 'header');
  const widgets = screenState.states.filter((state) => state.applet !== 'header');

  return (
    <div className="app" style={{ width: '2160px', height: '2880px' }}>
      {headerData && (
        <Header
          name={headerData.header.name}
          forecast={headerData.header.forecast}
          date={new Date().toLocaleDateString()}
        />
      )}
      <div className="widget-container" style={{ width: '2160px', height: '2432px', display: 'flex', flexWrap: 'wrap' }}>
        {widgets.map((widget, index) => (
          <Widget key={index} applet={widget.applet} content={JSON.stringify(widget)} />
        ))}
      </div>
    </div>
  );
};

export default App;
