import SlideBase from '../components/SlideBase'
import CodeBlock from '../components/CodeBlock'
import '../components/SlideComponents.css'

function Slide6() {
  return (
    <SlideBase title="Testes de Software: Garantindo Qualidade, Confiabilidade e Segurança" subtitle="Testes de Integração">
      <div className="left-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-puzzle-piece"></i></div>
            <h3 className="text-xl font-medium">Características</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Verificam como componentes trabalham juntos</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Testam partes reais do sistema sem mocks (ou com poucos)</p>
          </div>
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-list"></i></div>
            <h3 className="text-xl font-medium">Exemplos</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-server"></i></div>
            <p>API + Banco de dados</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-desktop"></i></div>
            <p>Frontend + Backend fake</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-plug"></i></div>
            <p>Múltiplos serviços trabalhando juntos</p>
          </div>
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-code"></i></div>
            <h3 className="text-xl font-medium">Exemplo (React - Componente com API)</h3>
          </div>
          <CodeBlock 
            code={`// UserList.test.jsx
import { render, screen } from "@testing-library/react";
import { UserList } from "./UserList";

test("carrega e mostra os usuários", async () => {
  const fakeApi = {
    getUsers: () => Promise.resolve([
      { id: 1, name: "Felipe" }
    ]),
  };

  render(<UserList api={fakeApi} />);

  expect(await screen.findByText("Felipe")).toBeInTheDocument();
});`}
            language="jsx"
          />
        </div>
      </div>
      <div className="right-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-tools"></i></div>
            <h3 className="text-xl font-medium">Ferramentas</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fab fa-node"></i></div>
            <p><strong>Node.js:</strong> Supertest</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fab fa-python"></i></div>
            <p><strong>Python:</strong> pytest + requests</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fab fa-java"></i></div>
            <p><strong>Java:</strong> Spring Test</p>
          </div>
        </div>
        <div className="topic-section" style={{ marginTop: '24px' }}>
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-lightbulb"></i></div>
            <h3 className="text-xl font-medium">Quando usar?</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check-circle"></i></div>
            <p>Validar comunicação entre módulos</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check-circle"></i></div>
            <p>Testar fluxos que envolvem múltiplos componentes</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check-circle"></i></div>
            <p>Garantir que APIs funcionam corretamente</p>
          </div>
        </div>
      </div>
    </SlideBase>
  )
}

export default Slide6

