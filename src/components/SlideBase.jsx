import './SlideBase.css'

function SlideBase({ title, subtitle, children }) {
  const defaultTitle = "Performance Web: Métricas, Monitoramento e Melhores Práticas"
  const displayTitle = title || defaultTitle

  return (
    <div className="slide-container">
      <div className="slide-header">
        <h1 className="slide-main-title">{displayTitle}</h1>
        {subtitle && <h2 className="slide-subtitle">{subtitle}</h2>}
      </div>
      <div className="slide-content">
        {children}
      </div>
    </div>
  )
}

export default SlideBase

