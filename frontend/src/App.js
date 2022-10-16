import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import SignupEmail from "./components/SignupEmail";
import SignupSchool from "./components/SignupSchool";
import SignupWork from "./components/SignupWork";
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
