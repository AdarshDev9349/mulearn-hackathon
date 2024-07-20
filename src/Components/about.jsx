import React from "react";
import mulearnImage from "./images/permute.png";
import hackathonImage from "./images/example.jpg";

export default function About() {
  return (
    <div
      className="py-16 relative about"
      id="about"
      style={{ backgroundColor: "#020b12" }}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <h1 className="custom-heading">ABOUT</h1>
        </div>

        <div className="relative z-10">
          <div className="lg:flex lg:items-center lg:space-x-8 mb-16">
            <div className="lg:flex-1 lg:w-1/2">
              <div className="lg:ml-12">
                <h2
                  className="text-3xl font-bold mb-4"
                  style={{ color: "#E292E7" }}
                >
                  About MuLearn UCEK
                </h2>
                <p
                  className="lg:text-lg text-m text-justify"
                  style={{ color: "#EEE8DA" }}
                >
                  Welcome to MuLearn UCEK, your gateway to transformative
                  education. At MuLearn, we are dedicated to revolutionizing
                  education through a paradigm shift that empowers self-directed
                  learning in a democratic, decentralized environment. Our
                  mission is to cultivate future skills through collaborative
                  learning and foster micro peer groups that break echo chambers
                  and limitations. MuLearn UCEK plays a pivotal role in these
                  initiatives, contributing to and benefiting from programs that
                  promote holistic development and a well-rounded educational
                  experience. Join us to redefine education and create a
                  brighter tomorrow.
                </p>
              </div>
            </div>
            <div className="lg:flex-1 lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
              <img
                className=" h-80 object-cover rounded-lg shadow-md"
                src={mulearnImage}
                alt="MuLearn UCEK"
              />
            </div>
          </div>

          <div className="lg:flex lg:items-center lg:space-x-8">
            <div className="lg:flex-1 lg:w-1/2 lg:order-2">
              <div className="lg:ml-24">
                <h2
                  className="text-3xl font-bold mb-4"
                  style={{ color: "#E292E7" }}
                >
                  About the Hackathon
                </h2>
                <p
                  className="lg:text-lg text-m text-justify"
                  style={{ color: "#EEE8DA" }}
                >
                  Welcome to Error 418, the inaugural 36-hour hackathon hosted
                  by MuLearn UCEK. Building on our successful events, Error 418
                  offers a dynamic platform for students to explore technology
                  and innovation. This event brings together a collaborative
                  community where participants can work on real projects, share
                  knowledge, and push the boundaries of what's possible. Whether
                  you're a seasoned developer or a beginner, Error 418 provides
                  an inclusive space for meaningful collaboration and pioneering
                  innovation. Join us and be part of a transformative journey
                  where creativity and technology converge. Help shape the
                  future of innovation at Error 418 Hackathon.
                </p>
              </div>
            </div>
            <div className="lg:flex-1 lg:w-1/2 mt-12 lg:mt-0 lg:order-1 flex justify-center">
              <img
                className=" h-80 object-cover rounded-lg shadow-md"
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
