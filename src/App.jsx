import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Tarifs from "./pages/Tarifs.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Tarifs" element={<Tarifs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
