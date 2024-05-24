"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import heroIcons from "../../public/assests/4-small.png";
import Image from "next/image";
import { BackgroundCircles } from "./hero/Hero";
import { Laptop } from "lucide-react";
import Circle from "./Circle";

const Hero = () => {
  const parallaxRef = useRef(null);
  useGSAP(() => {
    // gsap.to("#title", { opacity: 1, y: 0, delay: 1 });
    // gsap.to("#desc", { opacity: 1, y: 0, delay: 1.5 });
    gsap.to(".hero-text", { opacity: 1, y: 0, stagger: 0.5, delay: 1 , duration : 0.2});
  }, []);
  return (
    <section className="w-full h-screen hero-gradient relative overflow-hidden">
      <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
        <p className="hero-text text-purple-500">Web Developer</p>
        <h1 className="hero-text text-white text-2xl md:text-[4rem] font-bold">
          Ahmed Charfeddine
        </h1>
      </div>
      <div className="bg-gradient-to-t from-background to-transparent absolute bottom-0 w-full h-24"></div>
    </section>
  );
};

export default Hero;
