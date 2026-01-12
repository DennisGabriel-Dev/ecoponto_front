import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import logo from './assets/logo.png';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/cadastro" element={<Register />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="footer-content">
            <img src={logo} alt="EcoPonto" className="footer-logo" />
            <p>
              EcoPonto - Contribuindo para um meio ambiente mais sustentável
            </p>
          </div>
          <p className="footer-note">
            Desenvolvido com ❤️ para a comunidade de Coelho Neto - MA
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
