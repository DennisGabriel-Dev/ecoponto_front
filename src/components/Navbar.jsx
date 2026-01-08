import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🌳</span>
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

