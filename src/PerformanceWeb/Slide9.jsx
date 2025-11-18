import SlideBase from '../components/SlideBase'
import '../components/SlideComponents.css'

function Slide9() {
  return (
    <SlideBase subtitle="Testes E2E, Cypress & Performance">
      <div className="left-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-exclamation-triangle"></i></div>
            <h3 className="text-xl font-medium">Limitações do Cypress para performance</h3>
          </div>
          <div className="bullet-point" style={{ marginLeft: '2rem' }}>
            <p>Cypress não foi projetado primariamente para testes de performance</p>
          </div>
          <div className="note-box" style={{ marginLeft: '2rem' }}>
            <p>
              <i className="fas fa-info-circle" style={{ marginRight: '8px', color: '#4285F4' }}></i>
              {' '}Cypress é excelente para testes funcionais, mas não substitui ferramentas dedicadas de performance
            </p>
          </div>
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-check-circle"></i></div>
            <h3 className="text-xl font-medium">O que Cypress pode validar:</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-network-wired"></i></div>
            <p>TTFB via network intercept</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-code"></i></div>
            <p>Monitorar requisições XHR/Fetch e seus tempos de resposta</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-desktop"></i></div>
            <p>Comportamento da UI</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-eye"></i></div>
            <p>Validação visual de elementos críticos no viewport</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-history"></i></div>
            <p>Regressões de interação</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-mouse-pointer"></i></div>
            <p>Testar se eventos de clique, scroll e input continuam respondendo</p>
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-plug"></i></div>
            <h3 className="text-xl font-medium">Complementos úteis:</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-chart-bar"></i></div>
            <p>cypress-audit</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-lightbulb"></i></div>
            <p>Integra Lighthouse dentro dos testes</p>
          </div>
          <div className="code-block" style={{ fontSize: '0.875rem' }}>
            <p>cy.lighthouse(&#123;<br />
            &nbsp;&nbsp;performance: 80,<br />
            &nbsp;&nbsp;accessibility: 90<br />
            &#125;);</p>
          </div>
        </div>
        <div className="topic-section" style={{ marginTop: '24px' }}>
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-tachometer-alt"></i></div>
            <h3 className="text-xl font-medium">Para medir performance real:</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-code"></i></div>
            <p>Web Vitals JS Library</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Coleta métricas no ambiente do usuário</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-chart-line"></i></div>
            <p>RUM (Datadog/New Relic)</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Monitoramento real de usuários em produção</p>
          </div>
        </div>
      </div>
    </SlideBase>
  )
}

export default Slide9

