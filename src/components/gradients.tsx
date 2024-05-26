import React from "react";
import { motion } from "framer-motion";

const Gradients = () => {
  const gradients = [
    "radial-gradient(ellipse closest-side at center, #7e4fff, rgba(255, 126, 95, 0))",
    "radial-gradient(ellipse closest-side at center, #a764ff, rgba(255, 150, 95, 0))",
    "radial-gradient(ellipse closest-side at center, #ff7e5f, rgba(255, 126, 95, 0))",
    "radial-gradient(ellipse closest-side at center, #ff0077, rgba(255, 150, 95, 0))",
    "radial-gradient(ellipse closest-side at center, #77ff00, rgba(255, 126, 95, 0))",
  ];

  const gradientsRev = [
    "radial-gradient(ellipse closest-side at center, #77ff00, rgba(255, 126, 95, 0))",

    "radial-gradient(ellipse closest-side at center, #ff0077, rgba(255, 150, 95, 0))",

    "radial-gradient(ellipse closest-side at center, #ff7e5f, rgba(255, 126, 95, 0))",

    "radial-gradient(ellipse closest-side at center, #a764ff, rgba(255, 150, 95, 0))",

    "radial-gradient(ellipse closest-side at center, #7e4fff, rgba(255, 126, 95, 0))",
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed h-screen w-screen flex justify-center top-0 z-[-2] "
    >
      <div className="relative">
        <motion.div
          initial={{ top: "100px", right: "-400px" }}
          animate={{
            backgroundImage: gradientsRev,
            top: "-200px",
            right: "-200px",
          }}
          transition={{
            duration: 30,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="transform-gpu h-[700px] w-[300px] rotate-[135deg]   [background-image:radial-gradient(ellipse_closest-side_at_center,#00ffb7,rgba(255,126,95,0))] absolute  -right-[400px]  "
        />
        <motion.div
          initial={{ top: "-200px", right: "-400px" }}
          animate={{
            backgroundImage: gradients,
            top: "-50px",
            right: "-300px",
          }}
          transition={{
            duration: 60,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="transform-gpu h-[900px] w-[500px] rotate-[135deg]    absolute -right-[400px] -top-[200px]"
        />
      </div>
    </motion.div>
  );
};

export default Gradients;
