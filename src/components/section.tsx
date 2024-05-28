import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.5 }}
      transition={{ duration: 0.35 }}
      id={title.toLowerCase()}
      className={`w-full h-fit text-left font-bold flex flex-col gap-6 p-4 pt-20 min-h-screen ${className}`}
    >
      <h2 className="text-4xl ">{title}</h2>

      {children}
    </motion.div>
  );
};

export default Section;
