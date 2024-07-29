import React from 'react';
import { motion } from 'framer-motion';
import Timer from "./timer";
import ScrollToBottom from "./arrow";
import logo from "./images/logo.svg";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export default function Landing() {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div id='home' className="relative isolate px-6 pt-24 lg:px-8 lg:pt-12 lg:h-screen h-[90vh]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Background animation or effects */}
      </div>

      <div className="mx-auto max-w-2xl py-17 sm:py-28 lg:py-34">
        <div className="text-center lg:mt-10 mt-20" style={{ display: "flex", flexDirection: "column" }}>
          <motion.img 
            className="lg:w-5/6 w-full self-center" 
            src={logo} 
            alt="" 
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp} 
            transition={{ duration: 1 }}
          />
          <motion.p 
            className="mt-3 lg:text-xl leading-8" 
            style={{ color: "#EEE8DA" }}
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp} 
            transition={{ duration: 1, delay: 0.5 }}
          >
            Hack a way to brew coffee in your teapot
          </motion.p>
          <motion.div 
            className="flex justify-center pt-2"
            initial="hidden" 
            animate="visible" 
            variants={fadeIn} 
            transition={{ duration: 1, delay: 1 }}
          >
            <Timer />
          </motion.div>

          <motion.div 
            className="mt-10 flex-col flex gap-4  self-center space-y-34 "
            initial="hidden" 
            animate="visible" 
            variants={fadeIn} 
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div 
              className="apply-button" 
              data-hackathon-slug="error-418" 
              data-button-theme="dark-inverted"
              style={{ height: '44px', width: '312px' }}
            ></div>
            <a
              href="#sponsor"
              className=" rounded-md bg-white w-1/2 self-center text-black border-2 px-3.5 py-2.5 lg:text-lg font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <a href="mailto:mulearnucek@gmail.com">Contact Us</a>
            </a>
          </motion.div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        {/* Background animation or effects */}
      </div>
      <ScrollToBottom />
    </div>
  );
}
