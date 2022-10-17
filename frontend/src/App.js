import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import SignupEmail from "./pages/SignupEmail";
import SignupSchool from "./pages/SignupSchool";
import SignupWork from "./pages/SignupWork";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin/>}/>
        <Route path="/signup-email" element={<SignupEmail/>}/>
        <Route path="/signup-school" element={<SignupSchool/>}/>
        <Route path="/signup-work" element={<SignupWork/>}/>
      </Routes>
    </Router>
  );
}

export default App;
