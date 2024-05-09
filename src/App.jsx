import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import './app.css'
import ArticleList from "./Components/ArticleList";
import IndivdualArticle from "./Components/IndivudalArticle";
import TopicCard from "./Components/TopicsCard"
import TopicPage from "./Components/TopicsPage";



function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/articles' element={ <ArticleList />}/>
          <Route path="/articles/:articleId" element={<IndivdualArticle />} />
          <Route path="/topics" element={<TopicPage />} />
          <Route path="/topics/:topicSlug" element={<TopicCard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;