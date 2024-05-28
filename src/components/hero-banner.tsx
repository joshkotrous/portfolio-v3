import React from "react";
import WordRotate from "@/components/magicui/word-rotate";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const HeroBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.5 }}
      transition={{ duration: 0.35 }}
      id="home"
      className="relative w-screen px-1 h-screen flex flex-col justify-center items-center"
    >
      <div className="flex flex-col items-center justify-center">
        <WordRotate
          className="text-3xl md:text-4xl font-bold"
          words={[
            "Web Development.",
            "UI/UX Design.",
            "Cloud Computing.",
            "Web Security.",
            "Frontend Frameworks.",
            "API Design.",
            "SEO Strategies.",
            "Responsive Design.",
          ]}
        />
        <div className="text-sm md:text-base">
          Currently Senior Software Engineering Manager @{" "}
          <Link
            to="https://americanexpress.com"
            target="_blank"
            className="hover:underline"
          >
            American Express
          </Link>
        </div>
        <div className="flex items-center gap-1 text-sm md:text-base">
          <FaLocationDot />
          New York, NY
        </div>
      </div>

      <div className="absolute bottom-1/4 flex gap-4 text-4xl md:text-5xl">
        <Link to="mailto:joshkotrous@gmail.com">
          <IoMail className="hover:scale-110 transition-all cursor-pointer" />
        </Link>
        <Link to="https://github.com/joshkotrous" target="_blank">
          <FaGithub className="hover:scale-110 transition-all cursor-pointer" />
        </Link>
        <Link to="https://linkedin.com/in/joshkotrous" target="_blank">
          <FaLinkedin className="hover:scale-110 transition-all cursor-pointer" />
        </Link>
      </div>
    </motion.div>
  );
};

export default HeroBanner;
