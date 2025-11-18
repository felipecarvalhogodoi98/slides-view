import SlideBase from '../components/SlideBase'
import '../components/SlideComponents.css'

function Slide5() {
  return (
    <SlideBase subtitle="Métricas Auxiliares">
      <div className="left-content">
        <div className="metric-card" style={{ borderLeft: '4px solid #4285F4' }}>
          <div className="metric-icon" style={{ fontSize: '2rem', marginBottom: '15px', color: '#4285F4' }}>
            <i className="fas fa-paint-brush"></i>
          </div>
          <h3 className="text-xl font-medium" style={{ color: '#4285F4' }}>FMP (First Meaningful Paint)</h3>
          <div className="bullet-point" style={{ marginLeft: '1rem' }}>
            <div className="bullet-icon"><i className="fas fa-circle"></i></div>
            <p>Primeira renderização considerada "significativa" para o usuário</p>
          </div>
          <div className="bullet-point" style={{ marginLeft: '1rem' }}>
            <div className="bullet-icon"><i className="fas fa-circle"></i></div>
            <p>Momento em que o conteúdo principal está visível e útil</p>
          </div>
          <div className="bullet-point" style={{ marginLeft: '1rem' }}>
            <div className="bullet-icon"><i className="fas fa-circle"></i></div>
            <p>Ajuda a entender quando a página parece estar pronta do ponto de vista do usuário</p>
          </div>
        </div>
        <div className="metric-card" style={{ borderLeft: '4px solid #4285F4' }}>
          <div className="metric-icon" style={{ fontSize: '2rem', marginBottom: '15px', color: '#4285F4' }}>
            <i className="fas fa-tasks"></i>
          </div>
          <h3 className="text-xl font-medium" style={{ color: '#4285F4' }}>Long Tasks</h3>
          <div className="bullet-point" style={{ marginLeft: '1rem' }}>
            <div className="bullet-icon"><i className="fas fa-circle"></i></div>
            <p>Blocos de JavaScript com duração superior a 50ms que travam a UI</p>
          </div>
          <div className="bullet-point" style={{ marginLeft: '1rem' }}>
            <div className="bullet-icon"><i className="fas fa-circle"></i></div>
            <p>Diretamente relacionada ao INP e TBT (Total Blocking Time)</p>
          </div>
          <div className="bullet-point" style={{ marginLeft: '1rem' }}>
            <div className="bullet-icon"><i className="fas fa-circle"></i></div>
            <p>Causa principal de travamentos e janelas não responsivas</p>
          </div>
          <div className="bullet-point" style={{ marginLeft: '1rem' }}>
            <div className="bullet-icon"><i className="fas fa-circle"></i></div>
            <p>Identificável através de Performance Panel no DevTools</p>
          </div>
        </div>
        <div className="metric-card" style={{ borderLeft: '4px solid #4285F4' }}>
          <div className="metric-icon" style={{ fontSize: '2rem', marginBottom: '15px', color: '#4285F4' }}>
            <i className="fas fa-bolt"></i>
          </div>
          <h3 className="text-xl font-medium" style={{ color: '#4285F4' }}>Max Potential FID</h3>
          <div className="bullet-point" style={{ marginLeft: '1rem' }}>
            <div className="bullet-icon"><i className="fas fa-circle"></i></div>
            <p>"Pior caso" possível do atraso de interação do usuário</p>
          </div>
          <div className="bullet-point" style={{ marginLeft: '1rem' }}>
            <div className="bullet-icon"><i className="fas fa-circle"></i></div>
            <p>Estima o tempo máximo que uma interação poderia ser adiada</p>
          </div>
          <div className="bullet-point" style={{ marginLeft: '1rem' }}>
            <div className="bullet-icon"><i className="fas fa-circle"></i></div>
            <p>Métrica preventiva para identificar problemas potenciais de responsividade</p>
          </div>
          <div className="bullet-point" style={{ marginLeft: '1rem' }}>
            <div className="bullet-icon"><i className="fas fa-circle"></i></div>
            <p>Útil para captar problemas que o INP médio poderia não revelar</p>
          </div>
        </div>
      </div>
    </SlideBase>
  )
}

export default Slide5

