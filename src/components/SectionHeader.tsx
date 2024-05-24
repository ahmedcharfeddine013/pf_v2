import React from "react";

const SectionHeader = ({ title }: { title: string }) => {
  return <h1 className="text-4xl font-bold text-primary/90">{title}</h1>;
};

export default SectionHeader;
