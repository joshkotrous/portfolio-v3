import React from "react";
import { motion } from "framer-motion";
interface PostProps {
  title?: string;
  date?: string;
  description?: string;
  url?: string;
}

const Post: React.FC<PostProps> = ({ title, date, description, url }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="hover:scale-[101%] transition-all cursor-pointer "
      >
        <div className="w-full flex justify-between items-center">
          <div className="text-xl md:text-2xl">{title}</div>
          <div className="text-base md:text-lg font-light">{date}</div>
        </div>

        <div className="text-base md:text-lg font-normal">{description}</div>
      </motion.div>
    </>
  );
};

export default Post;
