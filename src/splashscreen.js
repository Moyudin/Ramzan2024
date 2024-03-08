import React, { useState, useEffect } from "react";
import App from "./App.js"; // Import your main app component
import splashImage from "./images/Ramazan.png"; // Import your splash image
import "./App.css";

function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    // Assuming 768px width as a threshold for mobile devices
    setShowSplash(screenWidth <= 768);
  }, []);

  if (showSplash) {
    return (
      <div className="splash-screen" style={{ backgroundColor: "white", height: "100vh", width: "100vw", position: "fixed", top: 0, left: 0, zIndex: 999 }}>
        <img src={splashImage} className="img-fluid" alt="Splash Screen" style={{ width: "100%", height: "100%" }} />
      </div>
    );
  }

  return <App />;
}

export default SplashScreen;
