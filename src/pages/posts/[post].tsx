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

  const [postFilePath, setPostFilePath] = useState<string>();

  const getPosts = async () => {
    const posts = await GetPosts();
    setPosts(posts);
  };

  const getPostInformation = async () => {
    const post = posts?.find((post) => post.filepath.includes(postName!));
    console.log(post?.filepath);
    setPostTitle(post?.title);
    setPostDate(post?.date);
    setPostFilePath(post?.filepath);
    setPostSummary(post?.summary);
  };

  useEffect(() => {
    getPosts();
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
        {postFilePath && postTitle && (
          <ReadView
            filePath={postFilePath}
            title={postTitle}
            date={FormatDate(postDate!)}
            summary={postSummary}
          ></ReadView>
        )}
      </motion.div>
    </>
  );
}

export const Component = B;
