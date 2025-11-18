import SlideBase from '../components/SlideBase'
import '../components/SlideComponents.css'

function Slide8() {
  return (
    <SlideBase subtitle="Lighthouse em CI/CD">
      <div className="left-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-question-circle"></i></div>
            <h3 className="text-xl font-medium">Por que usar?</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-shield-alt"></i></div>
            <p>Garantir performance mínima antes de deploy</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-bug"></i></div>
            <p>Evitar regressões de performance</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-history"></i></div>
            <p>Manter histórico de métricas ao longo do tempo</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-code-branch"></i></div>
            <p>Detectar problemas antes de chegarem à produção</p>
          </div>
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-cogs"></i></div>
            <h3 className="text-xl font-medium">Como implementar?</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-terminal"></i></div>
            <p>Lighthouse CI (lhci)</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>npm install -g @lhci/cli</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-project-diagram"></i></div>
            <p>Pipelines GitHub/GitLab</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Integração via GitHub Actions ou GitLab CI</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-filter"></i></div>
            <p>Threshold de aprovação/reprovação</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Definir limites mínimos para métricas críticas</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-file-alt"></i></div>
            <p>Relatório anexado no PR</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Facilita revisão de mudanças que afetam performance</p>
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-sitemap"></i></div>
            <h3 className="text-xl font-medium">Pipeline com Lighthouse</h3>
          </div>
          <div className="pipeline-flow">
            <div className="pipeline-step">
              <p><i className="fas fa-code-branch" style={{ marginRight: '8px' }}></i> Pull Request aberto</p>
            </div>
            <div className="pipeline-step">
              <p><i className="fas fa-vial" style={{ marginRight: '8px' }}></i> Build de teste</p>
            </div>
            <div className="pipeline-step success-step">
              <p><i className="fas fa-tachometer-alt" style={{ marginRight: '8px' }}></i> Lighthouse CI</p>
            </div>
            <div className="pipeline-step warning-step">
              <p><i className="fas fa-check-square" style={{ marginRight: '8px' }}></i> Validação de thresholds</p>
            </div>
            <div className="pipeline-step">
              <p><i className="fas fa-comment" style={{ marginRight: '8px' }}></i> Feedback no PR</p>
            </div>
            <div className="pipeline-step success-step">
              <p><i className="fas fa-check-circle" style={{ marginRight: '8px' }}></i> Aprovação/Rejeição</p>
            </div>
          </div>
          <div style={{ marginTop: '16px', backgroundColor: '#e8f0fe', padding: '12px', borderRadius: '8px', border: '1px solid #4285F4' }}>
            <p style={{ textAlign: 'center', fontSize: '0.875rem' }}>
              <i className="fas fa-info-circle" style={{ color: '#4285F4', marginRight: '4px' }}></i>
              {' '}Configure thresholds no arquivo <code>lighthouserc.js</code> para definir limites mínimos de aprovação
            </p>
          </div>
        </div>
      </div>
    </SlideBase>
  )
}

export default Slide8

