import React from "react";

interface SkillTagsProps {
  className?: string;
  skillClassName?: string;
  skills?: string[];
}

const SkillTags: React.FC<SkillTagsProps> = ({
  className,
  skillClassName,
  skills = ["React", "Python"],
}) => {
  const skillSettings = [
    {
      name: "React",
      background: "bg-cyan-600",
      backgroundDark: "dark:bg-cyan-700/50",
      text: "text-cyan-300",
      border: "border-cyan-300",
    },
    {
      name: "Tailwind CSS",
      background: "bg-sky-600",
      backgroundDark: "dark:bg-sky-500/50",
      text: "text-sky-200",
      border: "border-sky-200",
    },
    {
      name: "TypeScript",
      background: "bg-emerald-600",
      backgroundDark: "dark:bg-emerald-500/50",
      text: "text-emerald-300",
      border: "border-emerald-300",
    },
    {
      name: "JavaScript",
      background: "bg-yellow-600",
      backgroundDark: "dark:bg-yellow-500/50",
      text: "text-yellow-300",
      border: "border-yellow-300",
    },
    {
      name: "Python",
      background: "bg-green-600",
      backgroundDark: "dark:bg-lime-500/50",
      text: "text-lime-300",
      border: "border-lime-300",
    },
    {
      name: "Framer Motion",
      background: "bg-light-gray-600",
      backgroundDark: "dark:bg-light-gray-500/50",
      text: "text-light-gray-300",
      border: "border-light-gray-300",
    },
  ];

  const getSkillConfig = (skill: string) => {
    const config = skillSettings.find((item: any) => {
      return skill === item.name;
    });

    if (config) {
      return {
        background: config.background,
        backgroundDark: config.backgroundDark,
        text: config.text,
        border: config.border,
      };
    }
  };

  return (
    <div
      className={`mt-2 flex w-full flex-wrap gap-2 text-xs max-h-[4rem] font-geist-mono ${className}`}
    >
      {/* <p
        className={`font-normal dark:bg-cyan-700/50 bg-cyan-600 text-cyan-300 border-cyan-300 border-[1px] w-fit rounded-lg p-2 py-1 transition-all ${skillClassName}`}
      >
        React
      </p>
      <p
        className={`font-normal dark:bg-sky-500/50 bg-sky-600 text-sky-200 border-sky-200 border-[1px] w-fit rounded-lg p-2 py-1 transition-all ${skillClassName}`}
      >
        Tailwind CSS
      </p>
      <p
        className={`font-normal dark:bg-emerald-500/50 bg-emerald-600 text-emerald-300 border-emerald-300 border-[1px] w-fit rounded-lg p-2 py-1 transition-all ${skillClassName}`}
      >
        TypeScript
      </p>
      <p
        className={`font-normal dark:bg-yellow-500/50 bg-yellow-600 text-yellow-300 border-yellow-300 border-[1px] w-fit rounded-lg p-2 py-1 transition-all ${skillClassName}`}
      >
        JavaScript
      </p>
      <p
        className={`font-normal dark:bg-lime-500/50 bg-green-600 text-lime-300 border-lime-300 border-[1px] w-fit rounded-lg p-2 py-1 transition-all ${skillClassName}`}
      >
        Python
      </p> */}
      {skills &&
        skills.map((item: string) => {
          const config = getSkillConfig(item);
          return (
            <p
              className={`font-normal dark:${config?.backgroundDark} ${config?.background} ${config?.text} ${config?.border} border-[1px] w-fit rounded-lg p-2 py-1 transition-all ${skillClassName}`}
            >
              {item}
            </p>
          );
        })}
    </div>
  );
};

export default SkillTags;
