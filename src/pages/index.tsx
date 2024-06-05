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
import Project from "@/components/project";

export default function Index() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [posts, setPosts] = useState<Array<PostData>>();
  const projects = [
    {
      title: "Portfolio v1",
      description: "My first developer portfolio.",
      url: "https://joshkotrous.github.io/portfolio-v1",
      repoUrl: "https://github.com/joshkotrous/portfolio-v1",
      skills: ["React", "JavaScript", "Framer Motion", "Python"],
      img: "/portfolio-v1.png",
    },
    {
      title: "Portfolio v2",
      description: "The second iteration of my portfolio.",
      url: "https://joshkotrous.github.io/portfolio-v2",
      repoUrl: "https://github.com/joshkotrous/portfolio-v2",
      skills: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
      img: "/portfolio-v2.png",
    },
    {
      title: "Portfolio v3",
      description: "The third iteration of my portfolio.",
      url: "https://joshkotrous.io",
      repoUrl: "https://github.com/joshkotrous/portfolio-v3",
      skills: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
      img: "/portfolio-v3.png",
    },
    {
      title: "Devumé (pre-alpha)",
      description: "Showcase your skills, put your best foot forward.",
      url: "https://devume-frontend.vercel.app/",
      repoUrl: "https://github.com/joshkotrous/devume-backend",
      skills: [
        "Python",
        "TypeScript",
        "React",
        "Framer Motion",
        "Tailwind CSS",
      ],
      img: "/devume.png",
    },
  ];
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

  return (
    <>
      {/* <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/react.svg" />

        <title>Josh Kotrous</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head> */}

      <HeroBanner />
      <Section title="Posts" className="h-[50vh]">
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
        <MagicCardGradient>
          {projects &&
            projects.map((item: any) => (
              <Project
                title={item.title}
                description={item.description}
                skills={item.skills}
                url={item.url}
                repoUrl={item.repoUrl}
                img={item.img}
              ></Project>
            ))}
        </MagicCardGradient>
      </Section>
      <Section title="Components">
        <div className="w-full relative flex flex-col-reverse gap-4 md:flex-row items-center">
          <div className="text-lg md:text-2xl w-full">
            Responsive Nav Bar
            <p className="text-sm md:text-lg font-normal">
              A fully responsive and reusable nav bar with support for dark
              mode.
            </p>
            <SkillTags
              className="flex-wrap"
              skills={["React", "TypeScript", "Tailwind CSS", "Framer Motion"]}
            />
          </div>

          <NavigationDemo />
        </div>
      </Section>
    </>
  );
}
