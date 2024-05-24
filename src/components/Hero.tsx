"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import heroIcons from "../../public/assests/4-small.png";
import Image from "next/image";
import { BackgroundCircles } from "./hero/Hero";
import { Laptop } from "lucide-react";
import Circle from "./Circle";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import HeroButton from "./HeroButton";
import { animateWithGsap } from "@/utils/animations";

const Hero = () => {
  const job = useRef(null);
  const name = useRef(null);
  useGSAP(() => {
    animateWithGsap(
      ".hero-text",
      {
        opacity: 1,
        y: 0,
        delay: 0.1,
        duration: 0.2,
        ease: "power3.out",
      },
      {}
    );
    animateWithGsap("#hero-button", { opacity: 1, x: 0, delay: 0.2 }, {});
  }, []);

  return (
    <section className="w-full h-screen hero-gradient relative overflow-hidden">
      <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
        <p ref={job} className="hero-text text-purple-500">
          Web Developer
        </p>
        <h1
          ref={name}
          className="hero-text text-white text-2xl md:text-[4rem] font-bold"
        >
          Ahmed Charfeddine
        </h1>
        <div className="py-5">
          <HeroButton />
        </div>
      </div>
      <div className="bg-gradient-to-t from-background to-transparent absolute bottom-0 w-full h-24"></div>
    </section>
  );
};

export default Hero;
