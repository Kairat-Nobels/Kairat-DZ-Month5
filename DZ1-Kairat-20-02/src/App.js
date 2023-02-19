import {BrowserRouter,Routes, Route} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";
import {LoginPage} from "./pages/loginPage/LoginPage";
import Layout from "./components/hoc/Layout";
import NewsPage from "./pages/newsPage/NewsPage";

function App() {
    return (
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<Layout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path="about" element={<AboutPage/>}/>
                    <Route path="portfolio" element={<PortfolioPage />} />
                    <Route path="newspage" element={<NewsPage />} />
                    
               </Route>

               <Route path="login" element={<LoginPage/>}/>
           </Routes>
       </BrowserRouter>
    );
}

export default App;
