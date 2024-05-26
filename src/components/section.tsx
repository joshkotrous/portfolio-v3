import React from "react";

interface SectionProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className }) => {
  return (
    <div
      id={title.toLowerCase()}
      className={`w-full h-fit text-left font-bold flex flex-col gap-6 p-4 pt-20 min-h-screen ${className}`}
    >
      <h2 className="text-4xl ">{title}</h2>

      {children}
    </div>
  );
};

export default Section;
