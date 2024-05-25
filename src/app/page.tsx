"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import CirclesBackground from "../components/CirclesBackground";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="bg-background relative">
      <Navbar />
      <Hero />
      <div className="md:px-20">
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
