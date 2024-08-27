import { projectsList } from "@/constants";
import { animateWithGsap } from "@/utils/animations";
import { useGSAP } from "@gsap/react";
import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";

const Projects = () => {
  useGSAP(() => {
    animateWithGsap(
      "#projects-header",
      { x: 0, opacity: 1, ease: "power2.inOut", duration: 1, delay: 0.2 },
      {}
    );
    animateWithGsap(
      ".project-img",
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
    animateWithGsap(
      ".project-title",
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
    animateWithGsap(
      ".project-link",
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
      id="Projects"
      className="flex items-center justify-center flex-col gap-10 py-10 relative about-me-gradient z-0"
    >
      <h1
        id="projects-header"
        className="text-4xl z-[50] opacity-0 -translate-x-20 font-bold text-primary/90 "
      >
        Projects
      </h1>
      <div className="w-[80%] p-6 flex justify-center flex-col flex-wrap gap-10 items-center rounded-lg outline-none z-[10] pb-20 ">
        {projectsList.map((project) => (
          <div
            key={project.id}
            className="flex flex-col items-center justify-center gap-5"
          >
            <div className="flex items-center justify-center rounded-xl overflow-hidden border-2 border-primary opacity-0 translate-y-20 project-img ">
              <Image
                src={project.imagePath}
                alt=""
                width={500}
                height={500}
                objectFit="cover"
              />
            </div>
            <div className="flex items-center gap-4 ">
              <h1 className="text-xl opacity-0 translate-y-20 project-title">
                {project.name}
              </h1>
              <a
                href={project.githubLink}
                className="project-link translate-y-20 opacity-0"
              >
                <Link />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-t from-background to-transparent absolute bottom-0 w-full h-[40%]"></div>
      <div className="bg-gradient-to-b from-background to-transparent absolute top-0 w-full h-[40%]"></div>
    </section>
  );
};

export default Projects;
