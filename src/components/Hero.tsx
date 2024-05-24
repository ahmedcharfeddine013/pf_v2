"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import heroIcons from "../../public/assests/4-small.png";
import Image from "next/image";
import { BackgroundCircles } from "./hero/Hero";
import { Laptop } from "lucide-react";

const Hero = () => {
  const parallaxRef = useRef(null);
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0, delay: 1 });
    gsap.to("#desc", { opacity: 1, y: 0, delay: 1.5 });
    gsap.to("#hero_img", { opacity: 1, y: 0, delay: 1.5 });
  }, []);
  return (
    <section className="w-full nav-height relative overflow-hidden">
      <div
        className="h-5/6 relative w-full grid grid-cols-1 md:grid-cols-2 place-items-center   p-10 md:px-20 space-y-3 md:space-y-6"
        ref={parallaxRef}
      >
        <div className=" flex flex-col items-center md:items-start text-center md:text-left justify-start md:gap-6">
          <h1
            id="title"
            className="hero-title translate-y-40 md:text-left text-3xl xl:text-[3rem] "
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
        <div id="hero_img" className="opacity-0   translate-y-20">
          <Laptop className="h-48 w-48 text-blue-400" />
        </div>
        {/* <BackgroundCircles parallaxRef={parallaxRef} /> */}
      </div>
    </section>
  );
};

export default Hero;
