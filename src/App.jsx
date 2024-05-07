import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import './app.css'
import ArticleList from "./Components/ArticleList";


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
        </Routes>
      </div>
    </>
  );
}

export default App;