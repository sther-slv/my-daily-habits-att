// src/App.jsx

import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import PaginaInicio from './pages/PaginaInicio'
import PaginaHabitos from './pages/PaginaHabitos'
import PaginaDetalhes from './pages/PaginaDetalhes'
import PaginaNaoEncontrada from './pages/PaginaNaoEncontrada'

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/"            element={<PaginaInicio />} />
        <Route path="/habitos"     element={<PaginaHabitos />} />
        <Route path="/habito/:id"  element={<PaginaDetalhes />} />
        <Route path="*"            element={<PaginaNaoEncontrada />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App