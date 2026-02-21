import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Skill from "./Pages/Skill";
import Contact from "./Pages/Contact";
import Footer from "./Component/Footer";

export default function App(){
    return(
        <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/project" element={<Project/>}></Route>
            <Route path="/skill" element={<Skill/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        <Footer/>
        </BrowserRouter>
        </>
    )
}