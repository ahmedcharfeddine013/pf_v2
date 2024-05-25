import { Github, Linkedin } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section className="flex items-center justify-center flex-col gap-10 pb-10 relative about-me-gradient z-0">
      <h1
        id="skills-header"
        className="text-4xl z-[50] opacity-0 -translate-x-20 font-bold text-primary/90 "
      >
        Skills
      </h1>

      <div className="flex justify-center flex-row flex-wrap gap-3 items-center rounded-lg outline-none z-[10] ">
        <a href="https://github.com/ahmedcharfeddine013">
          <div className="border-2 p-3 rounded-full border-blue-400 hover:bg-white/80 hover:text-blue-400 transition-all duration-100 ease-in ">
            <Github />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/ahmed-charfeddine-677156245/">
          <div className="border-2 p-3 rounded-full border-blue-400 hover:bg-white/80 hover:text-blue-400 transition-all duration-100 ease-in ">
            <Linkedin />
          </div>
        </a>
      </div>
      <div className="bg-gradient-to-t from-background to-transparent absolute bottom-0 w-full h-[40%]  "></div>
      <div className="bg-gradient-to-b from-background to-transparent absolute top-0 w-full h-[40%]"></div>
    </section>
  );
};

export default Contact;
