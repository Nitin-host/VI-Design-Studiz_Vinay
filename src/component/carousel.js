import { useEffect, useState, useRef } from "react";
import styles from "../styles/carousel.module.css";
import Image from "next/image";

const Carousel3D = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const carouselRef = useRef(null);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const images = [
    "/images/image1.webp",
    "/images/image2.webp",
    "/images/image3.webp",
    "/images/image4.webp",
    "/images/image5.webp",
    "/images/image6.webp",
    "/images/image7.webp",
    "/images/image8.webp",
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

      return () => {
        clearInterval(interval);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [images.length]);

  const getTranslateZ = () => {
    if (screenWidth > 1400) return 400;
    if (screenWidth > 1200) return 300;
    if (screenWidth > 1024) return 250;
    if (screenWidth > 768) return 200;
    return 150;
  };

  // Handle touch/mouse start event
  const handleDragStart = (event) => {
    isDragging.current = true;
    startX.current = event.touches ? event.touches[0].clientX : event.clientX;
  };

  // Handle touch/mouse move event
  const handleDragMove = (event) => {
    if (!isDragging.current) return;
    const currentX = event.touches ? event.touches[0].clientX : event.clientX;
    const diff = startX.current - currentX;

    if (Math.abs(diff) > 50) {
      // Adjust sensitivity
      setCurrentIndex((prevIndex) =>
        diff > 0
          ? (prevIndex + 1) % images.length
          : (prevIndex - 1 + images.length) % images.length
      );
      isDragging.current = false;
    }
  };

  // Handle touch/mouse end event
  const handleDragEnd = () => {
    isDragging.current = false;
  };

  return (
    <div
      ref={carouselRef}
      className={styles.carousel}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={styles.carouselItem}
          style={{
            transform: `rotateY(${
              (index - currentIndex) * 45
            }deg) translateZ(${getTranslateZ()}px)`,
            opacity: index === currentIndex ? 1 : 0.5,
            zIndex: index === currentIndex ? 2 : 1,
            transition: "transform 0.8s ease-in-out, opacity 0.8s ease-in-out",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <Image
            width={500}
            height={500}
            quality={100}
            src={image}
            alt={`Slide ${index}`}
            className="img-fluid"
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel3D;
