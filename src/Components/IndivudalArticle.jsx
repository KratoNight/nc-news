import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../utils/api";
import CommentsList from "./CommentsList";

export default function IndivdualArticle() {
  const [article, setArticle] = useState(null);
  const { articleId } = useParams();

  useEffect(() => {
    getArticleById(articleId).then(({ article }) => {
      setArticle(article);
    });
  }, []);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <article>
      <h1>{article.title}</h1>
      <img src={article.article_img_url} alt={article.title} />
      <p>Topic: {article.topic}</p>
      <p>Author: {article.author}</p>
      <p>{article.body}</p>
      <section>
        <CommentsList articleId={articleId} />
      </section>
    </article>
  );
}