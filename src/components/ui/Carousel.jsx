import { useState, useEffect, useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Carousel = ({ images = [], autoPlay = true, interval = 3000 }) => {
  const [current, setCurrent] = useState(0);

  // Referencias para swipe
  const startX = useRef(0);
  const isDragging = useRef(false);

  // =========================
  // AUTOPLAY
  // =========================
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [current, autoPlay]);

  // =========================
  // NAVEGACIÓN
  // =========================
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  // =========================
  // SWIPE (TOUCH)
  // =========================
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;

    const currentX = e.touches[0].clientX;
    const diff = startX.current - currentX;

    // sensibilidad
    if (diff > 50) {
      nextSlide();
      isDragging.current = false;
    } else if (diff < -50) {
      prevSlide();
      isDragging.current = false;
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  if (!images.length) return null;

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* =========================
          CONTENEDOR PRINCIPAL
      ========================= */}
      <div
        className="relative px-10 md:px-14"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* =========================
          WRAPPER DEL SLIDER
      ========================= */}
      <div className="overflow-hidden rounded-xl">
        {/* =========================
            SLIDER (ANIMACIÓN REAL)
        ========================= */}
            <div
            className="flex transition-transform duration-500 ease-in-out "
            style={{
                transform: `translateX(-${current * 100}%)`,
            }}
            >
            {images.map((img, index) => (
                <img
                key={index}
                src={img}
                alt={`slide-${index}`}
                loading="lazy" // 🚀 Lazy loading
                className="w-full h-full object-contain flex-shrink-0"
                />
            ))}
            </div>
        </div>

        {/* Botón anterior */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-black px-3 py-2 rounded hover:bg-black/10"
        >
          <IoIosArrowBack />
        </button>

        {/* Botón siguiente */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2  text-black px-3 py-2 rounded hover:bg-black/10"
        >
          <IoIosArrowForward />
        </button>
      </div>

      {/* =========================
          THUMBNAILS
      ========================= */}
      <div className="hidden md:flex gap-3 mt-4 justify-center px-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`thumb-${index}`}
            onClick={() => goToSlide(index)}
            className={`
              h-16 w-24 object-cover rounded cursor-pointer transition
              ${
                current === index
                  ? "border-2  scale-105 shadow-lg"
                  : "opacity-60 hover:opacity-100"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;