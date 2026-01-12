import './About.css';
import { FaRecycle } from 'react-icons/fa';

function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>Sobre o Descarte Correto de Resíduos</h1>
        <p className="hero-description">
          Aprenda como descartar corretamente seus resíduos e contribua para um meio ambiente mais saudável.
        </p>
      </div>

      <div className="about-content">
        <section className="info-section">
          <div className="info-card">
            <div className="info-icon"><FaRecycle color='green' /></div>
            <h2>Por que é importante?</h2>
            <p>
              O descarte adequado de resíduos sólidos é fundamental para a preservação do meio ambiente. 
              Quando descartamos corretamente, evitamos a contaminação do solo, da água e do ar, além de 
              reduzir o impacto negativo na saúde pública e na qualidade de vida das comunidades.
            </p>
          </div>
        </section>

        <section className="tipos-section">
          <h2 className="section-title">Tipos de Resíduos</h2>
          <div className="tipos-grid">
            <div className="tipo-card">
              <div className="tipo-icon">🔋</div>
              <h3>Pilhas e Baterias</h3>
              <p>
                Contêm metais pesados como mercúrio, chumbo e cádmio que podem contaminar o solo e a água. 
                Devem ser descartadas em pontos de coleta específicos.
              </p>
            </div>

            <div className="tipo-card">
              <div className="tipo-icon">💻</div>
              <h3>Eletrônicos</h3>
              <p>
                Equipamentos eletrônicos contêm substâncias tóxicas e materiais valiosos que podem ser 
                reciclados. Nunca descarte no lixo comum.
              </p>
            </div>

            <div className="tipo-card">
              <div className="tipo-icon">🛢️</div>
              <h3>Óleo de Cozinha</h3>
              <p>
                Um litro de óleo pode contaminar até 25 mil litros de água. Quando descartado corretamente, 
                pode ser transformado em sabão, biodiesel e outros produtos.
              </p>
            </div>

            <div className="tipo-card">
              <div className="tipo-icon">📄</div>
              <h3>Papel</h3>
              <p>
                A reciclagem de papel reduz o corte de árvores e economiza água e energia. Separe papéis 
                limpos e secos para reciclagem.
              </p>
            </div>

            <div className="tipo-card">
              <div className="tipo-icon">🥤</div>
              <h3>Plástico</h3>
              <p>
                Leva centenas de anos para se decompor. A reciclagem reduz a poluição e economiza recursos 
                naturais. Lave e seque antes de descartar.
              </p>
            </div>

            <div className="tipo-card">
              <div className="tipo-icon">🍶</div>
              <h3>Vidro</h3>
              <p>
                É 100% reciclável e pode ser reutilizado infinitamente sem perder qualidade. Separe vidros 
                quebrados com cuidado para evitar acidentes.
              </p>
            </div>

            <div className="tipo-card">
              <div className="tipo-icon">🥫</div>
              <h3>Metal</h3>
              <p>
                Latas de alumínio e aço são altamente recicláveis. A reciclagem economiza energia e reduz 
                a extração de minérios.
              </p>
            </div>
          </div>
        </section>

        <section className="dicas-section">
          <h2 className="section-title">Dicas para Descarte Correto</h2>
          <div className="dicas-list">
            <div className="dica-item">
              <span className="dica-number">1</span>
              <div>
                <h4>Separe os resíduos</h4>
                <p>Mantenha recipientes separados para cada tipo de resíduo em casa.</p>
              </div>
            </div>
            <div className="dica-item">
              <span className="dica-number">2</span>
              <div>
                <h4>Lave antes de descartar</h4>
                <p>Lave embalagens plásticas e metálicas para facilitar a reciclagem.</p>
              </div>
            </div>
            <div className="dica-item">
              <span className="dica-number">3</span>
              <div>
                <h4>Verifique os pontos de coleta</h4>
                <p>Use o EcoPonto para encontrar o local mais próximo e adequado para cada tipo de resíduo.</p>
              </div>
            </div>
            <div className="dica-item">
              <span className="dica-number">4</span>
              <div>
                <h4>Reduza o consumo</h4>
                <p>A melhor forma de reduzir resíduos é consumir de forma consciente e sustentável.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="legislacao-section">
          <div className="legislacao-card">
            <h2>Política Nacional de Resíduos Sólidos</h2>
            <p>
              A Lei nº 12.305/2010 estabelece a Política Nacional de Resíduos Sólidos (PNRS), que prevê 
              a responsabilidade compartilhada pelo ciclo de vida dos produtos. Todos nós temos um papel 
              importante na gestão adequada dos resíduos.
            </p>
            <p>
              O descarte correto é um direito e um dever de todo cidadão. Ao utilizar os pontos de coleta 
              seletiva, você está contribuindo para um futuro mais sustentável.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;

