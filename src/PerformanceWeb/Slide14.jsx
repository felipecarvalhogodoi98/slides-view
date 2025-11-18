import SlideBase from '../components/SlideBase'
import '../components/SlideComponents.css'

function Slide14() {
  return (
    <SlideBase subtitle="Conclusão">
      <div className="slide-content" style={{ flexDirection: 'column', padding: '40px', background: 'linear-gradient(to bottom, #ffffff, #f5f7fa)' }}>
        {/* <div className="summary-heading">
          <h3 style={{ fontSize: '1.5rem', fontWeight: '500' }}>Principais Takeaways</h3>
        </div> */}
        <div className="takeaways-container">
          <div className="takeaway-card">
            <div className="takeaway-icon" style={{ backgroundColor: '#4285F4' }}>
              <i className="fas fa-sync-alt"></i>
            </div>
            <div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '8px' }}>Performance é um processo contínuo</h4>
              <p>Não é uma tarefa pontual, mas um compromisso constante com a experiência do usuário e a evolução do seu produto.</p>
            </div>
          </div>
          <div className="takeaway-card">
            <div className="takeaway-icon" style={{ backgroundColor: '#EA4335' }}>
              <i className="fas fa-chart-line"></i>
            </div>
            <div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '8px' }}>Web Vitals são o padrão da indústria</h4>
              <p>LCP, CLS e INP são as métricas essenciais reconhecidas pelo Google para medir a experiência do usuário.</p>
            </div>
          </div>
          <div className="takeaway-card">
            <div className="takeaway-icon" style={{ backgroundColor: '#FBBC05' }}>
              <i className="fas fa-lightbulb"></i>
            </div>
            <div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '8px' }}>Lighthouse como ferramenta de qualidade</h4>
              <p>Integre testes de performance ao seu fluxo de CI/CD para garantir qualidade consistente.</p>
            </div>
          </div>
          <div className="takeaway-card">
            <div className="takeaway-icon" style={{ backgroundColor: '#34A853' }}>
              <i className="fas fa-eye"></i>
            </div>
            <div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '8px' }}>Observabilidade é essencial</h4>
              <p>RUM e APM proporcionam visibilidade sobre a experiência real dos usuários em produção.</p>
            </div>
          </div>
        </div>
        <div className="final-message">
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', textAlign: 'center', marginBottom: '12px' }}>Impacto nos Resultados</h4>
          <p style={{ textAlign: 'center' }}>Melhor performance = Melhor experiência do usuário + Melhor posicionamento SEO + Maior taxa de conversão</p>
        </div>
      </div>
    </SlideBase>
  )
}

export default Slide14

