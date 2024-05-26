import React from "react";

interface SectionProps {
  title: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div
      id={title.toLowerCase()}
      className="w-full h-screen text-left font-bold flex flex-col gap-6 p-4 pt-20"
    >
      <h2 className="text-4xl ">{title}</h2>

      {children}
    </div>
  );
};

export default Section;
