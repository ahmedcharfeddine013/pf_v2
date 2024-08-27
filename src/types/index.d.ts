import { StaticImageData } from "next/image";

declare interface ProjectProps {
  id: string;
  name: string;
  description: string;
  imagePath: StaticImageData;
  githubLink: string;
  status: string;
  liveLink: string;
}
