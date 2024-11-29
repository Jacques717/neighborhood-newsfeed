import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { database } from "../services/firebase";
import HeaderWidget from "./HeaderWidget";
import EventWidget from "./EventWidget";
import LandownerWidget from "./LandownerWidget";
import WayfindingWidget from "./WayfindingWidget";
import FacebookWidget from "./FacebookWidget";

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

  // Separate the header widget from the rest
  const headerWidget = screenState.widgets.find((widget) => widget.applet === "header");
  const otherWidgets = screenState.widgets.filter((widget) => widget.applet !== "header");

  // Render the UI based on the screenState
  return (
    <div className="w-[2160px] h-[2880px]">
      {headerWidget && (
        <HeaderWidget key="header" header={headerWidget.header} />
      )}
      <div className="w-full h-[2432px] grid grid-cols-2 gap-4 p-4">
        {Array.isArray(otherWidgets) && otherWidgets.length > 0 ? (
          otherWidgets.map((widget, index) => {
            switch (widget.applet) {
              case "event":
                return <EventWidget key={index} events={widget.events} />;
              case "landowner":
                return <LandownerWidget
      key={index}
      header={widget.header}
      post={widget.post}
      qrUrl={widget.qrUrl}
    />
                case "wayfinder":
                  return (
                    <WayfindingWidget
                      key={index}
                      header={widget.header}
                      icon={widget.icon}
                      locations={widget.locations}
                      qrUrl={widget.qrUrl}
                      qrPrompt={widget.qrPrompt}
                    />
                  );
                
                case "facebook":
                  return (
                    <FacebookWidget
                      key={index}
                      header={widget.header}
                      icon={widget.icon}
                      post={widget.post}
                      qrUrl={widget.qrUrl}
                    />
                  );
              default:
                return <div key={index}>Unknown Widget</div>;
            }
          })
        ) : (
          <p>No widgets available</p>
        )}
      </div>
    </div>
  );
};

export default App;
