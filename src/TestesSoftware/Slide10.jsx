import SlideBase from '../components/SlideBase'
import '../components/SlideComponents.css'

function Slide10() {
  return (
    <SlideBase title="Testes de Software: Garantindo Qualidade, Confiabilidade e Segurança" subtitle="Métricas Importantes">
      <div className="left-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-chart-pie"></i></div>
            <h3 className="text-xl font-medium">Cobertura (não é objetivo)</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-percentage"></i></div>
            <p>Alta cobertura não garante qualidade</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Mas baixa cobertura indica risco</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Use como métrica, não como meta absoluta</p>
          </div>
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-clock"></i></div>
            <h3 className="text-xl font-medium">Tempo de execução</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Testes devem ser rápidos para feedback rápido</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Meta: suite completa em menos de 5 minutos</p>
          </div>
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-exclamation-triangle"></i></div>
            <h3 className="text-xl font-medium">Flakiness</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Testes que às vezes passam, às vezes falham</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Indicam problemas de timing ou dependências</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Meta: 0% de flakiness</p>
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-bug"></i></div>
            <h3 className="text-xl font-medium">Bugs pós-deploy</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Métrica de qualidade dos testes</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Bugs em produção indicam gaps nos testes</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Use para identificar áreas que precisam de mais testes</p>
          </div>
        </div>
        <div className="topic-section" style={{ marginTop: '24px' }}>
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-chart-line"></i></div>
            <h3 className="text-xl font-medium">Outras Métricas</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check-circle"></i></div>
            <p>Taxa de sucesso dos testes</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check-circle"></i></div>
            <p>Tempo médio para corrigir testes quebrados</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check-circle"></i></div>
            <p>Taxa de detecção de bugs antes do deploy</p>
          </div>
        </div>
      </div>
    </SlideBase>
  )
}

export default Slide10
