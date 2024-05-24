"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import heroIcons from "../../public/assests/4-small.png";
import Image from "next/image";
import { BackgroundCircles } from "./hero/Hero";

const Hero = () => {
  const parallaxRef = useRef(null);
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0, delay: 1 });
    gsap.to("#desc", { opacity: 1, y: 0, delay: 1.5 });
  }, []);
  return (
    <section className="w-full nav-height relative">
      <div
        className="h-5/6 relative w-full grid grid-cols-2 place-items-center px-20 space-y-6"
        ref={parallaxRef}
      >
        <div className="text-left flex flex-col items-start justify-start gap-6">
          <h1
            id="title"
            className="hero-title translate-y-40 text-3xl md:text-[4rem] "
          >
            Ahmed Charfeddine
          </h1>
          <p id="desc" className="translate-y-40 opacity-0">
            A seasoned{" "}
            <span className="text-primary text-sm md:text-xl ">
              Frontend Developer
            </span>{" "}
            transforming ideas into stunning digital experiences. Let&apos;s
            create something amazing!{" "}
          </p>
        </div>
        <BackgroundCircles parallaxRef={parallaxRef} />
      </div>
    </section>
  );
};

export default Hero;
