import React from "react";
import mulearnImage from "./images/example.jpg";
import hackathonImage from "./images/example.jpg";


export default function About() {
  return (
    <div className="py-16 relative" style={{ backgroundColor: "#020b12" }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-0 flex justify-center items-center z-0 items-start">
            <h1 className="custom-heading">ABOUT</h1>
          </div>

          <div className="relative z-10">
            <div className="lg:flex lg:items-center lg:space-x-8">
              <div className="lg:flex-1 lg:w-1/2">
                <div className="lg:max-w-lg lg:ml-12">
                  <h2 className="text-3xl font-bold" style={{ color: "#E292E7" }}>
                    About MuLearn UCEK
                  </h2>
                  <p className="mt-4 text-lg" style={{ color: "#EEE8DA" }}>
                    MuLearn UCEK is a vibrant community of tech enthusiasts, committed to fostering a culture of innovation and collaboration. Our mission is to empower students with the skills and knowledge necessary to excel in the rapidly evolving tech landscape. Join us to connect, learn, and grow together.
                  </p>
                </div>
              </div>
              <div className="lg:flex-1 lg:w-1/2 lg:mt-0 mt-8">
                <img
                  className="w-200 h-80 object-cover rounded-lg shadow-md"
                  src={mulearnImage}
                  alt="MuLearn UCEK"
                />
              </div>
            </div>

            <div className="lg:flex lg:items-center lg:space-x-8 mt-16 lg:mt-24">
              <div className="lg:flex-1 lg:w-1/2 lg:order-2">
                <div className="lg:max-w-lg lg:ml-24">
                  <h2 className="text-3xl font-bold" style={{ color: "#E292E7" }}>
                    About the Hackathon
                  </h2>
                  <p className="mt-4 text-lg" style={{ color: "#EEE8DA" }}>
                    Our 24hr hackathon is a thrilling event where creativity meets technology. Participants will collaborate to solve real-world challenges, showcase their projects, and compete for exciting prizes. Whether you're a seasoned coder or a beginner, this hackathon is the perfect platform to innovate, learn, and have fun.
                  </p>
                </div>
              </div>
              <div className="lg:flex-1 lg:w-1/2 lg:mt-0 mt-8 lg:order-1">
                <img
                  className="w-200 h-80 object-cover rounded-lg shadow-md"
                  src={hackathonImage}
                  alt="Hackathon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
