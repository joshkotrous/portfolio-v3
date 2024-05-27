import { useState, useEffect } from "react";
import Section from "@/components/section";
import BorderedContainer from "@/components/bordered-container";
import Post from "@/components/post";
import { MagicCardGradient } from "@/components/magicui/magic-card-gradient";
import HeroBanner from "@/components/hero-banner";
import NavigationDemo from "@/components/navigation-demo";
import SkillTags from "@/components/skill-tags";
import { FormatDate } from "@/hooks/format-date";
import { GetPosts, PostData } from "@/hooks/get-posts";
import { Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import Navigation from "@/components/navigation";
export default function Index() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const [posts, setPosts] = useState<Array<PostData>>();
  const getPosts = async () => {
    const postData = await GetPosts();
    setPosts(postData);
  };
  useEffect(() => {
    getPosts();
  }, []);
  useEffect(() => {
    const isDark = localStorage.getItem("darkMode");
    if (isDark != undefined) {
      if (isDark === "true") {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    } else {
      localStorage.setItem("darkMode", "true");
    }
  }, []);

  // useEffect(() => {
  //   const main = document.getElementById("main");
  //   if (darkMode) {
  //     localStorage.setItem("darkMode", "true");
  //     main?.classList.add("dark");
  //     main?.classList.add("bg-transparent");
  //     main?.classList.add("text-white");
  //   } else {
  //     main?.classList.remove("dark");
  //     main?.classList.remove("text-white");
  //     localStorage.setItem("darkMode", "false");
  //   }
  // }, [darkMode]);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/react.svg" />
        <meta name="theme-color" content={darkMode ? "bg-gray-600" : "white"} />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />

        <title>Josh Kotrous</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <HeroBanner />
      <Section title="Posts">
        <BorderedContainer secondaryClassName="flex flex-col max-h-[80vh]">
          {posts &&
            posts.map((post: PostData, index: number) => {
              if (posts.length > 1 && index == posts.length - 1) {
                return (
                  <>
                    <Post
                      title={post.title}
                      date={FormatDate(post.date)}
                      description={post.summary}
                    />
                    <div className="w-full border-black/20 dark:border-white/20 border-b-[1px]" />
                  </>
                );
              }
              return (
                <Link to={post.filepath.replace(".md", "")}>
                  <Post
                    title={post.title}
                    date={FormatDate(post.date)}
                    description={post.summary}
                  />
                </Link>
              );
            })}
        </BorderedContainer>
      </Section>
      <Section title="Projects">
        <MagicCardGradient />
      </Section>
      <Section title="Components">
        <div className="w-full relative flex flex-col-reverse gap-4 md:flex-row items-center">
          <div className="text-lg md:text-2xl w-full">
            Responsive Nav Bar
            <p className="text-sm md:text-lg font-normal">
              A fully responsive and reusable nav bar with support for dark
              mode.
            </p>
            <SkillTags />
          </div>

          <NavigationDemo />
        </div>
      </Section>
    </>
  );
}
