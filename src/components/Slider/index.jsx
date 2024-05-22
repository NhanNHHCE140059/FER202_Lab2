import 'components/Slider/Slider.css'
import { useEffect, useState } from 'react'

function Slider({ slides, title, desc }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const carouselElement = document.getElementById('carouselExample')
    carouselElement.addEventListener('slide.bs.carousel', (event) => {
      setCurrentSlide(event.to)
    })
  }, [])

  return (
    <div className="w-100">
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              key={slide.id}
            >
              <img src={slide.src} className="d-block w-100" alt={slide.alt} />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div className="d-flex flex-column text-center text-white position-absolute w-100 slide-dots-container mb-5">
          <h2 className="neapolitan-title">{title}</h2>
          <p className="neapolitan-description">{desc}</p>
        </div>
        <div className="d-flex justify-content-center position-absolute w-100 slide-dots-container mb-3">
          {slides.map((slide, dotIndex) => (
            <div
              key={slide.id}
              className={`slide-dot ${
                currentSlide === dotIndex ? 'active' : ''
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider
