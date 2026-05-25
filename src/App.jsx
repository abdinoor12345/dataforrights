import Navbar from "./Navbar"
import LandingPage from "./pages/LandingPage"
import { StrictMode } from "react"
import { Routes, Route } from "react-router-dom"
import Article1 from "./pages/Article1"
import Article2 from "./pages/Article2" // This is where your Report view code goes!
import Article3 from "./pages/Article3"
import Article4 from "./pages/Article4"
import Article5 from "./pages/Article5"
import Report from "./pages/report"

function App() {
  return (
    <Routes>
      {/* Added /dataforrights prefix to your routes */}
      <Route path="/dataforrights" element={<LandingPage />} />
      <Route path="/dataforrights/article1" element={<Article1 />} />
      <Route path="/dataforrights/article2" element={<Article2 />} />
      <Route path="/dataforrights/article3" element={<Article3 />} />
      <Route path="/dataforrights/article4" element={<Article4 />} />
      <Route path="/dataforrights/article5" element={<Article5 />} />
      <Route path="/dataforrights/report" element={<Report />} />
    </Routes>
  )
}

export default App