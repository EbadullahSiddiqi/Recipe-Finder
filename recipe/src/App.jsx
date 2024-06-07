import React from "react";
import Navbar from "./Components/Navbar";
import Home2 from "./Components/Home2";
import Finder from "./Components/Finder";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeCard from "./Components/RecipeCard";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/finder" element={<Finder />} />
        <Route path="/card" element={<RecipeCard />} />
      </Routes>
    </Router>
  );
}

export default App;
