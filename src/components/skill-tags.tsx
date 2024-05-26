import React from "react";

interface SkillTagsProps {
  className?: string;
  skillClassName?: string;
}

const SkillTags: React.FC<SkillTagsProps> = ({ className, skillClassName }) => {
  return (
    <div className={`mt-2 flex w-full flex-wrap gap-2 text-xs ${className}`}>
      <p
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
      </p>
    </div>
  );
};

export default SkillTags;
