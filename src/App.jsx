import { useEffect } from "react";
import feather from "feather-icons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Resume from './pages/Resume'
import About from "./pages/About";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
