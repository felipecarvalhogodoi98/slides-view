import SlideBase from '../components/SlideBase'
import '../components/SlideComponents.css'
import './Slide4.css'

function Slide4() {
  return (
    <SlideBase title="Testes de Software: Garantindo Qualidade, Confiabilidade e Segurança" subtitle="Pirâmide de Testes">
      <div className="left-content">
        <div className="pyramid-container">
          <div className="pyramid-layer e2e">E2E</div>
          <div className="pyramid-layer integration">Integration</div>
          <div className="pyramid-layer unit">Unit</div>
        </div>
        <div className="topic-section" style={{ marginTop: '30px', textAlign: 'center' }}>
          <div className="topic-title" style={{ justifyContent: 'center' }}>
            <div className="topic-icon"><i className="fas fa-info-circle"></i></div>
            <h3 className="text-xl font-medium">Princípio</h3>
          </div>
          <p style={{ fontSize: '1rem', color: '#666', marginTop: '10px' }}>
            Mais testes na base (Unit), menos no topo (E2E)
          </p>
        </div>
        <div className="topic-section" style={{ marginTop: '30px', textAlign: 'center' }}>
          <div className="topic-title" style={{ justifyContent: 'center' }}>
            <div className="topic-icon"><i className="fas fa-chart-pie"></i></div>
            <h3 className="text-xl font-medium">Estratégia 70-20-10</h3>
          </div>
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <span style={{ fontWeight: 'bold', color: '#81c784', fontSize: '1.1rem' }}>70%</span>
              <span style={{ fontSize: '0.95rem' }}>Unit Tests</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <span style={{ fontWeight: 'bold', color: '#42a5f5', fontSize: '1.1rem' }}>20%</span>
              <span style={{ fontSize: '0.95rem' }}>Integration Tests</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <span style={{ fontWeight: 'bold', color: '#7e57c2', fontSize: '1.1rem' }}>10%</span>
              <span style={{ fontSize: '0.95rem' }}>E2E Tests</span>
            </div>
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon" style={{ color: '#7e57c2' }}><i className="fas fa-sitemap"></i></div>
            <h3 className="text-xl font-medium">E2E Tests</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Simulam o uso real do sistema</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Mais lentos e caros</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p><strong>Menos testes</strong> - apenas fluxos críticos</p>
          </div>
        </div>
        <div className="topic-section" style={{ marginTop: '24px' }}>
          <div className="topic-title">
            <div className="topic-icon" style={{ color: '#42a5f5' }}><i className="fas fa-puzzle-piece"></i></div>
            <h3 className="text-xl font-medium">Integration Tests</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Testam como módulos trabalham juntos</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Velocidade média</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p><strong>Quantidade moderada</strong></p>
          </div>
        </div>
        <div className="topic-section" style={{ marginTop: '24px' }}>
          <div className="topic-title">
            <div className="topic-icon" style={{ color: '#81c784' }}><i className="fas fa-cube"></i></div>
            <h3 className="text-xl font-medium">Unit Tests</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Testam funções/componentes isolados</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Rápidos e baratos</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p><strong>Maior quantidade</strong> - base da pirâmide</p>
          </div>
        </div>
      </div>
    </SlideBase>
  )
}

export default Slide4

