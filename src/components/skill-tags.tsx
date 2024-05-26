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
        React JS
      </p>
      <p
        className={`font-normal dark:bg-amber-500/50 bg-amber-600 text-amber-200 border-amber-200 border-[1px] w-fit rounded-lg p-2 py-1 transition-all ${skillClassName}`}
      >
        Tailwind CSS
      </p>
      <p
        className={`font-normal dark:bg-emerald-500/50 bg-emerald-600 text-emerald-300 border-emerald-300 border-[1px] w-fit rounded-lg p-2 py-1 transition-all ${skillClassName}`}
      >
        TypeScript
      </p>
    </div>
  );
};

export default SkillTags;
