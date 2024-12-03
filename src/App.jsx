import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import Services from "./pages/Services";
import Succesful from './pages/Succesful'
import Apply from "./pages/Apply";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="country" element={<Country />} />
            <Route path="services" element={<Services />} />
            <Route path="succesful-story" element={<Succesful />} />
            <Route path="apply" element={<Apply />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
