 import Navbar from "./Navbar"
import LandingPage from "./pages/LandingPage"
import { StrictMode } from "react"
import { Routes, Route } from "react-router-dom"
import Article1 from "./pages/Article1"
import Article2 from "./pages/Article2"
import Article3 from "./pages/Article3"
import Article4 from "./pages/Article4"
import Article5 from "./pages/Article5"
 function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/article1" element={<Article1 />} />
      <Route path="/article2" element={<Article2 />} />
      <Route path="/article3" element={<Article3 />} />
      <Route path="/article4" element={<Article4 />} />
      <Route path="/article5" element={<Article5 />} />
    </Routes>
  )
}

export default App