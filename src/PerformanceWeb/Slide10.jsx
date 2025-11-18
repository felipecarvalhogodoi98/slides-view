import SlideBase from '../components/SlideBase'
import '../components/SlideComponents.css'

function Slide10() {
  return (
    <SlideBase subtitle="Observabilidade">
      <div className="left-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-question-circle"></i></div>
            <h3 className="text-xl font-medium">Por que é essencial?</h3>
          </div>
          <div className="bullet-point" style={{ marginLeft: '2rem' }}>
            <p><strong>Performance de laboratório ≠ performance do usuário real</strong></p>
          </div>
          <div className="bullet-point" style={{ marginLeft: '2rem' }}>
            <p>Testes em ambiente controlado não refletem a realidade do usuário final</p>
          </div>
          <div className="bullet-point" style={{ marginLeft: '2rem' }}>
            <p>Milhões de combinações de dispositivos, browsers e condições de rede</p>
          </div>
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-eye"></i></div>
            <h3 className="text-xl font-medium">Dá visibilidade de:</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-tachometer-alt"></i></div>
            <p>Latência real</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>TTFB, Web Vitals e outros tempos de resposta em condições reais</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-bug"></i></div>
            <p>Erros JS em produção</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Exceções não capturadas, promises rejeitadas, erros de API</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-globe"></i></div>
            <p>Impacto por segmentação</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>País, tipo de dispositivo, browser, versão do app, velocidade da rede</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-server"></i></div>
            <p>Gargalos de backend</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Identificação de APIs lentas e consumo de recursos excessivo</p>
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="metrics-box">
          <div className="metrics-title">
            <i className="fas fa-chart-line" style={{ marginRight: '8px' }}></i>
            {' '}Observabilidade vs Monitoramento
          </div>
          <p>Monitoramento: <span style={{ color: '#666' }}>SABER que existe um problema</span></p>
          <p>Observabilidade: <span style={{ color: '#666' }}>ENTENDER por que o problema ocorre</span></p>
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-tools"></i></div>
            <h3 className="text-xl font-medium">Ferramentas para observabilidade</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-chart-bar"></i></div>
            <p>RUM (Real User Monitoring)</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-server"></i></div>
            <p>APM (Application Performance Monitoring)</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-project-diagram"></i></div>
            <p>Tracing distribuído</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-search"></i></div>
            <p>Log aggregation</p>
          </div>
          <div className="topic-title" style={{ marginTop: '16px' }}>
            <div className="topic-icon"><i className="fas fa-lightbulb"></i></div>
            <h3 className="text-xl font-medium">Benefícios</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check-circle"></i></div>
            <p>Detecção proativa de problemas</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check-circle"></i></div>
            <p>Resposta rápida a incidentes</p>
          </div>
        </div>
      </div>
    </SlideBase>
  )
}

export default Slide10

