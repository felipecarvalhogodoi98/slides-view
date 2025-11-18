import SlideBase from '../components/SlideBase'
import '../components/SlideComponents.css'

function Slide3() {
  return (
    <SlideBase subtitle="Core Web Vitals">
      <div className="slide-content" style={{ padding: '30px 40px' }}>
        <div className="metric-card" style={{ borderTop: '5px solid #4285F4', margin: '0 10px' }}>
          <div className="metric-title">
            <div className="metric-icon" style={{ color: '#4285F4' }}><i className="fas fa-image"></i></div>
            <h3 className="text-xl font-medium">LCP</h3>
          </div>
          <h4 className="text-lg font-medium">Largest Contentful Paint</h4>
          <div className="metric-definition">
            <p>Mede o tempo para o maior elemento visível carregar completamente.</p>
          </div>
          <div className="good-value">
            <div className="good-icon"><i className="fas fa-check-circle"></i></div>
            <p><strong>Bom:</strong> ≤ 2.5s</p>
          </div>
          <div className="problems-section">
            <h4 className="font-medium mb-2">Problemas comuns:</h4>
            <div className="problem-item">
              <div className="problem-icon"><i className="fas fa-exclamation-triangle"></i></div>
              <p>Imagens pesadas não otimizadas</p>
            </div>
            <div className="problem-item">
              <div className="problem-icon"><i className="fas fa-exclamation-triangle"></i></div>
              <p>Carregamento lento de fontes</p>
            </div>
            <div className="problem-item">
              <div className="problem-icon"><i className="fas fa-exclamation-triangle"></i></div>
              <p>Server-side com tempo de resposta alto</p>
            </div>
          </div>
        </div>
        <div className="metric-card" style={{ borderTop: '5px solid #34A853', margin: '0 10px' }}>
          <div className="metric-title">
            <div className="metric-icon" style={{ color: '#34A853' }}><i className="fas fa-arrows-alt"></i></div>
            <h3 className="text-xl font-medium">CLS</h3>
          </div>
          <h4 className="text-lg font-medium">Cumulative Layout Shift</h4>
          <div className="metric-definition">
            <p>Mede a estabilidade visual, quantificando deslocamentos inesperados de elementos na página.</p>
          </div>
          <div className="good-value">
            <div className="good-icon"><i className="fas fa-check-circle"></i></div>
            <p><strong>Bom:</strong> ≤ 0.1</p>
          </div>
          <div className="problems-section">
            <h4 className="font-medium mb-2">Problemas comuns:</h4>
            <div className="problem-item">
              <div className="problem-icon"><i className="fas fa-exclamation-triangle"></i></div>
              <p>Imagens sem atributos width/height</p>
            </div>
            <div className="problem-item">
              <div className="problem-icon"><i className="fas fa-exclamation-triangle"></i></div>
              <p>Ads e iframes sem espaço reservado</p>
            </div>
            <div className="problem-item">
              <div className="problem-icon"><i className="fas fa-exclamation-triangle"></i></div>
              <p>Componentes que carregam tardiamente</p>
            </div>
          </div>
        </div>
        <div className="metric-card" style={{ borderTop: '5px solid #FBBC05', margin: '0 10px' }}>
          <div className="metric-title">
            <div className="metric-icon" style={{ color: '#FBBC05' }}><i className="fas fa-mouse-pointer"></i></div>
            <h3 className="text-xl font-medium">INP</h3>
          </div>
          <h4 className="text-lg font-medium">Interaction to Next Paint</h4>
          <div className="metric-definition">
            <p>Substituto moderno do FID (First Input Delay), mede a responsividade da interface ao longo de toda a sessão.</p>
          </div>
          <div className="good-value">
            <div className="good-icon"><i className="fas fa-check-circle"></i></div>
            <p><strong>Bom:</strong> ≤ 200ms</p>
          </div>
          <div className="problems-section">
            <h4 className="font-medium mb-2">Problemas comuns:</h4>
            <div className="problem-item">
              <div className="problem-icon"><i className="fas fa-exclamation-triangle"></i></div>
              <p>JavaScript pesado e não otimizado</p>
            </div>
            <div className="problem-item">
              <div className="problem-icon"><i className="fas fa-exclamation-triangle"></i></div>
              <p>Long tasks bloqueando a thread principal</p>
            </div>
            <div className="problem-item">
              <div className="problem-icon"><i className="fas fa-exclamation-triangle"></i></div>
              <p>Event handlers grandes e ineficientes</p>
            </div>
          </div>
        </div>
      </div>
    </SlideBase>
  )
}

export default Slide3

