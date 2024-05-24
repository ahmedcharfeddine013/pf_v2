import React from "react";

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <h1
      id="about-me-title"
      className="text-4xl z-[10] opacity-0 translate-x-20 font-bold text-primary/90"
    >
      {title}
    </h1>
  );
};

export default SectionHeader;
