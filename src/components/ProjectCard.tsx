import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { ProjectProps } from "@/types";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <Card className="shadow-md overflow-hidden">
      <Link href={`/project/${project.id}`} className="overflow-hidden group">
        <Image
          src={project.imagePath}
          alt={project.name}
          height={400}
          width={400}
          className="group-hover:scale-105 duration-100 ease-in transition-all"
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
