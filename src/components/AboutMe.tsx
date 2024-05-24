"use client";

import React, { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "@/utils/animations";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  useGSAP(() => {
    animateWithGsap(
      "#details",
      { y: 0, opacity: 1, ease: "power2.inOut", duration: 1, delay: 0.4 },
      {}
    );
    animateWithGsap(
      "#about-me-title",
      { x: 0, opacity: 1, ease: "power2.inOut", duration: 1, delay: 0.2 },
      {}
    );
  }, []);
  return (
    <section className="flex items-center justify-center flex-col gap-10 py-10 relative about-me-gradient">
      <SectionHeader title="About Me" />
      <div className="w-[80%] p-6 rounded-lg outline-none z-[10] ">
        <p id="details" className="opacity-0 translate-y-20">
          I&apos;m <span>Ahmed Charfeddine</span>, a budding talent in the world
          of technology, specializing in <span>Frontend Development</span>.
          Armed with a solid foundation in Mathematics from my recent{" "}
          <span>Baccalaureat</span>, I&apos;ve embarked on an exciting journey
          into the realm of <span>Computer Science</span>. Drawing inspiration
          from my background in <span>Design</span> and <span>Editing</span>,
          I&apos;m passionate about bringing creativity and innovation to the
          digital landscape. While I may be new to the frontend scene, my
          enthusiasm and dedication make me a quick learner and a natural
          problem-solver. I&apos;m on a mission to hone my skills and make a
          mark in the industry, and I&apos;m eager to collaborate on projects
          big and small. Let&apos;s turn visions into reality together!
        </p>
      </div>
      <div className="bg-gradient-to-t from-background to-transparent absolute bottom-0 w-full h-[40%]  "></div>
      <div className="bg-gradient-to-b from-background to-transparent absolute top-0 w-full h-[40%]"></div>
    </section>
  );
};

export default AboutMe;
