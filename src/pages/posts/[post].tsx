import { useParams } from "react-router-dom";
import ReadView from "@/components/read-view";
import { useState, useEffect } from "react";
import { GetPosts, PostData } from "@/hooks/get-posts";
import { FormatDate } from "@/hooks/format-date";
import { motion } from "framer-motion";
import { Head } from "vite-react-ssg";
export default function B() {
  const { postName } = useParams();
  const [posts, setPosts] = useState<Array<PostData>>();
  const [postTitle, setPostTitle] = useState<string>();
  const [postDate, setPostDate] = useState<string>();
  const [postSummary, setPostSummary] = useState<string>();
  const [articleContent, setArticleContent] = useState<string>();

  const [postFilePath, setPostFilePath] = useState<string>();

  const getPosts = async () => {
    const posts = await GetPosts();
    setPosts(posts);
  };

  const getPostInformation = async () => {
    const post = posts?.find((post) =>
      post.filepath.toLowerCase().includes(postName?.toLowerCase()!)
    );
    console.log(post?.filepath);
    setPostTitle(post?.title);
    setPostDate(post?.date);
    setPostFilePath(post?.filepath);
    setPostSummary(post?.summary);
    return post;
  };

  const fetchMarkdownFile = async () => {
    try {
      const response = await fetch("/posts/" + postName + ".md", {
        headers: {
          Accept: "text/markdown",
        },
      });

      const text = await response.text();
      if (text.includes("!DOCTYPE")) {
        setArticleContent("");
      } else {
        setArticleContent(text);
      }
      // setArticleContent(text);
    } catch (error) {
      console.error("Error fetching Markdown file:", error);
    }
  };

  useEffect(() => {
    getPosts();
    fetchMarkdownFile();
  }, []);

  useEffect(() => {
    getPostInformation();
  }, [posts]);

  return (
    <>
      <Head>
        <title>{`Josh Kotrous | ${postTitle}`}</title>
        <meta name="author" property="og:author" content="Josh Kotrous" />
        <meta property="og:type" content="Article" />
        <meta name="title" property="og:title" content={postTitle} />
        <meta
          name="description"
          property="og:description"
          content={postSummary}
        />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <ReadView
          // filePath={postName!}
          title={postTitle!}
          date={FormatDate(postDate!)}
          // summary={postSummary}
          articleContent={articleContent}
        ></ReadView>
      </motion.div>
    </>
  );
}

export const Component = B;
