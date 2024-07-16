

import React from "react";
import { reuleaux } from "ldrs";
reuleaux.register();
const Loading = () => {
  return (
    <div className=" h-screen flex justify-center items-center" style={{ backgroundColor: "#020b12" }}>
      <l-reuleaux
        size="55"
        stroke="6"
        stroke-length="0.15"
        bg-opacity="0.3"
        speed="1.2"
        color="rgb(226, 146, 231)"
      ></l-reuleaux>
    </div>
  );
};

export default Loading;
