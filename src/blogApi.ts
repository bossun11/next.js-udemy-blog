import { Article } from "./types";

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch("http://localhost:3001/posts", { cache: "no-cache" });

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const articles = await res.json();
  return articles;
};
