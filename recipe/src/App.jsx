import React from "react";
import Navbar from "./Components/Navbar";
// import Home2 from "./Components/Home2";
import Finder from "./Components/Finder";

function App() {

  return (
    <>
      <Navbar/>    
      <div className="flex justify-center align-center">
      {/* <Home2/> */}
      </div>


      <div className="w-full flex justify-center items-center">
      <Finder/>
      </div>
    </>
  )
}

export default App
