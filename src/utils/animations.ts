import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (
  target: any,
  animationProps: any,
  scrollProps: any
) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart none none reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};
