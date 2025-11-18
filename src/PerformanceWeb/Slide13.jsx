import SlideBase from '../components/SlideBase'
import '../components/SlideComponents.css'

function Slide13() {
  return (
    <SlideBase subtitle="Exemplo de Fluxo">
      <div className="slide-content">
        <div className="workflow-container">
          <div className="workflow-row">
            <div className="workflow-step">
              <div className="workflow-step-icon">
                <i className="fas fa-code-branch" style={{ fontSize: '2rem' }}></i>
              </div>
              <div className="workflow-step-text">
                <p style={{ fontWeight: '700' }}>Novo PR</p>
                <p style={{ fontSize: '0.875rem' }}>Abertura de Pull Request</p>
              </div>
              <div className="workflow-note">
                <p>Código novo ou alteração</p>
              </div>
            </div>
            <div className="workflow-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="workflow-step">
              <div className="workflow-step-icon">
                <i className="fas fa-tachometer-alt" style={{ fontSize: '2rem' }}></i>
              </div>
              <div className="workflow-step-text">
                <p style={{ fontWeight: '700' }}>Lighthouse CI</p>
                <p style={{ fontSize: '0.875rem' }}>Validação automática</p>
              </div>
              <div className="workflow-note">
                <p>Verifica score de performance</p>
              </div>
            </div>
            <div className="workflow-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="workflow-step">
              <div className="workflow-step-icon">
                <i className="fas fa-check-circle" style={{ fontSize: '2rem' }}></i>
              </div>
              <div className="workflow-step-text">
                <p style={{ fontWeight: '700' }}>Merge</p>
                <p style={{ fontSize: '0.875rem' }}>PR aprovado</p>
              </div>
              <div className="workflow-note">
                <p>Score aprovado pelo CI</p>
              </div>
            </div>
            <div className="workflow-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="workflow-step">
              <div className="workflow-step-icon">
                <i className="fas fa-server" style={{ fontSize: '2rem' }}></i>
              </div>
              <div className="workflow-step-text">
                <p style={{ fontWeight: '700' }}>Deploy Staging</p>
                <p style={{ fontSize: '0.875rem' }}>Ambiente de teste</p>
              </div>
              <div className="workflow-note">
                <p>Versão pré-produção</p>
              </div>
            </div>
          </div>
          <div className="workflow-row">
            <div className="workflow-step">
              <div className="workflow-step-icon">
                <i className="fas fa-vial" style={{ fontSize: '2rem' }}></i>
              </div>
              <div className="workflow-step-text">
                <p style={{ fontWeight: '700' }}>Testes E2E</p>
                {/* <p style={{ fontSize: '0.875rem' }}>Cypress</p> */}
              </div>
              <div className="workflow-note">
                <p>Validação de funcionalidades</p>
              </div>
            </div>
            <div className="workflow-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="workflow-step">
              <div className="workflow-step-icon">
                <i className="fas fa-rocket" style={{ fontSize: '2rem' }}></i>
              </div>
              <div className="workflow-step-text">
                <p style={{ fontWeight: '700' }}>Deploy Produção</p>
                <p style={{ fontSize: '0.875rem' }}>Ambiente final</p>
              </div>
              <div className="workflow-note">
                <p>Lançamento ao usuário</p>
              </div>
            </div>
            <div className="workflow-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="workflow-step">
              <div className="workflow-step-icon">
                <i className="fas fa-chart-line" style={{ fontSize: '2rem' }}></i>
              </div>
              <div className="workflow-step-text">
                <p style={{ fontWeight: '700' }}>RUM</p>
                <p style={{ fontSize: '0.875rem' }}>Real User Monitoring</p>
              </div>
              <div className="workflow-note">
                <p>Captura Web Vitals reais</p>
              </div>
            </div>
            <div className="workflow-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="workflow-step">
              <div className="workflow-step-icon">
                <i className="fas fa-bell" style={{ fontSize: '2rem' }}></i>
              </div>
              <div className="workflow-step-text">
                <p style={{ fontWeight: '700' }}>Alertas</p>
                <p style={{ fontSize: '0.875rem' }}>Detecção automática</p>
              </div>
              <div className="workflow-note">
                <p>Se INP &gt; 200ms ou TTFB alto</p>
              </div>
            </div>
          </div>
          <div className="workflow-note-box">
            <p style={{ textAlign: 'center', fontSize: '1.125rem', fontWeight: '500', color: '#1a73e8' }}>
              <i className="fas fa-info-circle" style={{ marginRight: '8px' }}></i>
              {' '}Durante todo o processo, o APM (Application Performance Monitoring) monitora continuamente as APIs e backend, complementando os dados de frontend do RUM
            </p>
          </div>
        </div>
      </div>
    </SlideBase>
  )
}

export default Slide13

