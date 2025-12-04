import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PerformanceWeb from './pages/PerformanceWeb'
import TestesSoftware from './pages/TestesSoftware'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/performance-web" element={<PerformanceWeb />} />
      <Route path="/performance-web/*" element={<PerformanceWeb />} />
      <Route path="/testes-software" element={<TestesSoftware />} />
      <Route path="/testes-software/*" element={<TestesSoftware />} />
    </Routes>
  )
}

export default App

