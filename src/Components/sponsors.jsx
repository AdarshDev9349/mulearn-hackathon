import React from 'react';
import devfolio from './images/Devfolio_Logo-Colored.svg'
import polygon from './images/Polygon_Logo-Colored.svg'
import eth from './images/ethindia-dark.svg'
const Sponsors = () => {
  return (
    <div className="container mx-auto px-4 py-8" style={{ backgroundColor: '#020b12' }}>
      <div className="text-center mb-12">
        <h2 className="text-3xl text-white font-bold mb-10">Gold Sponsor</h2>
        <div className="flex justify-center">
          <div className=" max-w-xs bg-white">
          <a href="https://devfolio.co"> <img
              src={devfolio}
              alt="DEVFOLIO LOGO"
              className="mx-auto py-5 px-5 w-[200px] "
            /></a> 
          </div>
        </div>
      </div>
      
      <div className="text-center text-white mb-1">
        <h2 className="text-3xl font-bold mb-10">Silver Sponsor</h2>
        <div className="flex justify-center lg:space-x-[100px] space-x-4">
          <div className="bg-white max-w-xs">
          <a href="https://polygon.technology/">  <img
              src={polygon}
              alt="POLYGON LOGO"
              className="mx-auto py-5 px-5 w-[200px] "
            /></a>
          </div>
          <div className="bg-white max-w-xs">
           <a href="https://ethindia.co "> <img
              src={eth}
              alt="ETHINDIA LOGO"
               className="mx-auto py-5 px-5 w-[200px] "
              
            /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
