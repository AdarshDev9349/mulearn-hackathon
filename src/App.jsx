import React, { Suspense, lazy, useState, useEffect } from 'react';
import './index.css';

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
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000); // Show loading animation for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='bg-[#020b12]'>
      {!isLoaded && (
        <Suspense fallback={<Loading />}>
          <Loading />
        </Suspense>
      )}
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
