import { useEffect } from "react";
import { useState } from "react";
import { getCommentsByArticleId, postComment } from "../utils/api";
import CommentCard from "./CommentCard";

export default function CommentsList({ articleId }) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  function handleSubmit(event) {
    const loggedInUsername = "weegembump";
    event.preventDefault();
    setComments((currentComments) => {
      return [
        {
          author: loggedInUsername,
          body: commentText,
          created_at: new Date().toTimeString(),
        },
        ...currentComments,
      ];
    });
    postComment(articleId, loggedInUsername, commentText).then(
      () => {
        setCommentText("");
      }
    );
  }

  useEffect(() => {
    getCommentsByArticleId(articleId).then((response) => {
      setComments(response.comments);
    });
  }, []);

  return (
    <div>
        <section>
        <form onSubmit={handleSubmit}>
          <textarea
            value={commentText}
            onChange={(event) => {
              setCommentText(event.target.value);
            }}
            placeholder="Type your comment here!"
            required>
          </textarea>
          <button type="submit">Add Comment</button>
        </form>
      </section>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </div>
  );
}