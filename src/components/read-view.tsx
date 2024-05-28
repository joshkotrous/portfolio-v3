import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BorderedContainer from "./bordered-container";
import { IoIosArrowRoundBack } from "react-icons/io";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useNavigate } from "react-router-dom";
// @ts-ignore
import { Helmet } from "react-helmet";
import { Head } from "vite-react-ssg";
// @ts-ignore
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";

interface ReadViewProps {
  filePath: string;
  date?: string;
  summary?: string;
  title: string;
}

const ReadView: React.FC<ReadViewProps> = ({
  filePath,
  date,
  summary,
  title,
}) => {
  const [articleContent, setArticleContent] = useState("");
  const navigate = useNavigate();

  const encodedTitle = encodeURIComponent(title);
  const fetchMarkdownFile = async () => {
    console.log(filePath);
    try {
      const response = await fetch(filePath, {
        headers: {
          Accept: "text/markdown",
        },
      }); // Replace with the path to your Markdown file
      const text = await response.text();
      setArticleContent(text);
    } catch (error) {
      console.error("Error fetching Markdown file:", error);
    }
  };

  useEffect(() => {
    // const main = document.getElementById("main");
    // if (localStorage.getItem("darkMode") === "true") {
    //   console.log(localStorage.getItem("darkMode"));

    //   main?.classList.add("dark");
    //   main?.classList.add("bg-transparent");
    //   main?.classList.add("text-white");
    // } else {
    //   main?.classList.remove("dark");
    //   main?.classList.remove("text-white");
    // }
    fetchMarkdownFile();
  }, []);
  return (
    <>
      {/* <Helmet>
        <title>{`Josh Kotrous | ${title}`}</title>
        <meta charSet="utf-8" />
        <meta name="title" property="og:title" content={title} />
        <meta name="description" property="og:description" content={summary} />
        <meta property="og:type" content="Article" />
        <meta
          property="og:url"
          content={`https://joshkotrous.io/posts/${encodedTitle}`}
        />
        <meta property="og:site_name" content="Josh Kotrous" />
        <meta property="og:locale" content="en_US" />
        <meta name="author" content="Josh Kotrous" />
      </Helmet> */}

      <div className="w-[90vw] h-screen p-2 pt-10 flex justify-center">
        <BorderedContainer
          className="min-h-[95%] text-left max-w-[1024px]"
          secondaryClassName="gap-0"
        >
          <div className="w-fit h-fit">
            <HashLink to="/#posts">
              <IoIosArrowRoundBack
                className="text-5xl cursor-pointer"
                // onClick={() => {
                //   navigate("/#posts");
                // }}
              />
            </HashLink>
          </div>
          <AnimatePresence>
            {articleContent && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => (
                      <>
                        <h1 className="text-3xl font-bold">{children}</h1>
                        <p className="font-normal">{date}</p>
                      </>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-2xl font-semibold mt-4">
                        {children}
                      </h2>
                    ),
                    p: ({ children }) => (
                      <p className="inter-regular">{children}</p>
                    ),
                    table: ({ children }) => (
                      <div className="text-center overflow-auto">
                        <table className="border-collapse m-auto  border-[1px]">
                          {children}
                        </table>
                      </div>
                    ),
                    th: ({ children }) => (
                      <th className=" border-[1px] p-3">{children}</th>
                    ),
                    td: ({ children }) => (
                      <td className=" border-[1px] p-3">{children}</td>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal">{children}</ol>
                    ),
                    ul: ({ children }) => (
                      <div className="w-full max-w-[700px] flex justify-center m-auto px-10">
                        <ul className="list-disc">{children}</ul>
                      </div>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-bold">{children}</strong>
                    ),
                  }}
                  remarkPlugins={[remarkGfm]}
                  children={articleContent}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </BorderedContainer>
      </div>
    </>
  );
};

export default ReadView;
