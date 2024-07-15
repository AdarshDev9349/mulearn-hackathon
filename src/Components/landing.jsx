

export default function Landing() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 h-screen">
    
      <div className="absolute inset-0 -z-10 overflow-hidden">
       
      </div>

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-55">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl" style={{color: "#FFFFFF"}}>
            Join the Ultimate 24hr Hackathon
          </h1>
          <p className="mt-6 text-lg leading-8" style={{color: "#EEE8DA"}}>
            Unleash your creativity, solve real-world problems, and collaborate with fellow tech enthusiasts.
          </p>
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
    </div>
  );
}
