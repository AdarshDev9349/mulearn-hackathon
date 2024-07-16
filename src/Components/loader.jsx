import React from "react";
import { metronome } from "ldrs";

metronome.register();
const Loading = () => {
  return (
    <div
      className=" h-screen flex justify-center items-center"
      style={{ backgroundColor: "#020b12" }}
    >
      <l-metronome
        size="55"
        speed="1.2"
        color="rgb(226, 146, 231)"
      ></l-metronome>
    </div>
  );
};

export default Loading;
