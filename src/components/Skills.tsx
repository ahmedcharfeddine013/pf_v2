"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "@/utils/animations";
import { skillsList } from "@/constants";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import Image from "next/image";

const Skills = () => {
  useGSAP(() => {
    animateWithGsap(
      "#skills-header",
      { x: 0, opacity: 1, ease: "power2.inOut", duration: 1, delay: 0.2 },
      {}
    );
    animateWithGsap(
      ".skill_cls",
      {
        y: 0,
        opacity: 1,
        ease: "power2.inOut",
        duration: 1,
        delay: 0.2,
        stagger: 0.1,
      },
      {}
    );
  }, []);
  return (
    <section
      id="Skills"
      className="flex items-center justify-center flex-col gap-10 py-10 relative about-me-gradient z-0"
    >
      <h1
        id="skills-header"
        className="text-4xl z-[50] opacity-0 -translate-x-20 font-bold text-primary/90 "
      >
        Skills
      </h1>

      <div className="w-[80%] p-6 flex justify-center flex-row flex-wrap gap-3 items-center rounded-lg outline-none z-[10] ">
        {skillsList.map((skill) => (
          <div key={skill.name} className="skill_cls opacity-0 translate-y-20">
            <Image src={skill.img} alt="" height={30} width={30} />
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-t from-background to-transparent absolute bottom-0 w-full h-[40%]  "></div>
      <div className="bg-gradient-to-b from-background to-transparent absolute top-0 w-full h-[40%]"></div>
    </section>
  );
};

export default Skills;
