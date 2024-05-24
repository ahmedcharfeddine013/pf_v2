import React from "react";
import Circle from "./Circle";

const CirclesBackground = () => {
  return (
    <div className="w-full h-full absolute p-20">
      <div className="absolute top-[200px] left-20">
        <Circle />
      </div>
      <div className="absolute bottom-10 rotate-45 right-[40%]">
        <Circle />
      </div>
      <div className="absolute top-[-500px]  right-10">
        <Circle />
      </div>
      <div className="rotate-180">
        <Circle />
      </div>
      <div className="absolute rotate-180 top-[-300px] left-[10rem]">
        <Circle />
      </div>
    </div>
  );
};

export default CirclesBackground;
