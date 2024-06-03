import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Home2 from "./Components/Home2";

function App() {

  return (
    <>
      <Navbar/>    
      <div className="flex justify-center align-center">
      <Home/>
      </div>
    </>
  )
}

export default App
