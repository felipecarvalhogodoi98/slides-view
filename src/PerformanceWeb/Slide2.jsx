import SlideBase from '../components/SlideBase'
import '../components/SlideComponents.css'

function Slide2() {
  return (
    <SlideBase subtitle="O que são Web Vitals?">
      <div className="left-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fab fa-google"></i></div>
            <h3 className="text-xl font-medium">Iniciativa do Google</h3>
          </div>
          <div className="bullet-point" style={{ marginLeft: '2rem' }}>
            <p>Conjunto de métricas padronizadas para avaliar a experiência do usuário em sites e aplicações web</p>
          </div>
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-bullseye"></i></div>
            <h3 className="text-xl font-medium">Objetivo</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Medir a qualidade <strong>real</strong> da navegação no dispositivo do usuário final</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Padronizar métricas de performance que impactam diretamente a experiência do usuário</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Incentivar práticas que melhoram a web como um todo</p>
          </div>
        </div>
        <div className="metrics-container">
          <div className="metric-box core">
            <h4 className="font-bold text-lg" style={{ color: '#4285F4' }}>Core Web Vitals</h4>
            <p>Métricas principais que afetam diretamente o SEO</p>
            <p className="text-sm mt-2">LCP, CLS, INP</p>
          </div>
          <div className="metric-box other">
            <h4 className="font-bold text-lg" style={{ color: '#34A853' }}>Outras Métricas</h4>
            <p>Medidas de carregamento e performance</p>
            <p className="text-sm mt-2">FCP, TTFB, TBT, TTI</p>
          </div>
          <div className="metric-box aux">
            <h4 className="font-bold text-lg" style={{ color: '#FBBC05' }}>Métricas Auxiliares</h4>
            <p>Diagnóstico e identificação de problemas</p>
            <p className="text-sm mt-2">FMP, Long Tasks, Max FID</p>
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="web-vitals-icon">
          <i className="fas fa-tachometer-alt"></i>
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-layer-group"></i></div>
            <h3 className="text-xl font-medium">Divisões dos Web Vitals</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-star"></i></div>
            <p><strong>Core Web Vitals</strong></p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Métricas prioritárias que impactam ranking no Google</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-cog"></i></div>
            <p><strong>Outras métricas</strong></p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Complementam medição de carregamento e performance</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-tools"></i></div>
            <p><strong>Métricas auxiliares e diagnósticas</strong></p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Ajudam a identificar causas de problemas de performance</p>
          </div>
        </div>
      </div>
    </SlideBase>
  )
}

export default Slide2

