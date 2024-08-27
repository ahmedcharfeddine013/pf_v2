"use client";

import { projectsList } from "@/constants";
import { ProjectProps } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Loader,
  Github,
  Check,
  Loader2,
  SquareArrowOutUpRight,
} from "lucide-react";

const ProjectPage = ({ params: { id } }: { params: { id: string } }) => {
  const [project, setProject] = useState<ProjectProps>();

  useEffect(() => {
    const fetchProject = () => {
      const res = projectsList.find((project) => project.id === id);
      if (res) setProject(res);
    };
    fetchProject();
  }, [id]);

  if (!project)
    return (
      <main className="flex items-center justify-center w-full min-h-screen">
        <div className="text-3xl text-primary flex flex-row gap-2 items-center justify-center">
          <Loader className="animate-spin" size={60} /> Loading...
        </div>
      </main>
    );

  return (
    <main className="flex items-center justify-center w-full min-h-screen">
      <section className="flex items-center justify-center gap-10 flex-col">
        <h1 className="text-6xl font-bold text-primary">{project.name}</h1>
        <section className="flex items-center justify-center flex-wrap w-[80%] gap-5 flex-col mx-10">
          <div className="border">
            <Image
              src={project.imagePath}
              alt={project.name}
              height={500}
              width={500}
              className="aspect-video w-[350px] sm:min-w-[400px] lg:min-w-[500px]"
            />
          </div>
          <div className="flex flex-col flex-wrap items-center sm:items-start  w-full gap-4 p-4">
            <p className="font-light text-center">{project.description}</p>
            <div className="flex flex-row gap-4 text-sm sm:flex-col">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:underline  gap-3"
              >
                <Github className="text-primary" />
                <p className="sm:block hidden">{project.githubLink}</p>
              </a>

              {project.liveLink.length > 0 && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 flex items-center gap-3 hover:underline"
                >
                  <SquareArrowOutUpRight />
                  <p className="sm:block hidden">{project.liveLink}</p>
                </a>
              )}
            </div>
            <div>
              {project.status === "completed" ? (
                <div className="text-green-500 flex items-center gap-3">
                  <Check />
                  Completed
                </div>
              ) : (
                <div className="text-red-500 flex items-center gap-3">
                  <Loader />
                  In Progress
                </div>
              )}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default ProjectPage;
