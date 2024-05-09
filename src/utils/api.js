import axios from 'axios';

const myNcApi = axios.create({
    baseURL:'https://nc-news-app-kcor.onrender.com/'
})

export function getArticleList() {
    return myNcApi
    .get(`/api/articles`)
    .then((response) => {
        return response.data
    })
    .catch((err) => {
        console.log(err);
    })
}
export function getArticleById(articleId) {
    return myNcApi
      .get(`/api/articles/${articleId}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  export function getCommentsByArticleId(articleId) {
    return myNcApi
      .get(`/api/articles/${articleId}/comments`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.error(err);
      });
  }
  export function patchArticleVote(articleId, updateVote) {
    return myNcApi
      .patch(`/api/articles/${articleId}`, { inc_votes: updateVote })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      });
  }
  export function postComment(articleId, username, body) {
    return myNcApi
      .post(`/api/articles/${articleId}/comments`, {username, body})
      .then((response) => {
        return response.data.comment
      })
      .catch((err) => {
        console.log(err)
      })
  }

  export function deleteComment(commentId) {
    return myNcApi
      .delete(`/api/comments/${commentId}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.error(err);
      });
  }