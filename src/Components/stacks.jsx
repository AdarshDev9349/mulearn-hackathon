import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stacks = [
  { title: "Web Development", description: "Build modern web applications." },
  {
    title: "Mobile Development",
    description: "Create mobile apps for Android and iOS.",
  },
  { title: "Data Science", description: "Analyze and visualize data." },
  { title: "Machine Learning", description: "Develop intelligent systems." },
  { title: "Blockchain", description: "Work with decentralized applications." },
  {
    title: "DevOps",
    description: "Automate and improve development processes.",
  },
];

const Stacks = () => {
  const Card = ({ title, description }) => {
    const [isVisible, setVisible] = useState(false);
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        whileHover={{ scale: 1.05, boxShadow: "0px 5px 30px #207" }}
        onTap={() => setVisible(!isVisible)}
        className="card relative cursor-pointer bg-transparent border-2 rounded-xl w-full sm:w-72 md:w-90 h-40 sm:h-60 md:h-65 perspective-1000 justify-self-center"
      >
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className="absolute w-full h-full bg-black border-2 z-10 flex justify-center items-center text-center p-4 rounded-xl"
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <p className="text-sm sm:text-lg text-white">{description}</p>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="card bg-transparent border-none w-full sm:w-72 md:w-90 h-40 sm:h-60 md:h-65 perspective-1000 justify-self-center">
          <div className="card-inner relative w-full h-full transform-style-preserve-3d transition-transform duration-[999ms]">
            <div className="card-body absolute w-full h-full backface-hidden bg-base-100 shadow-xl flex flex-col justify-center items-center text-center p-4 sm:p-6">
              <h2 className="card-title text-xl sm:text-2xl font-bold" style={{ color: "#E292E7" }}>
                {title}
              </h2>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="relative py-16 bg-[#020b12]">
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <h1 className="custom-heading2">STACKS</h1>
      </div>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stacks.map((stack, index) => (
            <Card key={index} title={stack.title} description={stack.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stacks;
