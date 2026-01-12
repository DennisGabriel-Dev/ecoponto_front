import './EcoPointCard.css';
import { MdLocationOn, MdAccessTime, MdPhone } from 'react-icons/md';
import mapsIcon from '../assets/maps.png';

function EcoPointCard({ ponto }) {
  return (
    <div className="ecopoint-card">

      <div className="card-header">
        <h3 className="card-title">{ponto.nome}</h3>
      </div>

      <p style={{marginBottom: '12px'}}>
        {ponto.descricao && (
              <p className="card-description">{ponto.descricao}</p>
        )}
      </p>  
      
      <div className="card-main">
        {ponto.image && (
          <div className="card-image-small">
            <img src={ponto.image} alt={ponto.nome} />
          </div>
        )}
        
        <div className="card-info">
          <p style={{display: 'flex', alignItems: 'center', gap: "10px"}}>
            <MdLocationOn />
            {ponto.endereco}
          </p>
          
          {ponto.horario && (
            <p style={{display: 'flex', alignItems: 'center', gap: "10px"}} >
             <div> <MdAccessTime /></div>
              {ponto.horario}
            </p>
          )}
          
          {ponto.phone && (
            <p style={{display: 'flex', alignItems: 'center', gap: "10px"}} >
             <div> <MdPhone /></div>
              {ponto.phone}
            </p>
          )}
        </div>

        
      </div>
      
      <div className="card-body">
        

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
            <img src={mapsIcon} alt="Maps" className="maps-icon" />
            Ver no Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}

export default EcoPointCard;

