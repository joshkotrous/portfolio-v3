import React from "react";

interface BorderedContainerProps {
  children?: React.ReactNode;
}

const BorderedContainer: React.FC<BorderedContainerProps> = ({ children }) => {
  return (
    <div className="relative w-full h-fit max-h-[90%] flex flex-col gap-4 border-black/20 dark:border-white/20 border-[1px] p-4 backdrop-blur-[50px]">
      <div className="overflow-auto h-full  w-full flex flex-col gap-4">
        {children}
      </div>

      <div className="w-[1px] h-[30px] absolute bg-black/50 dark:bg-white -top-[16px] -left-[1px]"></div>
      <div className="w-[30px] h-[1px] absolute bg-black/50 dark:bg-white -top-[1px] -left-[16px]"></div>
      <div className="w-[1px] h-[30px] absolute bg-black/50 dark:bg-white -top-[16px] -right-[1px]"></div>
      <div className="w-[30px] h-[1px] absolute bg-black/50 dark:bg-white -top-[1px] -right-[16px]"></div>
      <div className="w-[1px] h-[30px] absolute bg-black/50 dark:bg-white -bottom-[16px] -left-[1px]"></div>
      <div className="w-[30px] h-[1px] absolute bg-black/50 dark:bg-white -bottom-[1px] -left-[16px]"></div>
      <div className="w-[1px] h-[30px] absolute bg-black/50 dark:bg-white -bottom-[16px] -right-[1px]"></div>
      <div className="w-[30px] h-[1px] absolute bg-black/50 dark:bg-white -bottom-[1px] -right-[16px]"></div>
    </div>
  );
};

export default BorderedContainer;
