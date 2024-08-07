import React, { useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <section id="time" ref={ref}>
      <div
        className="bg-black text-white py-8"
        style={{ backgroundColor: "#020b12" }}
      >
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full lg:ml-12 sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p
              className=" text-yellow-300 uppercase tracking-loose"
              style={{ color: "#E292E7" }}
            >
              Working Process
            </p>
            <p
              className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2"
              style={{ color: "#EEE8DA" }}
            >
              Timeline for the ERROR_418
            </p>
            <p
              className="text-sm md:text-base text-gray-50 mb-4"
              style={{ color: "#EEE8DA" }}
            >
              Here’s your guide to Error_418 Hackathon. Go through all
              the steps to know the exact process of the event.
            </p>
            <a
              href="#"
              className="bg-transparent mr-auto hover:bg-black text-white hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-white hover:border-transparent"
            >
              Register Now
            </a>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <motion.div
                  className=""
                  style={{
                    position: "absolute",
                    right: "50%",
                    width: "10px",
                    height: "100%",
                    backgroundColor: "#E292E7",
                    originY: 0,
                    scaleY,
                  }}
                />
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div
                    className="order-1 w-5/12 px-1 py-4 text-right"
                    style={{
                      transform: isInView ? "none" : "translateX(-200px)",
                      opacity: isInView ? 1 : 0,
                      transition:
                        "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    }}
                  >
                    <p
                      className="mb-3 text-base text-yellow-300"
                      style={{ color: "#EEE8DA" }}
                    >
                      1 - 15 August, 2024
                    </p>
                    <h4
                      className="mb-3 font-bold text-lg md:text-2xl"
                      style={{ color: "#E292E7" }}
                    >
                      Registration
                    </h4>
                    <p
                      className="text-sm md:text-base text-right leading-snug text-gray-50 text-opacity-100"
                      style={{ color: "#EEE8DA" }}
                    >
                      Register for the hackathon as a team through devfolio.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div
                    className="order-1 w-5/12 px-1 py-4 text-left"
                    style={{
                      transform: isInView ? "none" : "translateX(200px)",
                      opacity: isInView ? 1 : 0,
                      transition:
                        "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    }}
                  >
                    <p
                      className="mb-3 text-base text-yellow-300"
                      style={{ color: "#EEE8DA" }}
                    >
                      19 August, 2024
                    </p>
                    <h4
                      className="mb-3 font-bold text-lg md:text-2xl"
                      style={{ color: "#E292E7" }}
                    >
                      Shortlist Announcement
                    </h4>
                    <p
                      className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                      style={{ color: "#EEE8DA" }}
                    >
                      The shortlisted teams will be announced. Keep an eye on your email and our official communication channels for updates.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div
                    className="order-1 w-5/12 px-1 py-4 text-right"
                    style={{
                      transform: isInView ? "none" : "translateX(-200px)",
                      opacity: isInView ? 1 : 0,
                      transition:
                        "all 3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    }}
                  >
                    <p
                      className="mb-3 text-base text-yellow-300"
                      style={{ color: "#EEE8DA" }}
                    >
                      25 - 26 August, 2024
                    </p>
                    <h4
                      className="mb-3 font-bold text-lg md:text-2xl"
                      style={{ color: "#E292E7" }}
                    >
                      Hackathon
                    </h4>
                    <p
                      className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                      style={{ color: "#EEE8DA" }}
                    >
                      Participate in the hackathon on site. Check-in details and event locations will be communicated to you. Be prepared to showcase your skills and collaborate with fellow participants.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div
                    className="order-1 w-5/12 px-1 py-4"
                    style={{
                      transform: isInView ? "none" : "translateX(200px)",
                      opacity: isInView ? 1 : 0,
                      transition:
                        "all 4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    }}
                  >
                    <p
                      className="mb-3 text-base text-yellow-300"
                      style={{ color: "#EEE8DA" }}
                    >
                      Date to be Announced
                    </p>
                    <h4
                      className="mb-3 font-bold text-lg md:text-2xl text-left"
                      style={{ color: "#E292E7" }}
                    >
                      Prize Distribution
                    </h4>
                    <p
                      className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                      style={{ color: "#EEE8DA" }}
                    >
                      The winners will be contacted by our team.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="mx-auto -mt-36 md:-mt-36"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                alt="Process Illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
