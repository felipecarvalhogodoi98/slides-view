import { useState, useEffect } from 'react'
import './SlideViewer.css'

function SlideViewer({ slides }) {
  // Inicializar com o slide da URL ou 0
  const getInitialSlide = () => {
    const params = new URLSearchParams(globalThis.location.search)
    const slideParam = params.get('slide')
    if (slideParam) {
      const slideIndex = Number.parseInt(slideParam, 10) - 1 // slide=1 significa índice 0
      if (slideIndex >= 0 && slideIndex < slides.length) {
        return slideIndex
      }
    }
    return 0
  }

  const [currentSlide, setCurrentSlide] = useState(getInitialSlide)

  // Atualizar URL quando o slide mudar
  useEffect(() => {
    const newUrl = new URL(globalThis.location.href)
    newUrl.searchParams.set('slide', String(currentSlide + 1))
    globalThis.history.pushState({ slide: currentSlide }, '', newUrl.toString())
  }, [currentSlide])

  // Escutar mudanças na URL (navegação do browser)
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(globalThis.location.search)
      const slideParam = params.get('slide')
      if (slideParam) {
        const slideIndex = Number.parseInt(slideParam, 10) - 1
        if (slideIndex >= 0 && slideIndex < slides.length) {
          setCurrentSlide(slideIndex)
        }
      } else {
        setCurrentSlide(0)
      }
    }

    globalThis.addEventListener('popstate', handlePopState)
    return () => globalThis.removeEventListener('popstate', handlePopState)
  }, [slides.length])

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const goToSlide = (index) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index)
    }
  }

  // Navegação com teclado
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        prevSlide()
      } else if (e.key === 'Home') {
        e.preventDefault()
        goToSlide(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        goToSlide(slides.length - 1)
      }
    }

    globalThis.addEventListener('keydown', handleKeyPress)
    return () => globalThis.removeEventListener('keydown', handleKeyPress)
  }, [currentSlide, slides.length])

  const CurrentSlideComponent = slides[currentSlide]

  return (
    <div className="slide-viewer">
      <div className="slide-container">
        {CurrentSlideComponent && <CurrentSlideComponent />}
      </div>

      {/* Controles de navegação */}
      <div className="slide-controls">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="nav-button prev-button"
          aria-label="Slide anterior"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="slide-indicator">
          <span className="slide-number">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="nav-button next-button"
          aria-label="Próximo slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Indicador de progresso */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Miniaturas (opcional - pode ser expandido depois) */}
      <div className="slide-thumbnails">
        {slides.map((SlideComponent, index) => (
          <button
            key={`slide-${index}`}
            onClick={() => goToSlide(index)}
            className={`thumbnail ${index === currentSlide ? 'active' : ''}`}
            aria-label={`Ir para slide ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SlideViewer

