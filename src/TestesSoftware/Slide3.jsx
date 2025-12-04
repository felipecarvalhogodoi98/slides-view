import SlideBase from '../components/SlideBase'
import '../components/SlideComponents.css'

function Slide3() {
  return (
    <SlideBase title="Testes de Software: Garantindo Qualidade, Confiabilidade e Segurança" subtitle="Tipos de Testes">
      <div className="left-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-hand-pointer"></i></div>
            <h3 className="text-xl font-medium">1. Testes Manuais</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-user"></i></div>
            <p>Executados por uma pessoa</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-search"></i></div>
            <p>Exploratório</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-eye"></i></div>
            <p>Análise visual e comportamental</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Útil para UX, usabilidade e casos de borda complexos</p>
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-robot"></i></div>
            <h3 className="text-xl font-medium">2. Testes Automatizados</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-bolt"></i></div>
            <p>Rápidos</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-redo"></i></div>
            <p>Reprodutíveis</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-infinity"></i></div>
            <p>Executados continuamente</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Ideal para regressão, integração contínua e validação rápida</p>
          </div>
        </div>
        <div className="metrics-container" style={{ marginTop: '20px' }}>
          <div className="metric-box core">
            <h4 className="font-bold text-lg" style={{ color: '#4285F4' }}>Quando usar Manual?</h4>
            <p className="text-sm mt-2">UX, casos exploratórios, validação visual</p>
          </div>
          <div className="metric-box other">
            <h4 className="font-bold text-lg" style={{ color: '#34A853' }}>Quando usar Automatizado?</h4>
            <p className="text-sm mt-2">Regressão, CI/CD, validação funcional</p>
          </div>
        </div>
      </div>
    </SlideBase>
  )
}

export default Slide3

