import { useEffect } from "react";
import feather from "feather-icons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Resume from './pages/Resume'
import About from "./pages/About";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import BlogEditor from "./admin/BlogEditor";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/about" element={<About />} />

      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetails />} />

      
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/blog/new" element={<BlogEditor />} />
      <Route path="/admin/blog/edit/:id" element={<BlogEditor />} />
    </Routes>
  )
}

export default App
