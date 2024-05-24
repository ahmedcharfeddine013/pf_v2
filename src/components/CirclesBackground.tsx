"use client";

import React from "react";
import Circle from "./Circle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CirclesBackground = () => {
  useGSAP(() => {
    gsap.to(".circle", { opacity: 1, delay: 0.5 });
  }, []);
  return (
    <div className="w-full h-full absolute p-20">
      <div className="circle absolute top-[200px] left-20">
        <Circle />
      </div>
      <div className="circle absolute bottom-10 rotate-45 right-[40%]">
        <Circle />
      </div>
      <div className="circle absolute top-[-500px]  right-10">
        <Circle />
      </div>
      <div className="circle rotate-180">
        <Circle />
      </div>
      <div className="circle absolute rotate-180 top-[-300px] left-[10rem]">
        <Circle />
      </div>
    </div>
  );
};

export default CirclesBackground;
