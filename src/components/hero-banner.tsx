import React from "react";
import WordRotate from "@/components/magicui/word-rotate";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
const HeroBanner = () => {
  return (
    <div
      id="home"
      className="relative w-screen px-1 h-screen flex flex-col justify-center items-center"
    >
      <div className="flex flex-col items-center justify-center">
        <WordRotate
          className="text-4xl font-bold text-black dark:text-white"
          words={[
            "Web Development.",
            "UI/UX Design.",
            "Cloud Computing.",
            "Web Security.",
            "Frontend Frameworks.",
            "Backend Architectures.",
            "API Design.",
            "Content Management Systems.",
            "SEO Strategies.",
            "Web Performance Optimization.",
            "Responsive Design.",
            "JavaScript Libraries.",
          ]}
        />
        <div>
          Currently Senior Software Engineering Manager @ American Express
        </div>
        <div className="flex items-center gap-1">
          <FaLocationDot className="text-xl" />
          New York, NY
        </div>
      </div>

      <div className="absolute bottom-1/4 flex gap-4 text-5xl">
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
    </div>
  );
};

export default HeroBanner;
