import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { ProjectProps } from "@/types";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "@/utils/animations";

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  useGSAP(() => {
    animateWithGsap(
      ".project",
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
    <Card className="shadow-md overflow-hidden opacity-0 project translate-y-10">
      <Link href={`/project/${project.id}`} className="overflow-hidden group">
        <Image
          src={project.imagePath}
          alt={project.name}
          className="group-hover:scale-105 duration-100 ease-in transition-all aspect-video"
        />
      </Link>
      <CardHeader className="flex w-full items-center justify-center gap-2 border-t-2">
        <h1 className="font-light text-lg">{project.name}</h1>
        <Button className="w-full">
          <Link href={`/project/${project.id}`}>View Project</Link>
        </Button>
      </CardHeader>
    </Card>
  );
};

export default ProjectCard;
