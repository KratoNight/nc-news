import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getArticleList } from "../utils/api";

export default function ArticleList() {
    const [articleList, setArticleList] = useState([]);
  
    useEffect(() => {
      getArticleList().then((response) => {
        setArticleList(response.articles);
      });
    }, []);
  
    return (
      <section>
        <h2>Welcome to the Articles list!</h2>
        <ul>
          {articleList.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </section>
    );
  }