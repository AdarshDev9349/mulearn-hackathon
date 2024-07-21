import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stacks = [
  { title: "Stay Tuned..", description: "ERROR_418" },
  {
    title: "Stay Tuned..",
    description: "ERROR_418.",
  },
  { title: "Stay Tuned..", description: "ERROR_418" },
  { title: "Stay Tuned..", description: "ERROR_418" },
  { title:"Stay Tuned..", description: "ERROR_418" },
  {
    title:"Stay Tuned..",
    description: "Automate and improve development processes.",
  },
];

const Stacks = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Card = ({ title, description }) => {
    const [isVisible, setVisible] = useState(false);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        whileHover={{ scale: 1.05, boxShadow: "0px 5px 30px #207" }}
        onTap={() => setVisible(!isVisible)}
        className="card stacks mt-12 relative cursor-pointer bg-transparent border-2 rounded-xl w-full sm:w-72 md:w-90 h-40 sm:h-60 md:h-65 perspective-1000 justify-self-center "
        id="stacks"
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
              <h2
                className="card-title text-xl sm:text-2xl font-bold"
                style={{ color: "#E292E7" }}
              >
                {title}
              </h2>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.6 : 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative py-16 bg-[#020b12]"
    >
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <h1 className="custom-heading2">STACKS</h1>
      </div>
      <motion.div
        variants={containerVariants}
        className="container mx-auto px-6 lg:px-8 items"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {stacks.map((stack, index) => (
            <motion.div key={index} variants={itemVariants} className="grid">
              <Card title={stack.title} description={stack.description} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Stacks;
