import Timer from "./timer";
import ScrollToBottom from "./arrow";
import logo from "./images/logo.svg"
export default function Landing() {
  return (
    <div id='home' className="relative isolate px-6 pt-24 lg:px-8 lg:pt-12 lg:h-screen h-[100vh]">
    
      <div className="absolute inset-0 -z-10 overflow-hidden">
       
      </div>

      <div className="mx-auto max-w-2xl py-17 sm:py-28 lg:py-34">
        <div className="text-center lg:mt-10 mt-20" style={{display:"flex",flexDirection:"column"}}>
          
          <img className=" lg:w-5/6 w-full self-center" src={logo} alt="" />
          <p className="mt-3 lg:text-xl leading-8" style={{color: "#EEE8DA"}}>
            Hack a way to brew coffee in your teapot
          </p>
          <div className="flex justify-center pt-2"><Timer/></div>
           
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#register"
              className="rounded-md bg-transparent border-2 px-3.5 py-2.5 lg:text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register Now
            </a>
            <a
              href="#sponsor"
              className="rounded-md bg-white text-black border-2 px-3.5 py-2.5 lg:text-lg  font-semibold  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sponsor Us
            </a>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      ></div>
      <ScrollToBottom/>
    </div>
  );
}
