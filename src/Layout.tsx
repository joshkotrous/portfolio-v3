import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Head } from "vite-react-ssg";
import Navigation from "./components/navigation";
import { motion } from "framer-motion";
import "./App.css";
export default function Layout() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
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

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode");
    if (isDark != undefined) {
      if (isDark === "true") {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("darkMode", "true");
    } else {
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/react.svg" />
        <title>head test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <body className={``} />
      </Head>
      <main
        className={`${
          darkMode && "dark bg-gray-600 text-white"
        } transition-all relative overflow-auto overflow-x-hidden antialiased z-[0]`}
      >
        <h1 className="hidden">Josh Kotrous</h1>
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center text-center items-center max-w-[1024px] w-full px-4">
            <Suspense>
              <Outlet />
            </Suspense>
          </div>
        </div>

        <div className="fixed h-screen w-screen flex justify-center top-0 z-[-1] blur-3xl">
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
              className="h-[700px] w-[300px] rotate-[135deg]   [background-image:radial-gradient(ellipse_closest-side_at_center,#00ffb7,rgba(255,126,95,0))] absolute  -right-[400px]  "
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
              className="h-[900px] w-[500px] rotate-[135deg]    absolute -right-[400px] -top-[200px]"
            />
          </div>
        </div>
      </main>
    </>
  );
}
