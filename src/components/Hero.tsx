"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0, delay: 1 });
    gsap.to("#desc", { opacity: 1, y: 0, delay: 1.5 });
  }, []);
  return (
    <section className="w-full nav-height relative">
      <div className="h-5/6 w-full grid grid-cols-2 place-items-center px-20 space-y-6">
        <div className="text-left flex flex-col items-start justify-start gap-6">
          <h1 id="title" className="hero-title translate-y-40 text-3xl md:text-[4rem] ">
            Ahmed Charfeddine
          </h1>
          <p id="desc" className="translate-y-40 opacity-0">
            A seasoned <span className="text-primary text-sm md:text-xl ">Frontend Developer</span>{" "}
            transforming ideas into stunning digital experiences. Let&apos;s
            create something amazing!{" "}
          </p>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
