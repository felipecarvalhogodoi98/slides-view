import SlideBase from '../components/SlideBase'
import '../components/SlideComponents.css'

function Slide2() {
  return (
    <SlideBase title="Testes de Software: Garantindo Qualidade, Confiabilidade e Segurança" subtitle="Por que testar?">
      <div className="left-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-exclamation-triangle"></i></div>
            <h3 className="text-xl font-medium">Evita falhas em produção</h3>
          </div>
          <div className="bullet-point" style={{ marginLeft: '2rem' }}>
            <p>Problemas são detectados durante o desenvolvimento, não quando o usuário está usando</p>
          </div>
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-dollar-sign"></i></div>
            <h3 className="text-xl font-medium">Reduz custos a longo prazo</h3>
          </div>
          <div className="bullet-point" style={{ marginLeft: '2rem' }}>
            <p>Corrigir bugs em produção é muito mais caro do que durante o desenvolvimento</p>
          </div>
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-heart"></i></div>
            <h3 className="text-xl font-medium">Aumenta confiança no código</h3>
          </div>
          <div className="bullet-point" style={{ marginLeft: '2rem' }}>
            <p>Desenvolvedores podem fazer mudanças com segurança, sabendo que os testes vão detectar problemas</p>
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-sync-alt"></i></div>
            <h3 className="text-xl font-medium">Ajuda na refatoração e evolução</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Permite melhorar o código sem quebrar funcionalidades existentes</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Testes servem como documentação viva do comportamento esperado</p>
          </div>
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-rocket"></i></div>
            <h3 className="text-xl font-medium">Suporte à implementação de CI/CD</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Automatização de testes permite deploy contínuo com confiança</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Feedback rápido sobre a qualidade do código</p>
          </div>
        </div>
      </div>
    </SlideBase>
  )
}

export default Slide2

