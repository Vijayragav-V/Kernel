import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Movies from "./pages/Movies";
import Bookmarks from "./pages/Bookmarks";
import Watched from "./pages/Watched";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/bookmarks" element={<Bookmarks/>} />
        <Route path="/movies/watched" element={<Watched/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
