import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Anime from "./Components/Anime/Anime";
import Manga from "./Components/Manga/Manga";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="anime" element={<Anime />} />
          <Route path="mangas" element={<Manga />} />
          {/* <Route path="*" element={<Home />} /> fazer o Notfound */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
