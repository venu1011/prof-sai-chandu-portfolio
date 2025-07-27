import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for assets and initial setup
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time to showcase the new animation

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return <Routes />;
}

export default App;
