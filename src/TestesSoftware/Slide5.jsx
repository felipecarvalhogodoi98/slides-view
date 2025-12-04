import SlideBase from '../components/SlideBase'
import CodeBlock from '../components/CodeBlock'
import '../components/SlideComponents.css'

function Slide5() {
  return (
    <SlideBase title="Testes de Software: Garantindo Qualidade, Confiabilidade e Segurança" subtitle="Testes Unitários">
      <div className="left-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-cube"></i></div>
            <h3 className="text-xl font-medium">Características</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Focados em partes isoladas do código</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Testam funções puras</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Testam componentes isolados (React, por exemplo)</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Simulam dependências com mocks</p>
          </div>
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-code"></i></div>
            <h3 className="text-xl font-medium">Exemplo (React + Jest + Testing Library)</h3>
          </div>
          <CodeBlock 
            code={`// Button.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

test("renderiza o label corretamente", () => {
  render(<Button label="Salvar" />);
  expect(screen.getByText("Salvar")).toBeInTheDocument();
});

test("executa a função ao clicar", () => {
  const mockFn = jest.fn();
  render(<Button label="Clique" onClick={mockFn} />);
  
  fireEvent.click(screen.getByText("Clique"));
  
  expect(mockFn).toHaveBeenCalledTimes(1);
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
            <div className="bullet-icon"><i className="fab fa-js"></i></div>
            <p><strong>JavaScript:</strong> Jest, Vitest</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fab fa-python"></i></div>
            <p><strong>Python:</strong> pytest</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fab fa-java"></i></div>
            <p><strong>Java:</strong> JUnit</p>
          </div>
        </div>
        <div className="topic-section" style={{ marginTop: '24px' }}>
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-lightbulb"></i></div>
            <h3 className="text-xl font-medium">Quando usar?</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check-circle"></i></div>
            <p>Validar lógica de negócio</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check-circle"></i></div>
            <p>Testar componentes isolados</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check-circle"></i></div>
            <p>Garantir comportamento de funções</p>
          </div>
        </div>
      </div>
    </SlideBase>
  )
}

export default Slide5

