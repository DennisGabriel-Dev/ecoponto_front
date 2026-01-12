import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="EcoPonto" className="logo-image" />
          <span className="logo-text">EcoPonto</span>
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Pontos de Coleta
            </Link>
          </li>
          <li>
            <Link 
              to="/sobre" 
              className={location.pathname === '/sobre' ? 'active' : ''}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link 
              to="/cadastro" 
              className={location.pathname === '/cadastro' ? 'active' : ''}
            >
              Cadastrar Ponto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

