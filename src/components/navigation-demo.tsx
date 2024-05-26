import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosSunny } from "react-icons/io";
import { GoMoon } from "react-icons/go";
import "../App.css";

interface NavigationProps {
  darkMode?: boolean;
  setDarkMode?: any;
  classNames?: string;
}

const NavigationDemo: React.FC<NavigationProps> = ({ classNames }) => {
  const [selected, setSelected] = useState("Code");
  const [selectedWidth, setSelectedWidth] = useState(0);
  const [selectedLeft, setSelectedLeft] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  const menuRef = useRef<HTMLDivElement>(null);
  const menuRef2 = useRef<HTMLDivElement>(null);

  const menuItems = [
    { name: "Code", id: 1 },
    { name: "Contact", id: 2 },
    { name: "About", id: 3 },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getSelectedElement = (id: string) => {
    const element = document.getElementById(id);
    const rect = element?.getBoundingClientRect();
    const scrollLeft = menuRef2?.current?.scrollLeft || 0;
    console.log(scrollLeft);
    setSelectedWidth(rect?.width!);
    setSelectedLeft(
      rect?.left! -
        menuRef?.current?.getBoundingClientRect().left! -
        2 +
        scrollLeft -
        2
    );
  };

  const handleScroll = (event: any) => {
    const scrollPosition = event.target.scrollLeft;
    setScrollPosition(scrollPosition);
    // You can perform any actions based on the scroll position here
  };

  useEffect(() => {
    const handleResize = () => {
      getSelectedElement(selected);
    };
    if (isAnimationComplete) {
      getSelectedElement(selected);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [selected, isAnimationComplete]);
  useEffect(() => {
    // Set the scroll position to (x, y) coordinates (e.g., (0, 100))
    if (menuRef2.current) {
      menuRef2.current.scrollLeft = -100; // Horizontal scroll position
    }
  }, []);
  return (
    <div
      className={`w-full flex justify-center max-h-fit transition-all font-normal`}
    >
      <motion.div
        // initial={{
        //   scaleY: 0,
        //   transformOrigin: "center",
        // }}
        // animate={{ scaleY: 1 }}
        // transition={{ duration: 0.5 }}
        className="w-full flex justify-center max-h-fit"
      >
        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{ width: "75%", opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-fit backdrop-blur-2xl dark:bg-white/5 h-fit bg-gray-900/5 py-1 px-1 rounded-2xl dark:text-white flex justify-center items-center max-w-fit "
          ref={menuRef}
          onAnimationComplete={() => setIsAnimationComplete(true)}
        >
          <div className="relative overflow-hidden w-full h-fit">
            <motion.div
              //   style={{
              //     maskPosition: "center",
              //     maskRepeat: "no-repeat",
              //     maskComposite: "intersect",
              //   }}
              initial={{
                width: 0,
              }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.25 }}
              ref={menuRef2}
              onScroll={handleScroll}
              //   className={`relative flex items-center overflow-auto justify-evenly ${
              //     scrollPosition > 0
              //       ? "[mask:linear-gradient(to_right,transparent,#000_1px),linear-gradient(to_left,transparent,#000_1px)]"
              //       : "[mask:linear-gradient(to_left,transparent,#000_1px)]"
              //   }`}
              className={`relative flex items-center overflow-auto justify-evenly h-fit`}
            >
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  id={item.name}
                  className="relative cursor-pointer px-[13px] py-2 z-20 select-none"
                  onClick={() => {
                    setSelected(item.name);
                  }}
                >
                  {item.name}
                </div>
              ))}
              <div className="border-[1px] ml-1 h-8 dark:border-[rgba(255,255,255,0.1)]  border-[rgba(1,1,1,0.1)] antialiased"></div>
              <AnimatePresence>
                {darkMode ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    <IoIosSunny
                      onClick={() => {
                        if (!darkMode) {
                          setDarkMode(true);
                        } else {
                          setDarkMode(false);
                        }
                      }}
                      className="mx-3 text-2xl cursor-pointer hover:text-[rgba(255,189,0)] transition-all antialiased"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    <GoMoon
                      onClick={() => {
                        if (!darkMode) {
                          setDarkMode(true);
                        } else {
                          setDarkMode(false);
                        }
                      }}
                      className="mx-3 text-2xl cursor-pointer hover:text-[rgba(77,0,255)] transition-all antialiased"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                className="absolute h-10 dark:bg-gray-600  bg-light-gray-200 rounded-xl z-10"
                style={{
                  width: `${selectedWidth}px`,
                  left: `${selectedLeft}px`,
                }}
                layoutId={String(Math.random())}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NavigationDemo;
