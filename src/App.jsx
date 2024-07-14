import "./index.css";
import video from './video/video.mp4';
import Landing from "./Components/landing";
import Navbar from "./Components/navbar";
import About from "./Components/about";
import Stacks from "./Components/stacks";
import Timeline from "./Components/timeline";
import Footer from "./Components/footer";
function App() {
  return (
    <div >
      <video
        autoPlay
        loop
        muted
        className="fixed inset-0 h-full w-full h-screen object-cover -z-10"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
   
      <Navbar />
      <Landing />
      <About/>
      <Stacks/>
      <Timeline/>
      <Footer/>
      
    </div>
  );
}

export default App;
