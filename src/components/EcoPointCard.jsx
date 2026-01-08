import './EcoPointCard.css';

function EcoPointCard({ ponto }) {
  return (
    <div className="ecopoint-card">
      <div className="card-header">
        <h3 className="card-title">{ponto.nome}</h3>
      </div>
      
      <div className="card-body">
        <div className="card-info">
          <p className="card-address">
            <span className="info-icon">📍</span>
            {ponto.endereco}
          </p>
          
          {ponto.horario && (
            <p className="card-hours">
              <span className="info-icon">🕐</span>
              {ponto.horario}
            </p>
          )}
          
          {ponto.descricao && (
            <p className="card-description">{ponto.descricao}</p>
          )}
        </div>

        <div className="card-residuos">
          <h4 className="residuos-title">Tipos de Resíduos Aceitos:</h4>
          <div className="residuos-tags">
            {ponto.tiposResiduos.map((tipo, index) => (
              <span key={index} className="residuo-tag">
                {tipo}
              </span>
            ))}
          </div>
        </div>

        {ponto.googleMapsEmbed && (
          <div className="card-map">
            <iframe
              src={ponto.googleMapsEmbed}
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa - ${ponto.nome}`}
            ></iframe>
          </div>
        )}

        <div className="card-actions">
          <a
            href={ponto.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mapa"
          >
            Ver no Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}

export default EcoPointCard;

