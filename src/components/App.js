import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { database } from "../services/firebase";

const App = () => {
  const { screenStateId } = useParams(); // Get the screenStateId from the URL
  const [screenState, setScreenState] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!screenStateId) return;

    console.log("Fetching data for screenStateId:", screenStateId);

    const screenStateRef = ref(database, `screenStates/${screenStateId}`);
    onValue(
      screenStateRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          console.log("Fetched data:", data);

          try {
            const parsedData = JSON.parse(data.contentData);
            setScreenState(parsedData);
            console.log("Parsed contentData:", parsedData);
          } catch (error) {
            console.error("Error parsing contentData:", error);
          }
        } else {
          console.error("No data found for screenStateId:", screenStateId);
        }
        setLoading(false);
      },
      (error) => {
        console.error("Firebase error:", error);
        setLoading(false);
      }
    );
  }, [screenStateId]);

  if (loading) return <div>Loading...</div>;

  if (!screenState) return <div>No data available for this screenState.</div>;

  // Render the UI based on the screenState
  return (
    <div>
      <h1>Neighborhood Newsfeed</h1>
      <div>
        {/* Add a fallback to handle undefined or non-array values */}
        {Array.isArray(screenState.widgets) ? (
          screenState.widgets.map((widget, index) => (
            <div key={index}>
              <h2>{widget.applet}</h2>
              <pre>{JSON.stringify(widget, null, 2)}</pre>
            </div>
          ))
        ) : (
          <p>No widgets available</p>
        )}
      </div>
    </div>
  );
};

export default App;
