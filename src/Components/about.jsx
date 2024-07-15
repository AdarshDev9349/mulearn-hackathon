import React from "react";
import mulearnImage from "./images/example.jpg";
import hackathonImage from "./images/example.jpg";

export default function About() {
  return (
    <div className="py-16 relative" style={{ backgroundColor: "#020b12" }}>
      <div className="container mx-auto px-6 lg:px-8">
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <h1 className="custom-heading">ABOUT</h1>
      </div>

        <div className="relative z-10">
          <div className="lg:flex lg:items-center lg:space-x-8 mb-16">
            <div className="lg:flex-1 lg:w-1/2">
              <div className="lg:ml-12">
                <h2 className="text-3xl font-bold mb-4" style={{ color: "#E292E7" }}>
                  About MuLearn UCEK
                </h2>
                <p className="text-lg" style={{ color: "#EEE8DA" }}>
                  MuLearn is an online platform and student community committed to empowering students to enhance their skills and thrive as individuals and as a community. Our approach integrates micro peer groups, interest groups, and gamified tasks, encouraging engaging and collaborative learning experiences. MuLearn has been successfully implemented at UCEK, assisting students in honing their skills and facilitating easier access to internships and placements. Join us on a journey of growth and discovery, as we support each other's paths to knowledge and personal development.
                </p>
              </div>
            </div>
            <div className="lg:flex-1 lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
              <img
                className="w-full h-80 object-cover rounded-lg shadow-md"
                src={mulearnImage}
                alt="MuLearn UCEK"
              />
            </div>
          </div>

          <div className="lg:flex lg:items-center lg:space-x-8">
            <div className="lg:flex-1 lg:w-1/2 lg:order-2">
              <div className="lg:ml-24">
                <h2 className="text-3xl font-bold mb-4" style={{ color: "#E292E7" }}>
                  About the Hackathon
                </h2>
                <p className="text-lg" style={{ color: "#EEE8DA" }}>
                  Our 24hr hackathon is a thrilling event where creativity meets technology. Participants will collaborate to solve real-world challenges, showcase their projects, and compete for exciting prizes. Whether you're a seasoned coder or a beginner, this hackathon is the perfect platform to innovate, learn, and have fun.
                </p>
              </div>
            </div>
            <div className="lg:flex-1 lg:w-1/2 mt-8 lg:mt-0 lg:order-1 flex justify-center">
              <img
                className="w-full h-80 object-cover rounded-lg shadow-md"
                src={hackathonImage}
                alt="Hackathon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
