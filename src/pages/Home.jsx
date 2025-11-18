import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Apresentações</h1>
        <div className="presentations-list">
          <Link to="/performance-web" className="presentation-card">
            <div className="presentation-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            <div className="presentation-info">
              <h2>Performance Web</h2>
              <p>Métricas, Monitoramento e Melhores Práticas</p>
            </div>
            <div className="presentation-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home

