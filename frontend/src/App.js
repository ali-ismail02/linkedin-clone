import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Input from "./components/Input";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Input type={"text"} placeholder={"Email"} value={null} onChange={null}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
