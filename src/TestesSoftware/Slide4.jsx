import SlideBase from '../components/SlideBase'
import '../components/SlideComponents.css'

function Slide4() {
  return (
    <SlideBase title="Testes de Software: Garantindo Qualidade, Confiabilidade e Segurança" subtitle="Pirâmide de Testes">
      <div className="left-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-layer-group"></i></div>
            <h3 className="text-xl font-medium">Baseada em 3 camadas:</h3>
          </div>
        </div>
        <div className="pillar-container">
          <div className="pillar measure">
            <div className="pillar-title">
              <div className="pillar-icon"><i className="fas fa-cube"></i></div>
              <h4>Unit Tests</h4>
            </div>
            <div className="bullet-point">
              <div className="bullet-icon"><i className="fas fa-check"></i></div>
              <p>Pequenos</p>
            </div>
            <div className="bullet-point">
              <div className="bullet-icon"><i className="fas fa-check"></i></div>
              <p>Testam funções/componentes isolados</p>
            </div>
            <div className="bullet-point">
              <div className="bullet-icon"><i className="fas fa-check"></i></div>
              <p>Rápidos e baratos</p>
            </div>
          </div>
          <div className="pillar understand">
            <div className="pillar-title">
              <div className="pillar-icon"><i className="fas fa-puzzle-piece"></i></div>
              <h4>Integration Tests</h4>
            </div>
            <div className="bullet-point">
              <div className="bullet-icon"><i className="fas fa-check"></i></div>
              <p>Testam como módulos trabalham juntos</p>
            </div>
            <div className="bullet-point">
              <div className="bullet-icon"><i className="fas fa-check"></i></div>
              <p>Velocidade média</p>
            </div>
          </div>
          <div className="pillar improve">
            <div className="pillar-title">
              <div className="pillar-icon"><i className="fas fa-sitemap"></i></div>
              <h4>E2E Tests</h4>
            </div>
            <div className="bullet-point">
              <div className="bullet-icon"><i className="fas fa-check"></i></div>
              <p>Simulam o uso real do sistema</p>
            </div>
            <div className="bullet-point">
              <div className="bullet-icon"><i className="fas fa-check"></i></div>
              <p>Mais lentos e caros</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="web-vitals-icon">
          <i className="fas fa-project-diagram"></i>
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-info-circle"></i></div>
            <h3 className="text-xl font-medium">Princípio da Pirâmide</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-arrow-up"></i></div>
            <p><strong>Base (mais testes):</strong> Unitários</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Maior quantidade, menor custo</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-arrow-up"></i></div>
            <p><strong>Meio:</strong> Integração</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Quantidade moderada</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-arrow-up"></i></div>
            <p><strong>Topo (menos testes):</strong> E2E</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Menor quantidade, maior custo</p>
          </div>
        </div>
      </div>
    </SlideBase>
  )
}

export default Slide4

