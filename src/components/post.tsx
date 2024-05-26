import React from "react";

interface PostProps {
  title?: string;
  date?: string;
  description?: string;
  url?: string;
}

const Post: React.FC<PostProps> = ({ title, date, description, url }) => {
  return (
    <>
      <div className="hover:scale-[101%] transition-all cursor-pointer">
        <div className="w-full flex justify-between items-center">
          <div className="text-xl md:text-2xl">{title}</div>
          <div className="text-base md:text-lg font-light">{date}</div>
        </div>

        <div className="text-base md:text-lg font-normal">{description}</div>
      </div>
    </>
  );
};

export default Post;
