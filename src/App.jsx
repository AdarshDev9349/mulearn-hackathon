import "./index.css";
import React, { useState, useEffect } from "react";
import video from './video/video.mp4';
import Landing from "./Components/landing";
import Navbar from "./Components/navbar";
import About from "./Components/about";
import Stacks from "./Components/stacks";
import Timeline from "./Components/timeline";
import FAQ from "./Components/faq";
import Footer from "./Components/footer";
import Loading from "./Components/loader";
function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const videoElement = document.querySelector("video");

    const handleLoadedData = () => {
      setIsLoaded(true);
    };

    if (videoElement) {
      videoElement.addEventListener("loadeddata", handleLoadedData);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("loadeddata", handleLoadedData);
      }
    };
  }, []);

  return (
    <div>
      {!isLoaded && <Loading />} {/* Show loading component if not loaded */}
      <video
        autoPlay
        loop
        muted
        className={`fixed inset-0 h-full w-full h-screen object-cover -z-10 ${isLoaded ? '' : 'hidden'}`}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {isLoaded && (
        <>
          <Navbar />
          <Landing />
          <About /> 
          <Stacks />
          <Timeline />
          <FAQ />
          <Footer />
        
        </>
      )}
    </div>
  );
}

export default App;
