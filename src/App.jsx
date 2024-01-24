import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Anime from "./Components/Anime/Anime";
import Manga from "./Components/Manga/Manga";
import Search from "./Components/Search/Search";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <main className="appBody">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="anime/:id" element={<Anime />} />
              <Route path="manga/:id" element={<Manga />} />
              <Route path="search" element={<Search />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
