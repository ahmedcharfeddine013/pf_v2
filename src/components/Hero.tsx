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
    gsap.to("#title", { opacity: 1, y: 0, delay: 1 });
    gsap.to("#desc", { opacity: 1, y: 0, delay: 1.5 });
    gsap.to("#hero_img", { opacity: 1, y: 0, delay: 1.5 });
  }, []);
  return (
    <section className="w-full nav-height relative overflow-hidden">
     
    </section>
  );
};

export default Hero;
