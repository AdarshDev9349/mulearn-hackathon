import React, { Suspense, lazy, useState, useEffect } from 'react';
import './index.css';
import video from './video/video.mp4';

// Lazily load components
const Navbar = lazy(() => import('./Components/navbar'));
const Landing = lazy(() => import('./Components/landing'));
const About = lazy(() => import('./Components/about'));
const Stacks = lazy(() => import('./Components/stacks'));
const Timeline = lazy(() => import('./Components/timeline'));
const FAQ = lazy(() => import('./Components/faq'));
const Footer = lazy(() => import('./Components/footer'));
const Loading = lazy(() => import('./Components/loader'));
const TaskList = lazy(() => import('./Components/task'));
const Login = lazy(() => import('./Components/login'));
const Sponsors = lazy(() => import('./Components/sponsors'));

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const videoElement = document.querySelector('video');

    const handleLoadedData = () => {
      setIsLoaded(true);
    };

    if (videoElement) {
      videoElement.addEventListener('loadeddata', handleLoadedData);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('loadeddata', handleLoadedData);
      }
    };
  }, []);

  return (
    <div>
      {!isLoaded && (
        <Suspense fallback={<Loading />}>
          <Loading />
        </Suspense>
      )}
      <video
        autoPlay
        loop
        muted
        className={`fixed inset-0 h-full w-full object-cover -z-10 ${isLoaded ? '' : 'hidden'}`}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {isLoaded && (
        <Suspense fallback={<Loading />}>
          <Navbar />
          <Landing />
          <About />
          <Stacks />
          <Sponsors />
          <Timeline />
          <FAQ />
          <Footer />
          {/* Uncomment when ready to use */}
          {/* {token ? <TaskList token={token} /> : <Login setToken={setToken} />} */}
        </Suspense>
      )}
    </div>
  );
}

export default App;
