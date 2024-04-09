import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "../Home/Home";
import About from "../About/About";
import App from "../App";
import Institution from "../Institution/Institution";
import University from "../University/University";
import Nav from "../Navigation/Nav";
import Blogs from "../Blogs/Blogs";
import Aboutuni from "../AboutUni/Aboutuni";
import Privacy from "../Privacy/Privacy";
import Deleteconsent from "../Deleteconsent/Deleteconsent";
const AppRoutes = () =>{
    return(
        <>
        <Routes>
            {/* <Route name="nav" path="/Nav" element={<Nav />}></Route> */}
            <Route name="home" path="/" element={<Home />} />
            <Route name="about" path="/About" element={<About />} />
            <Route name="Institution" path="/Institution" element={<Institution />}></Route>
            {/* <Route name="about" path="/About" element={<Institution />} ></Route> */}
            <Route name="university" path="/University" element={<University />}></Route>
            <Route name="blogs" path="/Blogs" element={<Blogs />} />
            <Route name="aboutuni" path="/Aboutuni" element={<Aboutuni />} />
            <Route name="privacy" path="/Privacy" element={<Privacy />}></Route>
            <Route name="deleteconsent" path="/Deleteconsent" element={<Deleteconsent />}></Route>
        </Routes>
        </>
    )
}
export default AppRoutes;