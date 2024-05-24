import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import CirclesBackground from '../components/CirclesBackground';

export default function Home() {
  return (
    <main className="bg-background relative">
      <Navbar />
      <Hero />
      <CirclesBackground />
    </main>
  );
}
