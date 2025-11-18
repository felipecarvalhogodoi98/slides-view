import SlideBase from '../components/SlideBase'
import '../components/SlideComponents.css'

function Slide1() {
  return (
    <SlideBase subtitle="Introdução">
      <div className="left-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-question-circle"></i></div>
            <h3 className="text-xl font-medium">O que é performance web?</h3>
          </div>
          <div className="bullet-point" style={{ marginLeft: '2rem' }}>
            <p>Conjunto de métricas e práticas que medem a velocidade, eficiência e responsividade de uma aplicação web</p>
          </div>
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-chart-line"></i></div>
            <h3 className="text-xl font-medium">Por que performance importa?</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-user"></i></div>
            <p>Experiência do usuário</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>53% dos usuários abandonam sites que demoram mais de 3s para carregar</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-shopping-cart"></i></div>
            <p>Conversão</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Cada 100ms de melhoria pode aumentar conversões em 1%</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-search"></i></div>
            <p>SEO (Google usa Core Web Vitals no ranking)</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Sites mais rápidos têm melhor posicionamento nos resultados de busca</p>
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-list-ul"></i></div>
            <h3 className="text-xl font-medium">O que veremos nesta apresentação:</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-tachometer-alt"></i></div>
            <p>Web Vitals</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-lightbulb"></i></div>
            <p>Lighthouse & testes</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-eye"></i></div>
            <p>Observabilidade (APM, RUM)</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-chart-bar"></i></div>
            <p>Métricas importantes</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-rocket"></i></div>
            <p>Dicas práticas</p>
          </div>
        </div>
      </div>
    </SlideBase>
  )
}

export default Slide1

