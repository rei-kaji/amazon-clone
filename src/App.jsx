import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, NavBar } from "./components";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
