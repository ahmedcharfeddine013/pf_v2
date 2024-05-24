"use client";

import React, { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 75%", // Trigger the animation when the top of the element is 75% from the top of the viewport
            end: "bottom 25%", // End the animation when the bottom of the element is 25% from the top of the viewport
            toggleActions: "play none none reverse", // Play the animation when in view, and reverse when out of view
          },
        }
      );
    });
  }, []);
  return (
    <section className="flex items-center justify-center flex-col gap-10 py-10">
      <SectionHeader title="About Me" />
      <div className="w-[80%] border-4 p-6 rounded-lg outline-none border-primary/50">
        <p>
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
    </section>
  );
};

export default AboutMe;
