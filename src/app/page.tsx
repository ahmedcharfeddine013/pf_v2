"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import MobileNavbar from "@/components/MobileNavbar";

export default function Home() {
  return (
    <main className="bg-background relative">
   
      <Hero />
      <div className="md:px-20">
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
