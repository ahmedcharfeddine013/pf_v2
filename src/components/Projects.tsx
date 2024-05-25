import { projectsLiist } from "@/constants";
import { animateWithGsap } from "@/utils/animations";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Projects = () => {
  useGSAP(() => {
    animateWithGsap(
      "#projects-header",
      { x: 0, opacity: 1, ease: "power2.inOut", duration: 1, delay: 0.2 },
      {}
    );
    // animateWithGsap(
    //   ".skill_cls",
    //   {
    //     y: 0,
    //     opacity: 1,
    //     ease: "power2.inOut",
    //     duration: 1,
    //     delay: 0.2,
    //     stagger: 0.1,
    //   },
    //   {}
    // );
  }, []);
  return (
    <section className="flex items-center justify-center flex-col gap-10 py-10 relative about-me-gradient z-0">
      <h1
        id="projects-header"
        className="text-4xl z-[50] opacity-0 -translate-x-20 font-bold text-primary/90 "
      >
        Projects
      </h1>
      <div className="flex flex-col items-center justify-center gap-10">
        {projectsLiist.map((project) => (
          <div
            key={project.id}
            className="flex flex-col gap-5 text-center md:grid md:grid-cols-3 md:w-[80%] md:place-items-center lg:w-[80%] md:text-left md:items-start items-center justify-center "
          >
            <div>
              <Image
                src={project.imagePath}
                alt=""
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
            <div className="col-span-2">
              <h1>{project.name}</h1>
              <p>{project.description}</p>
              <a href={project.githubLink}>{project.githubLink}</a>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[80%] p-6 flex justify-center flex-row flex-wrap gap-3 items-center rounded-lg outline-none z-[10] "></div>
      <div className="bg-gradient-to-t from-background to-transparent absolute bottom-0 w-full h-[40%]  "></div>
      <div className="bg-gradient-to-b from-background to-transparent absolute top-0 w-full h-[40%]"></div>
    </section>
  );
};

export default Projects;
