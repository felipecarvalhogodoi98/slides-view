import SlideViewer from '../components/SlideViewer'
import '../App.css'

// Importar todos os slides
import Slide0 from '../TestesSoftware/Slide0'
import Slide1 from '../TestesSoftware/Slide1'
import Slide2 from '../TestesSoftware/Slide2'
import Slide3 from '../TestesSoftware/Slide3'
import Slide4 from '../TestesSoftware/Slide4'
import Slide5 from '../TestesSoftware/Slide5'
import Slide6 from '../TestesSoftware/Slide6'
import Slide7 from '../TestesSoftware/Slide7'
import Slide8 from '../TestesSoftware/Slide8'
import Slide9 from '../TestesSoftware/Slide9'
import Slide10 from '../TestesSoftware/Slide10'
import Slide11 from '../TestesSoftware/Slide11'

// Lista de componentes de slides - adicione novos slides aqui
const SLIDES = [
  Slide0,  // Capa
  Slide1,  // Testes no Frontend
  Slide2,  // Por que testar no frontend?
  Slide3,  // Testes Unitários
  Slide4,  // Pirâmide de Testes
  Slide5,  // Testes de Integração
  Slide6,  // Testes End-to-End (E2E)
  Slide7,  // TDD
  Slide8,  // Implementando testes no dia a dia
  Slide9,  // Boas Práticas
  Slide10, // Métricas Importantes
  Slide11, // Perguntas
]

function TestesSoftware() {
  return (
    <div className="app">
      <SlideViewer slides={SLIDES} />
    </div>
  )
}

export default TestesSoftware

