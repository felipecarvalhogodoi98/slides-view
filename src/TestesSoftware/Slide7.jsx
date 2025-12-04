import SlideBase from '../components/SlideBase'
import CodeBlock from '../components/CodeBlock'
import '../components/SlideComponents.css'

function Slide7() {
  return (
    <SlideBase title="Testes de Software: Garantindo Qualidade, Confiabilidade e Segurança" subtitle="Testes End-to-End">
      <div className="left-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-sitemap"></i></div>
            <h3 className="text-xl font-medium">Características</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Simulam a experiência real do usuário</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Testam fluxos completos do sistema</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Executados em ambiente similar ao de produção</p>
          </div>
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-list"></i></div>
            <h3 className="text-xl font-medium">Exemplos de Fluxos</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-sign-in-alt"></i></div>
            <p>Login completo</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-shopping-cart"></i></div>
            <p>Checkout completo</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-route"></i></div>
            <p>Fluxos completos de negócio</p>
          </div>
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-code"></i></div>
            <h3 className="text-xl font-medium">Exemplo (Cypress)</h3>
          </div>
          <CodeBlock 
            code={`// cypress/e2e/login.cy.js
describe("Fluxo de Login", () => {
  it("realiza login com sucesso", () => {
    cy.visit("/login");
    cy.get("input[name=email]").type("felipe@example.com");
    cy.get("input[name=password]").type("123456");
    cy.get("button[type=submit]").click();

    cy.contains("Bem-vindo").should("be.visible");
  });
});`}
            language="javascript"
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
            <div className="bullet-icon"><i className="fas fa-check-circle"></i></div>
            <p><strong>Cypress</strong> - Popular para React/Vue</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check-circle"></i></div>
            <p><strong>Playwright</strong> - Multi-browser, moderno</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check-circle"></i></div>
            <p><strong>Selenium</strong> - Clássico, amplamente usado</p>
          </div>
        </div>
        <div className="topic-section" style={{ marginTop: '24px' }}>
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-exclamation-triangle"></i></div>
            <h3 className="text-xl font-medium">Cuidados</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-clock"></i></div>
            <p>Mais lentos que testes unitários</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-dollar-sign"></i></div>
            <p>Mais caros de manter</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-bug"></i></div>
            <p>Podem ser mais frágeis (flaky)</p>
          </div>
          <div className="sub-bullet">
            <div className="sub-bullet-icon"><i className="fas fa-arrow-right"></i></div>
            <p>Use com moderação - apenas para fluxos críticos</p>
          </div>
        </div>
      </div>
    </SlideBase>
  )
}

export default Slide7

