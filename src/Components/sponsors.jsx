import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import devfolio from './images/Devfolio_Logo-Colored.svg';
import polygon from './images/Polygon_Logo-Colored.svg';
import eth from './images/ethindia-dark.svg';
import unibic from './images/logo_Red.svg';

const Sponsors = () => {
  const [refGold, inViewGold] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refSilver, inViewSilver] = useInView({ triggerOnce: true, threshold: 0.1 });

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-4 py-8" style={{ backgroundColor: '#020b12' }}>
      <div className="text-center mb-12">
        <h2 className="text-3xl text-white font-bold mb-10">Gold Sponsor</h2>
        <div className="flex justify-center">
          <motion.div
            ref={refGold}
            initial="hidden"
            animate={inViewGold ? 'visible' : 'hidden'}
            variants={animationVariants}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-xs bg-white"
          >
            <a href="https://devfolio.co">
              <img
                src={devfolio}
                alt="DEVFOLIO LOGO"
                className="mx-auto py-5 px-5 w-[200px]"
              />
            </a>
          </motion.div>
        </div>
      </div>

      <div className="text-center text-white mb-1">
        <h2 className="text-3xl font-bold mb-10">Silver Sponsor</h2>
        <div className="flex justify-center lg:space-x-[100px] space-x-4">
          <motion.div
            ref={refSilver}
            initial="hidden"
            animate={inViewSilver ? 'visible' : 'hidden'}
            variants={animationVariants}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-white max-w-xs"
          >
            <a href="https://polygon.technology/">
              <img
                src={polygon}
                alt="POLYGON LOGO"
                className="mx-auto py-5 px-5 w-[200px]"
              />
            </a>
          </motion.div>
          <motion.div
            ref={refSilver}
            initial="hidden"
            animate={inViewSilver ? 'visible' : 'hidden'}
            variants={animationVariants}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-white max-w-xs"
          >
            <a href="https://ethindia.co">
              <img
                src={eth}
                alt="ETHINDIA LOGO"
                className="mx-auto py-5 px-5 w-[200px]"
              />
            </a>
          </motion.div>
        </div>
      </div>
      <div className="text-center mb-12 mt-12">
        <h2 className="text-3xl text-white font-bold mb-10">Cookie Partner</h2>
        <div className="flex justify-center">
          <motion.div
            ref={refGold}
            initial="hidden"
            animate={inViewGold ? 'visible' : 'hidden'}
            variants={animationVariants}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-xs bg-white"
          >
            <a href="https://devfolio.co">
              <img
                src={unibic}
                alt="DEVFOLIO LOGO"
                className="mx-auto py-5 px-5 w-[200px]"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
