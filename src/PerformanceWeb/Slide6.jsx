import SlideBase from '../components/SlideBase'
import '../components/SlideComponents.css'

function Slide6() {
  return (
    <SlideBase subtitle="Dicas Práticas para Melhorar Web Vitals">
      <div className="left-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-hourglass-half"></i></div>
            <h3 className="text-xl font-medium">
              LCP (Largest Contentful Paint) <span className="metric-badge lcp-badge">≤ 2.5s</span>
            </h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-image"></i></div>
            <p>Compressão de imagens e uso de formatos modernos (WebP, AVIF)</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Redução de 25-35% no tamanho sem perda perceptível de qualidade</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-bolt"></i></div>
            <p>Carregar imagens críticas com <code>priority</code> / <code>preload</code></p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p><code>&lt;link rel="preload" href="logo.png" as="image"&gt;</code></p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-server"></i></div>
            <p>Usar CDN para entrega mais rápida de assets</p>
          </div>
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-arrows-alt"></i></div>
            <h3 className="text-xl font-medium">
              CLS (Cumulative Layout Shift) <span className="metric-badge cls-badge">≤ 0.1</span>
            </h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-ruler-combined"></i></div>
            <p>Sempre declarar <code>width</code>/<code>height</code> em imagens</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Previne reflow da página quando a imagem carrega</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-ad"></i></div>
            <p>Reservar espaço para ads e iframes</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-code"></i></div>
            <p>Evitar injeção de conteúdo sem animação/transição</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Use <code>transform</code> em vez de alterar dimensões diretamente</p>
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-hand-pointer"></i></div>
            <h3 className="text-xl font-medium">
              INP (Interaction to Next Paint) <span className="metric-badge inp-badge">≤ 200ms</span>
            </h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-tasks"></i></div>
            <p>Evitar long tasks (blocos de JS &gt; 50ms)</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Dividir tarefas grandes com <code>setTimeout</code> ou <code>requestIdleCallback</code></p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-puzzle-piece"></i></div>
            <p>Code-splitting e lazy load</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p><code>import('module').then(module =&gt; {})</code></p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-stopwatch"></i></div>
            <p>Debounce/throttle em eventos</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Especialmente em <code>scroll</code>, <code>resize</code> e <code>input</code></p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-broom"></i></div>
            <p>Remover JS inútil (tree shaking)</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Redução significativa no bundle final</p>
          </div>
        </div>
      </div>
    </SlideBase>
  )
}

export default Slide6

