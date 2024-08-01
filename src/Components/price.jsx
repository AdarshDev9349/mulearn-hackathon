import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const prizes = [
  {
    title: "Total Prize Pool",
    amount: "₹50,000",
    description: "A total prize pool of ₹50,000 awaits the best teams!"
  },
  {
    title: "Polygon Bounty",
    amount: "$200",
    description: "Best hack utilizing Polygon wins $200."
  },
  {
    title: "Ethereum Bounty",
    amount: "$100",
    description: "Best hack utilizing Ethereum wins $100."
  }
];

const PrizePool = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative py-16 pt-24 bg-[#020b12]"
    >
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <h1 className="custom-heading2 text-white">PRIZE</h1>
      </div>
      <motion.div
        variants={containerVariants}
        className="container mx-auto px-6 lg:px-8"
      >
        <div className="grid relative grid-cols-1 gap-8 lg:grid-cols-1 lg:gap-8">
          {/* Top Card */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 20px rgba(0,0,0,0.5)" }}
              transition={{ duration: 0.1 }}
              className="card prize bg-black border-2 border-[#E292E7] rounded-xl w-full sm:w-72 md:w-90 h-40 sm:h-60 md:h-65 flex flex-col items-center justify-center p-6"
            >
              <h2 className="card-title text-2xl sm:text-3xl font-bold text-[#E292E7]">
                {prizes[0].title}
              </h2>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {prizes[0].amount}
              </h3>
              <p className="text-sm sm:text-lg text-white text-center mt-2">
                {prizes[0].description}
              </p>
            </motion.div>
          </motion.div>

          {/* Bottom Row Cards */}
          <div className="flex flex-col items-center gap-10 lg:gap-32 lg:flex-row lg:justify-center">
            {prizes.slice(1).map((prize, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0px 5px 20px rgba(0,0,0,0.5)" }}
                  transition={{ duration: 0.1 }}
                  className="card prize bg-black border-2 border-[#E292E7] rounded-xl w-full sm:w-72 md:w-90 h-40 sm:h-60 md:h-65 flex flex-col items-center justify-center p-6"
                >
                  <h2 className="card-title text-xl sm:text-2xl font-bold text-[#E292E7]">
                    {prize.title}
                  </h2>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {prize.amount}
                  </h3>
                  <p className="text-sm sm:text-lg text-white text-center mt-2">
                    {prize.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PrizePool;
