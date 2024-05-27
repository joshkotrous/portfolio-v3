import { useParams } from "react-router-dom";
import ReadView from "@/components/read-view";
import { useState, useEffect } from "react";
import { GetPosts, PostData } from "@/hooks/get-posts";
import { FormatDate } from "@/hooks/format-date";
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
    <div>
      {postFilePath && postTitle && (
        <ReadView
          filePath={postFilePath}
          title={postTitle}
          date={FormatDate(postDate!)}
          summary={postSummary}
        ></ReadView>
      )}
    </div>
  );
}

export const Component = B;
