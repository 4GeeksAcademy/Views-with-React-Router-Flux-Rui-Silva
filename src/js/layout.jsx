import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/home.jsx";
import AboutUs from "./views/about.jsx";
import Services from "./views/services.jsx";
import Contact from "./views/contact.jsx";
import NoPage from "./views/nopage.jsx";

const Layout = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Home />} path="/home" />
                    <Route element={<AboutUs />} path="/about" />
                    <Route element={<Services />} path="/services" />
                    <Route element={<Contact />} path="/contact" />
                    <Route element={<NoPage />} path="*" />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Layout;