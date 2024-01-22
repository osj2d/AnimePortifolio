import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Anime from "./Components/Anime/Anime";
import Manga from "./Components/Manga/Manga";
import Search from "./Components/Search/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="anime/:id" element={<Anime />} />
          <Route path="manga/:id" element={<Manga />} />
          <Route path="search" element={<Search />} />
          {/* <Route path="*" element={<Home />} /> fazer o Notfound */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
