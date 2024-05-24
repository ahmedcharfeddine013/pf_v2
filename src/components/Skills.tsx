"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "@/utils/animations";

const Skills = () => {
  useGSAP(() => {
    animateWithGsap(
      "#about-me-title",
      { x: 0, opacity: 1, ease: "power2.inOut", duration: 1, delay: 0.2 },
      {}
    );
  }, []);
  return (
    <section className="flex items-center justify-center flex-col gap-10 py-10 relative about-me-gradient">
      <SectionHeader title="Skills" />
    </section>
  );
};

export default Skills;
