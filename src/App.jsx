import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./page/Navbar";
import Home from "./page/Home";
import Main from "./page/Main";
import Home2 from "./page/Home2";
import AIVideo from "./page/AIVideo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home2" element={<Home2 />} />
        <Route path="/ai" element={<AIVideo />} />
      </Routes>
    </Router>
  );
};

export default App;
