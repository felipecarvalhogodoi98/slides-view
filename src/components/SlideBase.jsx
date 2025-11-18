import './SlideBase.css'

function SlideBase({ title, subtitle, children }) {
  return (
    <div className="slide-container">
      <div className="slide-header">
        <h1 className="slide-main-title">Performance Web: Métricas, Monitoramento e Melhores Práticas</h1>
        {subtitle && <h2 className="slide-subtitle">{subtitle}</h2>}
      </div>
      <div className="slide-content">
        {children}
      </div>
    </div>
  )
}

export default SlideBase

