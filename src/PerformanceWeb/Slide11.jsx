import SlideBase from '../components/SlideBase'
import '../components/SlideComponents.css'

function Slide11() {
  return (
    <SlideBase subtitle="APDEX">
      <div className="left-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-chart-line"></i></div>
            <h3 className="text-xl font-medium">Métrica de satisfação do usuário</h3>
          </div>
          <div className="bullet-point" style={{ marginLeft: '2rem' }}>
            <p>APDEX (Application Performance Index) é um padrão aberto para medir a satisfação do usuário com o tempo de resposta de aplicações web e softwares</p>
          </div>
        </div>
        <div className="topic-title" style={{ marginTop: '24px' }}>
          <div className="topic-icon"><i className="fas fa-calculator"></i></div>
          <h3 className="text-xl font-medium">Como é calculado</h3>
        </div>
        <div style={{ marginLeft: '2rem' }}>
          <p>A fórmula unifica a medição de experiência do usuário em uma única pontuação de 0 a 1:</p>
          <div className="apdex-formula">
            <p><strong>APDEX = (Satisfeitos + 0.5 × Toleráveis) / Total</strong></p>
          </div>
        </div>
        <div className="topic-title" style={{ marginTop: '24px' }}>
          <div className="topic-icon"><i className="fas fa-tools"></i></div>
          <h3 className="text-xl font-medium">Onde é usado</h3>
        </div>
        <div className="bullet-point">
          <div className="bullet-icon"><i className="fas fa-check"></i></div>
          <p>Datadog</p>
        </div>
        <div className="bullet-point">
          <div className="bullet-icon"><i className="fas fa-check"></i></div>
          <p>New Relic</p>
        </div>
        <div className="bullet-point">
          <div className="bullet-icon"><i className="fas fa-check"></i></div>
          <p>AppDynamics</p>
        </div>
        <div className="bullet-point">
          <div className="bullet-icon"><i className="fas fa-check"></i></div>
          <p>Outras ferramentas de monitoramento</p>
        </div>
      </div>
      <div className="right-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-smile"></i></div>
            <h3 className="text-xl font-medium">Categorias de satisfação</h3>
          </div>
          <div className="satisfaction-category">
            <div className="category-icon satisfied"><i className="fas fa-smile"></i></div>
            <div>
              <p><strong>Satisfatória</strong>: &lt; T</p>
              <p>Usuários completamente satisfeitos com o tempo de resposta</p>
            </div>
          </div>
          <div className="satisfaction-category">
            <div className="category-icon tolerable"><i className="fas fa-meh"></i></div>
            <div>
              <p><strong>Tolerável</strong>: &lt; 2×T</p>
              <p>Usuários percebem a lentidão, mas continuam a tarefa</p>
            </div>
          </div>
          <div className="satisfaction-category">
            <div className="category-icon frustrated"><i className="fas fa-frown"></i></div>
            <div>
              <p><strong>Frustrante</strong>: ≥ 2×T</p>
              <p>Usuários abandonam ou têm experiência negativa</p>
            </div>
          </div>
          <div className="topic-title" style={{ marginTop: '24px' }}>
            <div className="topic-icon"><i className="fas fa-flask"></i></div>
            <h3 className="text-xl font-medium">Exemplo com threshold</h3>
          </div>
          <div className="bullet-point" style={{ marginLeft: '2rem' }}>
            <p>Com T = 0.5s (threshold)</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>&lt; 0.5s → Satisfatório</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>0.5s - 1s → Tolerável</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>&gt; 1s → Frustrante</p>
          </div>
        </div>
      </div>
    </SlideBase>
  )
}

export default Slide11

