import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddCourse/>}/>
      </Routes>
    </Router>
  );
}

export default App;
