import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import Home from './pages/Home.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './pages/Game';

createRoot(document.getElementById('root')!).render(


  <Router>
    <Routes>
      {/* Route for Home */}
      <Route path="/" element={<Home />} />

      {/* Route for Game */}
      <Route path="/game" element={<Game />} />
    </Routes>
  </Router>

)
