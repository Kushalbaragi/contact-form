import React from "react";
import Contact from "./contact";
import Overview from "./overview";

function App() {
  return (
    <>
      <div className="heading text-center bg bg-dark text-light">
        <h1>Keebot Assignment</h1>
        <p className="mb-1">By Kushal Baragi</p>
        <p className="pb-3">Email : Kushalbaragi83@gmail.com</p>
      </div>
      <Overview />
      <Contact />
    </>
  );
}

export default App;
