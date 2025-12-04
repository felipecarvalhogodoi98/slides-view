import SlideBase from '../components/SlideBase'
import '../components/SlideComponents.css'

function Slide1() {
  return (
    <SlideBase title="Testes de Software: Garantindo Qualidade, Confiabilidade e Segurança" subtitle="O que são testes de software?">
      <div className="left-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-question-circle"></i></div>
            <h3 className="text-xl font-medium">Definição</h3>
          </div>
          <div className="bullet-point" style={{ marginLeft: '2rem' }}>
            <p>Processo para verificar se o software funciona como esperado</p>
          </div>
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-bullseye"></i></div>
            <h3 className="text-xl font-medium">Objetivo</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Detectar defeitos antes que cheguem ao usuário</p>
          </div>
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-chart-line"></i></div>
            <h3 className="text-xl font-medium">Melhorar:</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-star"></i></div>
            <p>Qualidade</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-shield-alt"></i></div>
            <p>Confiabilidade</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-lock"></i></div>
            <p>Segurança</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-tools"></i></div>
            <p>Manutenibilidade do sistema</p>
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="web-vitals-icon">
          <i className="fas fa-vial"></i>
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-lightbulb"></i></div>
            <h3 className="text-xl font-medium">Por que testar?</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check-circle"></i></div>
            <p>Garante que o código funciona corretamente</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check-circle"></i></div>
            <p>Reduz riscos em produção</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check-circle"></i></div>
            <p>Facilita refatoração segura</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check-circle"></i></div>
            <p>Documenta o comportamento esperado</p>
          </div>
        </div>
      </div>
    </SlideBase>
  )
}

export default Slide1

