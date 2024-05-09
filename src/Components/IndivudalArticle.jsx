import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById, patchArticleVote } from "../utils/api";
import CommentsList from "./CommentsList";

export default function IndivdualArticle() {
  const [article, setArticle] = useState(null);
  const [voteCount, setVoteCount] = useState(null);
  const { articleId } = useParams();

  function handleVote(updateVote){
    setVoteCount((currentCount) => {
      return currentCount + updateVote;
    });
    patchArticleVote(article.article_id, updateVote).catch((err) => {
      setVoteCount((currentCount) => {
        return currentCount - updateVote;
      });
      alert('Can\'t update Vote, Try again later!')
    });
  };

  useEffect(() => {
    getArticleById(articleId).then(({ article }) => {
      setArticle(article);
      setVoteCount(article.votes);
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
      <div>
        <span>Votes: {voteCount}</span>
        <button onClick={() => handleVote(1)}>+</button>
        <button onClick={() => handleVote(-1)}>-</button>
      </div>
      <p>Comments: {article.comment_count}</p>
      <section>
        <CommentsList articleId={articleId} />
      </section>
    </article>
  );
}