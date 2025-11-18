import SlideBase from '../components/SlideBase'
import '../components/SlideComponents.css'

function Slide4() {
  return (
    <SlideBase subtitle="Outras métricas importantes">
      <div className="slide-content" style={{ padding: '30px' }}>
        <div className="column left-column">
          <div className="metric-card">
            <div className="metric-header">
              <div className="metric-header-icon">
                <i className="fas fa-eye"></i>
              </div>
              <div>
                <h3 className="text-xl font-medium">FCP (First Contentful Paint)</h3>
                <p className="text-sm" style={{ color: '#666' }}>Primeiro elemento visível renderizado</p>
              </div>
            </div>
            <div className="metric-details">
              <p className="mb-2">Mede quando o primeiro elemento do DOM é renderizado na tela (texto, imagem, etc).</p>
              <p className="mb-3">
                <span className="font-medium">Valor ideal:</span>
                <span className="good-value-text"> ≤ 1.8s</span>
              </p>
              <ul className="details-list">
                <li><i className="fas fa-info-circle"></i><p>Primeiro indicador visual de que a página está carregando</p></li>
                <li><i className="fas fa-info-circle"></i><p>Influenciado por CSS, fontes e render-blocking JavaScript</p></li>
              </ul>
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-header">
              <div className="metric-header-icon">
                <i className="fas fa-server"></i>
              </div>
              <div>
                <h3 className="text-xl font-medium">TTFB (Time To First Byte)</h3>
                <p className="text-sm" style={{ color: '#666' }}>Tempo do servidor para responder</p>
              </div>
            </div>
            <div className="metric-details">
              <p className="mb-2">Tempo desde a solicitação até o recebimento do primeiro byte de resposta.</p>
              <p className="mb-3">
                <span className="font-medium">Valor ideal:</span>
                <span className="good-value-text"> ≤ 800ms</span>
              </p>
              <ul className="details-list">
                <li><i className="fas fa-info-circle"></i><p>Relacionado ao backend e CDN</p></li>
                <li><i className="fas fa-info-circle"></i><p>Influenciado por latência de rede, processamento do servidor e caching</p></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="column right-column">
          <div className="metric-card">
            <div className="metric-header">
              <div className="metric-header-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div>
                <h3 className="text-xl font-medium">TBT (Total Blocking Time)</h3>
                <p className="text-sm" style={{ color: '#666' }}>Tempo total bloqueado durante o carregamento</p>
              </div>
            </div>
            <div className="metric-details">
              <p className="mb-2">Total de tempo bloqueado por JavaScript durante o carregamento da página.</p>
              <p className="mb-3">
                <span className="font-medium">Valor ideal:</span>
                <span className="good-value-text"> ≤ 200ms</span>
              </p>
              <ul className="details-list">
                <li><i className="fas fa-info-circle"></i><p>Influencia diretamente o INP (responsividade)</p></li>
                <li><i className="fas fa-info-circle"></i><p>Causado por scripts pesados e long tasks (tarefas &gt; 50ms)</p></li>
              </ul>
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-header">
              <div className="metric-header-icon">
                <i className="fas fa-mouse-pointer"></i>
              </div>
              <div>
                <h3 className="text-xl font-medium">TTI (Time to Interactive)</h3>
                <p className="text-sm" style={{ color: '#666' }}>Tempo até interatividade completa</p>
              </div>
            </div>
            <div className="metric-details">
              <p className="mb-2">Mede quanto tempo até a interface estar totalmente interativa para o usuário.</p>
              <p className="mb-3">
                <span className="font-medium">Valor ideal:</span>
                <span className="good-value-text"> ≤ 3.8s</span>
              </p>
              <ul className="details-list">
                <li><i className="fas fa-info-circle"></i><p>Interface parece pronta, mas pode não responder ainda</p></li>
                <li><i className="fas fa-info-circle"></i><p>Importante para SPAs e aplicações com muita interatividade</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SlideBase>
  )
}

export default Slide4

