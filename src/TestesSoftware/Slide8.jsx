import SlideBase from '../components/SlideBase'
import CodeBlock from '../components/CodeBlock'
import '../components/SlideComponents.css'

function Slide8() {
  return (
    <SlideBase title="Testes de Software: Garantindo Qualidade, Confiabilidade e Segurança" subtitle="Testes não funcionais">
      <div className="left-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-tachometer-alt"></i></div>
            <h3 className="text-xl font-medium">Performance</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Medem tempo de resposta, throughput, latência</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-tools"></i></div>
            <p><strong>Ferramentas:</strong> JMeter, k6, Artillery</p>
          </div>
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-weight-hanging"></i></div>
            <h3 className="text-xl font-medium">Carga/Stress</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Testam o sistema sob diferentes níveis de carga</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Identificam pontos de falha e limites do sistema</p>
          </div>
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-shield-alt"></i></div>
            <h3 className="text-xl font-medium">Segurança</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Testam vulnerabilidades, autenticação, autorização</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-tools"></i></div>
            <p><strong>Ferramentas:</strong> OWASP ZAP, Burp Suite</p>
          </div>
        </div>
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-user-check"></i></div>
            <h3 className="text-xl font-medium">Usabilidade</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Avaliam a experiência do usuário</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check"></i></div>
            <p>Geralmente feitos manualmente ou com ferramentas de análise</p>
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="topic-section">
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-code"></i></div>
            <h3 className="text-xl font-medium">Exemplo (React - Performance)</h3>
          </div>
          <CodeBlock 
            code={`// Profiler para medir performance
import { Profiler } from "react";

<Profiler
  id="MeuComponente"
  onRender={(id, phase, actualDuration) => {
    console.log(id, phase, actualDuration);
  }}
>
  <MeuComponente />
</Profiler>`}
            language="javascript"
          />
        </div>
        <div className="topic-section" style={{ marginTop: '24px' }}>
          <div className="topic-title">
            <div className="topic-icon"><i className="fas fa-lightbulb"></i></div>
            <h3 className="text-xl font-medium">Quando usar?</h3>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check-circle"></i></div>
            <p>Antes de releases importantes</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check-circle"></i></div>
            <p>Para validar SLAs de performance</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check-circle"></i></div>
            <p>Em aplicações críticas de segurança</p>
          </div>
          <div className="bullet-point">
            <div className="bullet-icon"><i className="fas fa-check-circle"></i></div>
            <p>Para garantir escalabilidade</p>
          </div>
        </div>
      </div>
    </SlideBase>
  )
}

export default Slide8

