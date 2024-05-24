import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import CirclesBackground from "../components/CirclesBackground";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  // useEffect(() => {
  //   const sections = gsap.utils.toArray(".section");

  //   gsap.to(sections, {
  //     xPercent: -100 * (sections.length - 1),
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: containerRef.current,
  //       pin: true,
  //       scrub: 1,
  //       snap: 1 / (sections.length - 1),
  //       end: () => "+=" + containerRef.current?.offsetWidth,
  //     },
  //   });
  // }, []);
  return (
    <main className="bg-background relative">
      <Navbar />
      <Hero />
      <div className="px-20">
        <AboutMe />
      </div>
      <CirclesBackground />
    </main>
  );
}
