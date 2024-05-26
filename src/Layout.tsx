import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Head } from "vite-react-ssg";
import Navigation from "./components/navigation";
import { motion } from "framer-motion";
import Gradients from "./components/gradients";

import "./App.css";
export default function Layout() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [homeRef, setHomeRef] = useState();

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
        <meta name="theme-color" content={darkMode ? "bg-gray-600" : "white"} />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />

        <title>head test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <body
          className={`${darkMode ? "bg-gray-600" : "bg-white"} transition-all`}
        />
      </Head>
      <main
        className={`${
          darkMode && "dark bg-transparent text-white"
        } transition-all relative overflow-auto overflow-x-hidden antialiased  z-[0]`}
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
      </main>
      <div className="fixed h-full w-screen bottom-0 top-0 z-[-1] transition-all backdrop-blur-3xl" />
      <Gradients />
    </>
  );
}
