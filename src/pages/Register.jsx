import './Register.css';

function Register() {
  // Link do Google Forms - substitua pelo link real quando criar o formulário
  const googleFormsLink = "https://forms.gle/SEU_LINK_AQUI";

  return (
    <div className="register-container">
      <div className="register-hero">
        <h1>Cadastrar Novo Ponto de Coleta</h1>
        <p className="hero-description">
          Ajude a comunidade encontrando novos pontos de coleta seletiva em Coelho Neto - MA
        </p>
      </div>

      <div className="register-content">
        <div className="info-box">
          <div className="info-icon">📝</div>
          <h2>Como cadastrar um novo ponto?</h2>
          <p>
            Para cadastrar um novo ponto de coleta seletiva, preencha o formulário do Google Forms 
            com as informações necessárias. Nossa equipe irá verificar e adicionar o ponto ao mapa.
          </p>
        </div>

        <div className="form-info">
          <h3>Informações necessárias:</h3>
          <ul className="info-list">
            <li>
              <span className="list-icon">📍</span>
              <div>
                <strong>Endereço completo</strong>
                <p>Localização exata do ponto de coleta</p>
              </div>
            </li>
            <li>
              <span className="list-icon">🗺️</span>
              <div>
                <strong>Link do Google Maps</strong>
                <p>Compartilhe o link do Google Maps do local</p>
              </div>
            </li>
            <li>
              <span className="list-icon">♻️</span>
              <div>
                <strong>Tipos de resíduos aceitos</strong>
                <p>Quais materiais podem ser descartados neste ponto</p>
              </div>
            </li>
            <li>
              <span className="list-icon">🕐</span>
              <div>
                <strong>Horário de funcionamento</strong>
                <p>Quando o ponto está disponível para receber resíduos</p>
              </div>
            </li>
            <li>
              <span className="list-icon">📞</span>
              <div>
                <strong>Contato (opcional)</strong>
                <p>Telefone ou email para mais informações</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="cta-section">
          <a
            href={googleFormsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-form"
          >
            <span>📋</span>
            Preencher Formulário de Cadastro
          </a>
          <p className="form-note">
            O formulário abrirá em uma nova aba. Após o preenchimento, aguarde a verificação 
            e o ponto será adicionado ao mapa.
          </p>
        </div>

        <div className="help-section">
          <h3>Precisa de ajuda?</h3>
          <p>
            Se você tem dúvidas sobre como obter o link do Google Maps ou como preencher o formulário, 
            siga estes passos:
          </p>
          <ol className="help-steps">
            <li>
              <strong>Encontre o local no Google Maps:</strong> Abra o Google Maps e procure pelo endereço 
              do ponto de coleta.
            </li>
            <li>
              <strong>Compartilhe o local:</strong> Clique no local no mapa, depois em "Compartilhar" e 
              escolha "Copiar link".
            </li>
            <li>
              <strong>Cole no formulário:</strong> Cole o link copiado no campo correspondente do formulário.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Register;

