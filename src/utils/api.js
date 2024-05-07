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