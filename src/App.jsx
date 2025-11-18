import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PerformanceWeb from './pages/PerformanceWeb'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/performance-web" element={<PerformanceWeb />} />
      <Route path="/performance-web/*" element={<PerformanceWeb />} />
    </Routes>
  )
}

export default App

