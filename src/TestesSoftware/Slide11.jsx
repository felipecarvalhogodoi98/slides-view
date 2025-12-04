import SlideBase from '../components/SlideBase'
import '../components/SlideComponents.css'

function Slide11() {
  return (
    <SlideBase title="Testes de Software: Garantindo Qualidade, Confiabilidade e Segurança" subtitle="Perguntas">
      <div className="left-content">
        <div className="topic-section" style={{ textAlign: 'center', marginTop: '100px' }}>
          <div className="web-vitals-icon" style={{ fontSize: '80px', marginBottom: '40px' }}>
            <i className="fas fa-question-circle"></i>
          </div>
          <h2 style={{ fontSize: '2.5rem', color: '#4285f4', marginBottom: '20px' }}>
            Obrigado!
          </h2>
          <p style={{ fontSize: '1.5rem', color: '#666' }}>
            Podem mandar as dúvidas.
          </p>
        </div>
      </div>
      <div className="right-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-book"></i></div>
            <h3 className="text-xl font-medium">Recursos</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-link"></i></div>
            <p>Testing Library (React)</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-link"></i></div>
            <p>Jest Documentation</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-link"></i></div>
            <p>Cypress Best Practices</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-link"></i></div>
            <p>Playwright Documentation</p>
          </div>
        </div>
        <div className="topic-section" style={{ marginTop: '24px' }}>
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-lightbulb"></i></div>
            <h3 className="text-xl font-medium">Dicas Finais</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Comece pequeno</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Teste comportamento, não implementação</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Mantenha testes simples e rápidos</p>
          </div>
        </div>
      </div>
    </SlideBase>
  )
}

export default Slide11
