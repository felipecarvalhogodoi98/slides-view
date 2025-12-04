import SlideBase from '../components/SlideBase'
import CodeBlock from '../components/CodeBlock'
import '../components/SlideComponents.css'

function Slide9() {
  return (
    <SlideBase title="Testes de Software: Garantindo Qualidade, Confiabilidade e Segurança" subtitle="Boas Práticas">
      <div className="left-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-check-circle"></i></div>
            <h3 className="text-xl font-medium">Testes curtos e independentes</h3>
          </div>
          <div className="bullet-point" style={{ marginLeft: '2rem' }}>
            <p>Cada teste deve testar uma coisa específica</p>
          </div>
          <div className="bullet-point" style={{ marginLeft: '2rem' }}>
            <p>Testes não devem depender uns dos outros</p>
          </div>
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-signature"></i></div>
            <h3 className="text-xl font-medium">Nomear claramente</h3>
          </div>
          <CodeBlock 
            code={`// ❌ Ruim
test("1", () => {});

// ✅ Bom
test("mostra mensagem de erro quando o email é inválido", () => {});`}
            language="tsx"
          />
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-ban"></i></div>
            <h3 className="text-xl font-medium">Menos mocks, mais fluxo real</h3>
          </div>
          <div className="bullet-point" style={{ marginLeft: '2rem' }}>
            <p>Prefira testar com dependências reais quando possível</p>
          </div>
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-bullseye"></i></div>
            <h3 className="text-xl font-medium">Testar o que importa</h3>
          </div>
          <div className="bullet-point" style={{ marginLeft: '2rem' }}>
            <p>Foque no comportamento, não na implementação</p>
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-list-check"></i></div>
            <h3 className="text-xl font-medium">Outras Boas Práticas</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check-circle"></i></div>
            <p>Arrange-Act-Assert (AAA) pattern</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check-circle"></i></div>
            <p>Um teste = uma asserção (quando possível)</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check-circle"></i></div>
            <p>Testes devem ser rápidos</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check-circle"></i></div>
            <p>Mantenha testes atualizados</p>
          </div>
        </div>
        <div className="topic-section" style={{ marginTop: '24px' }}>
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-lightbulb"></i></div>
            <h3 className="text-xl font-medium">Testing Library</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Foca em testar como o usuário usa</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Queries acessíveis (getByRole, getByLabelText)</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Evita detalhes de implementação</p>
          </div>
        </div>
      </div>
    </SlideBase>
  )
}

export default Slide9
