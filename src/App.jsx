import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./page/Navbar";
import Home from "./page/Home";
import Main from "./page/Main";
import Home2 from "./page/Home2";
import AIVideo from "./page/AIVideo";
import AI1 from "./page/ai1";
import AI2 from "./page/ai2";
import AI3 from "./page/ai3";
import AI4 from "./page/ai4";
import Home3 from "./page/Home3";
import Home4 from "./page/Home4";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home2" element={<Home2 />} />
        <Route path="/Home3" element={<Home3 />} />
        <Route path="/Home4" element={<Home4 />} />
        {/* <Route path="/ai" element={<AIVideo />} /> */}
        <Route path="/ai1" element={<AI1 />} />
        <Route path="/ai2" element={<AI2 />} />
        <Route path="/ai3" element={<AI3 />} />
        <Route path="ai4" element={<AI4 />} />
      </Routes>
    </Router>
  );
};

export default App;
