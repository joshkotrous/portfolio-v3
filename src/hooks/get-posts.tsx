import React from "react";
export interface PostData {
  title: string;
  summary: string;
  date: string;
  filepath: string;
}
export async function GetPosts() {
  try {
    const response = await fetch("/posts/posts.json", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Markdown file:", error);
  }
}
