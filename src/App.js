import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Articles from "./pages/Articles";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Article from "./pages/Article";
import NavBar from "./NavBar";

const App = () => {
    return (
        <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/articles" element={<Articles/>}/>
                <Route path="/articles/:articleId" element={<Article/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;