import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [mode1, setMode1] = useState("dark");

  const toggle = () => {
    if (mode === "dark") {
      setMode("light");
      setMode1("dark");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      setMode1("light");
      document.body.style.backgroundColor = "#000000";
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" about="About"/> */}

      <BrowserRouter>
        <Navbar mode={mode} mode1={mode1} toggle={toggle} />
        <Alert alert="this is alert" />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm headding="Enter the Text" mode={mode} mode1={mode1} />
              }
            ></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
