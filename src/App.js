import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import TvShow from "./Pages/ShowDetailsPage/TvShow";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/show/:id" element={<TvShow/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
