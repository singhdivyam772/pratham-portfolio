// App.jsx
import React from "react";
import "./index.css";

import LandingPage from "./Pages/LandingPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className=" ">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
