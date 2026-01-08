import { useState } from 'react';
import EcoPointCard from '../components/EcoPointCard';
import ecopointsData from '../data/ecopoints.json';
import './Home.css';

function Home() {
  const [pontos] = useState(ecopointsData);
  const [filtro, setFiltro] = useState('');

  // Obter todos os tipos de resíduos únicos
  const todosTiposResiduos = [...new Set(pontos.flatMap(p => p.tiposResiduos))];

  // Filtrar pontos
  const pontosFiltrados = filtro
    ? pontos.filter(ponto =>
        ponto.tiposResiduos.some(tipo =>
          tipo.toLowerCase().includes(filtro.toLowerCase())
        )
      )
    : pontos;

  return (
    <div className="home-container">
      <div className="home-hero">
        <h1 className="hero-title">
          <span className="hero-icon">🌲</span>
          EcoPonto
        </h1>
        <p className="hero-subtitle">
          Encontre o ponto de coleta seletiva mais próximo de você e contribua 
          para um meio ambiente mais sustentável!
        </p>
      </div>

      <div className="filters-section">
        <div className="filter-container">
          <label htmlFor="filtro" className="filter-label">
            🔍 Filtrar por tipo de resíduo:
          </label>
          <select
            id="filtro"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            className="filter-select"
          >
            <option value="">Todos os tipos</option>
            {todosTiposResiduos.map((tipo, index) => (
              <option key={index} value={tipo}>
                {tipo}
              </option>
            ))}
          </select>
        </div>
        <p className="results-count">
          {pontosFiltrados.length} {pontosFiltrados.length === 1 ? 'ponto encontrado' : 'pontos encontrados'}
        </p>
      </div>

      <div className="pontos-grid">
        {pontosFiltrados.length > 0 ? (
          pontosFiltrados.map((ponto) => (
            <EcoPointCard key={ponto.id} ponto={ponto} />
          ))
        ) : (
          <div className="no-results">
            <p>Nenhum ponto encontrado com esse filtro.</p>
            <button onClick={() => setFiltro('')} className="btn-clear-filter">
              Limpar filtro
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;

