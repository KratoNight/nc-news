import { useEffect } from "react";
import { useState } from "react";
import { getCommentsByArticleId, postComment, deleteComment } from "../utils/api";
import CommentCard from "./CommentCard";

export default function CommentsList({ articleId }) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const loggedInUsername = "weegembump";

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

  function delComment(commentId){
    deleteComment(commentId)
      .then(() => {
        setComments(
          comments.filter((comment) => comment.comment_id !== commentId)
        );
      })
      .catch((err) => {
        alert("Failed to delete comment!");
      });
  };



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
      {comments.map((comment, index) => (
          <CommentCard
            key={index}
            comment={comment}
            delComment={delComment}
            loggedInUsername={loggedInUsername}
          />
        ))}
      </ul>
    </div>
  );
}