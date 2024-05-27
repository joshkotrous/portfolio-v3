import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosSunny } from "react-icons/io";
import { GoMoon } from "react-icons/go";
import "../App.css";
import { useLocation } from "react-router-dom";
interface NavigationProps {
  darkMode?: boolean;
  setDarkMode?: any;
  classNames?: string;
}

const Navigation: React.FC<NavigationProps> = ({
  darkMode,
  setDarkMode,
  classNames,
}) => {
  const [selected, setSelected] = useState("Home");
  const [selectedWidth, setSelectedWidth] = useState(0);
  const [selectedLeft, setSelectedLeft] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [observeIntersection, setObserveIntersection] = useState(true);
  const location = useLocation();
  const [showNav, setShowNav] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuRef2 = useRef<HTMLDivElement>(null);

  const menuItems = [
    { name: "Home", id: 1 },
    { name: "Posts", id: 2 },
    { name: "Projects", id: 3 },
    { name: "Components", id: 4 },
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

  const handleClick = async (item: any) => {
    setObserveIntersection(false);
    setSelected(item.name);
    scrollToSection(item.name.toLowerCase());
    setTimeout(() => {
      setObserveIntersection(true);
    }, 2000);
  };

  useEffect(() => {
    const homeElement = document.querySelector("#home");
    const postsElement = document.querySelector("#posts");
    const projectsElement = document.querySelector("#projects");
    const componentsElement = document.querySelector("#components");

    if (homeElement) {
      const observerCallback = (entries: any) => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            console.log(entry.target.id);
            setSelected(
              entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1)
            );
            console.log("Element is in view");
            // Do something when the element is in view
          } else {
            console.log("Element is out of view");
            // Do something when the element is out of view
          }
        });
      };

      const observerOptions = {
        root: null, // Use the viewport as the root
        threshold: 0.75, // Trigger the callback when 50% of the target is visible
      };

      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );

      if (observeIntersection) {
        observer.observe(homeElement);
        observer.observe(postsElement!);
        observer.observe(projectsElement!);
        observer.observe(componentsElement!);
      }

      return () => {
        observer.unobserve(homeElement);
        observer.unobserve(postsElement!);
        observer.unobserve(projectsElement!);
        observer.unobserve(componentsElement!);
      };
    }
  }, [observeIntersection]);

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

  useEffect(() => {
    const getCurrentUrl = () => {
      const currentUrl = `${window.location.origin}${location.pathname}${location.search}${location.hash}`;
      if (currentUrl.includes("posts")) {
        setShowNav(false);
      }
    };

    getCurrentUrl();
  }, [location]);

  return (
    <div
      className={`fixed w-screen flex justify-center z-50 top-5 transition-all ${
        !showNav && "hidden"
      }`}
    >
      <motion.div className="w-full flex justify-center ">
        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{ width: "75%", opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-fit backdrop-blur-2xl dark:bg-white/5 bg-gray-900/5 py-1 px-1 rounded-2xl dark:text-white flex justify-center items-center max-w-fit "
          ref={menuRef}
          onAnimationComplete={() => setIsAnimationComplete(true)}
        >
          <div className="relative overflow-hidden w-full">
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.25 }}
              ref={menuRef2}
              className={`relative flex items-center overflow-auto justify-evenly `}
            >
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  id={item.name}
                  className="relative cursor-pointer px-[13px] py-2 z-20 select-none"
                  onClick={() => {
                    handleClick(item);
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
                layoutId="underline"
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

export default Navigation;
