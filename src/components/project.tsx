import React from "react";
import { MagicCard } from "./magicui/magic-card";
import SkillTags from "./skill-tags";
import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
// import photo from "../assets/portfolio-v1.png";
interface ProjectProps {
  title?: string;
  description?: string;
  url?: string;
  repoUrl?: string;
  skills?: string[];
  img?: string;
}

const Project: React.FC<ProjectProps> = ({
  skills,
  title,
  description,
  url,
  repoUrl,
  img,
}) => {
  return (
    <MagicCard
      borderWidth={3}
      className="relative flex m-auto w-full h-full flex-col justify-end overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-4 shadow-2xl items-center gap-2 cursor-default md:pb-4"
    >
      {/* <div className="relative md:left-[0rem] w-full  max-h-[8rem] rounded-t-[0.5rem] [mask:linear-gradient(to_bottom,rgba(0,0,0,1)_0,rgba(0,0,0,0)_100%)] z-40"> */}
      <div className="relative md:left-[0rem] w-full  max-h-[8rem] rounded-t-[0.5rem] [mask:linear-gradient(to_bottom,rgba(0,0,0,1)_0,rgba(0,0,0,0)_100%)] z-40">
        <div className="absolute top-0 left-0 h-full w-full bg-transparent z-50" />
        {/* <iframe
          src={url}
          sandbox="allow-scripts allow-same-origin"
          loading="lazy"
          className="scale-[0.3] md:scale-[0.17] w-[105rem] sm:w-[85rem] md:w-[110rem]  lg:w-[105rem]  h-[900px] origin-top-left relative -left-[4rem] md:-left-[0rem]"
        /> */}
        <img src={img}></img>
      </div>
      <div className="w-full h-full flex flex-col relative z-50">
        <p className=" top-1/2 h-fit z-10 whitespace-nowrap text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200 w-full">
          {title}
        </p>
        <p className="h-fit z-10  text-base md:text-base font-normal text-gray-800 dark:text-gray-200 w-full mb-2">
          {description}
        </p>
        <div className="flex flex-col gap-2 md:text-lg truncate h-fit">
          {url && (
            <Link
              to={url}
              target="_blank"
              className="flex w-fit gap-1 md:gap-2 justify-start items-center"
            >
              <FaLink />
              <p className="text-xs font-normal truncate">
                {url.replace("https://", "")}
              </p>
            </Link>
          )}
          {repoUrl && (
            <Link
              to={repoUrl}
              target="_blank"
              className="flex w-fit gap-1 md:gap-2 justify-start items-center"
            >
              <FaGithub />
              <p className="text-xs font-normal truncate">
                {repoUrl.replace("https://", "")}
              </p>
            </Link>
          )}
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-end overflow-x-auto">
        <SkillTags
          className="text-[9px] gap-[5px] md:text-[12px] md:gap-2 h-fit overflow-x-auto  w-fit  justify-start self-start"
          skillClassName="p-[5px]  py-[2px] md:py-1 md:p-1"
          skills={skills}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
    </MagicCard>
  );
};

export default Project;
