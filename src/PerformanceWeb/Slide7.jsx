import SlideBase from '../components/SlideBase'
import '../components/SlideComponents.css'

function Slide7() {
  return (
    <SlideBase subtitle="Lighthouse">
      <div className="left-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-info-circle"></i></div>
            <h3 className="text-xl font-medium">O que é Lighthouse?</h3>
          </div>
          <div className="bullet-point" style={{ marginLeft: '2rem' }}>
            <p>Ferramenta de código aberto do Google para auditoria de qualidade de páginas web</p>
          </div>
          <div className="bullet-point" style={{ marginLeft: '2rem' }}>
            <p>Fornece relatórios detalhados sobre performance, acessibilidade, SEO e boas práticas</p>
          </div>
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-map-marker-alt"></i></div>
            <h3 className="text-xl font-medium">Onde usar</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-code"></i></div>
            <p>Chrome DevTools</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Aba "Lighthouse" para auditoria da página atual</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-server"></i></div>
            <p>Lighthouse CI (pipeline)</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Automação de testes de performance no CI/CD</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fab fa-google"></i></div>
            <p>Google PageSpeed Insights</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Interface web que combina Lighthouse e dados reais (CrUX)</p>
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-chart-pie"></i></div>
            <h3 className="text-xl font-medium">Métricas-chave</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-star"></i></div>
            <p>Performance score (0-100)</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Pontuação geral de performance da página</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-clock"></i></div>
            <p>TBT (Total Blocking Time)</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Tempo total que o thread principal fica bloqueado</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-tachometer-alt"></i></div>
            <p>Web Vitals</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>LCP, CLS, INP e outras métricas importantes</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-bug"></i></div>
            <p>Diagnostics</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Scripts render-blocking, tamanho do payload, recursos não otimizados, etc.</p>
          </div>
        </div>
      </div>
    </SlideBase>
  )
}

export default Slide7

