import SlideBase from '../components/SlideBase'
import '../components/SlideComponents.css'

function Slide12() {
  return (
    <SlideBase subtitle="📈 Estratégia de Performance Completa">
      <div className="slide-content" style={{ flexDirection: 'column', padding: '30px 40px' }}>
        <div style={{ marginBottom: '16px' }}>
          <p style={{ fontSize: '1.125rem' }}>Uma abordagem completa para performance web envolve quatro pilares fundamentais:</p>
        </div>
        <div className="pillar-container">
          <div className="pillar measure">
            <div className="pillar-title" style={{ color: '#4285F4' }}>
              <div className="pillar-icon"><i className="fas fa-chart-bar"></i></div>
              <h3>Measure (medir)</h3>
            </div>
            <div className="bullet-point">
              <div className="bullet-icon" style={{ color: '#4285F4' }}><i className="fas fa-check-circle"></i></div>
              <p>Lighthouse</p>
            </div>
            <div className="bullet-point">
              <div className="bullet-icon" style={{ color: '#4285F4' }}><i className="fas fa-check-circle"></i></div>
              <p>Web Vitals</p>
            </div>
            <div className="bullet-point">
              <div className="bullet-icon" style={{ color: '#4285F4' }}><i className="fas fa-check-circle"></i></div>
              <p>Observabilidade</p>
            </div>
          </div>
          <div className="pillar understand">
            <div className="pillar-title" style={{ color: '#FBBC05' }}>
              <div className="pillar-icon"><i className="fas fa-search"></i></div>
              <h3>Understand (diagnosticar)</h3>
            </div>
            <div className="bullet-point">
              <div className="bullet-icon" style={{ color: '#FBBC05' }}><i className="fas fa-check-circle"></i></div>
              <p>Long tasks</p>
            </div>
            <div className="bullet-point">
              <div className="bullet-icon" style={{ color: '#FBBC05' }}><i className="fas fa-check-circle"></i></div>
              <p>Size do bundle</p>
            </div>
            <div className="bullet-point">
              <div className="bullet-icon" style={{ color: '#FBBC05' }}><i className="fas fa-check-circle"></i></div>
              <p>Latência de backend</p>
            </div>
          </div>
          <div className="pillar improve">
            <div className="pillar-title" style={{ color: '#34A853' }}>
              <div className="pillar-icon"><i className="fas fa-rocket"></i></div>
              <h3>Improve (otimizar)</h3>
            </div>
            <div className="bullet-point">
              <div className="bullet-icon" style={{ color: '#34A853' }}><i className="fas fa-check-circle"></i></div>
              <p>Redução de JS</p>
            </div>
            <div className="bullet-point">
              <div className="bullet-icon" style={{ color: '#34A853' }}><i className="fas fa-check-circle"></i></div>
              <p>SSR/SSG</p>
            </div>
            <div className="bullet-point">
              <div className="bullet-icon" style={{ color: '#34A853' }}><i className="fas fa-check-circle"></i></div>
              <p>Cache & CDN</p>
            </div>
            <div className="bullet-point">
              <div className="bullet-icon" style={{ color: '#34A853' }}><i className="fas fa-check-circle"></i></div>
              <p>Code splitting</p>
            </div>
            <div className="bullet-point">
              <div className="bullet-icon" style={{ color: '#34A853' }}><i className="fas fa-check-circle"></i></div>
              <p>Compressão e lazy loading</p>
            </div>
          </div>
          <div className="pillar monitor">
            <div className="pillar-title" style={{ color: '#EA4335' }}>
              <div className="pillar-icon"><i className="fas fa-eye"></i></div>
              <h3>Monitor (acompanhar)</h3>
            </div>
            <div className="bullet-point">
              <div className="bullet-icon" style={{ color: '#EA4335' }}><i className="fas fa-check-circle"></i></div>
              <p>Datadog / New Relic</p>
            </div>
            <div className="bullet-point">
              <div className="bullet-icon" style={{ color: '#EA4335' }}><i className="fas fa-check-circle"></i></div>
              <p>Alertas</p>
            </div>
            <div className="bullet-point">
              <div className="bullet-icon" style={{ color: '#EA4335' }}><i className="fas fa-check-circle"></i></div>
              <p>Dashboards</p>
            </div>
          </div>
        </div>
      </div>
    </SlideBase>
  )
}

export default Slide12

