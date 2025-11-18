import SlideViewer from '../components/SlideViewer'
import '../App.css'

// Importar todos os slides
import Slide0 from '../PerformanceWeb/Slide0'
import Slide1 from '../PerformanceWeb/Slide1'
import Slide2 from '../PerformanceWeb/Slide2'
import Slide3 from '../PerformanceWeb/Slide3'
import Slide4 from '../PerformanceWeb/Slide4'
import Slide5 from '../PerformanceWeb/Slide5'
import Slide6 from '../PerformanceWeb/Slide6'
import Slide7 from '../PerformanceWeb/Slide7'
import Slide8 from '../PerformanceWeb/Slide8'
import Slide9 from '../PerformanceWeb/Slide9'
import Slide10 from '../PerformanceWeb/Slide10'
import Slide11 from '../PerformanceWeb/Slide11'
import Slide12 from '../PerformanceWeb/Slide12'
import Slide13 from '../PerformanceWeb/Slide13'
import Slide14 from '../PerformanceWeb/Slide14'
import Slide15 from '../PerformanceWeb/Slide15'

// Lista de componentes de slides - adicione novos slides aqui
const SLIDES = [
  Slide0,  // Capa
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
  Slide15, // Encerramento
]

function PerformanceWeb() {
  return (
    <div className="app">
      <SlideViewer slides={SLIDES} />
    </div>
  )
}

export default PerformanceWeb

