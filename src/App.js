import Mainfooter from "./Components/Mainfooter";
import Navbar from "./Components/Navbar";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio"
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import GlobalStylesComp from "./StyledComponents/GlobalStylesComp";


function App() {
  return (
    <>
      
      <BrowserRouter >
      <Navbar/>
      <Routes>
       <Route index element={<Home/>} exact></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="services" element={<Services/>}></Route>
        <Route path="portfolio" element={<Portfolio/>}></Route>
        <Route path="blog" element={<Blog/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
        
      </Routes>
      <Mainfooter/>
      </BrowserRouter> 
      
      <GlobalStylesComp/>
    </>
  );
}

export default App;
