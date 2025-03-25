import { useEffect, useState } from 'react';
import styles from '../styles/carousel.module.css';
import Image from 'next/image';

const Carousel3D = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [screenWidth, setScreenWidth] = useState(0);

    const images = [
        '/images/image1.webp',
        '/images/image2.webp',
        '/images/image3.webp',
        '/images/image4.webp',
        '/images/image5.webp',
        '/images/image6.webp',
        '/images/image7.webp',
        '/images/image8.webp',
    ];

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setScreenWidth(window.innerWidth);
            };

            handleResize();
            window.addEventListener('resize', handleResize);

            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 3000);

            return () => {
                clearInterval(interval);
                window.removeEventListener('resize', handleResize);
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

    return (
      <div className={styles.carousel}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.carouselItem}
            style={{
              transform: `rotateY(${
                (index - currentIndex) * 30
              }deg) translateZ(${getTranslateZ()}px)`,
              opacity: index === currentIndex ? 1 : 0.3,
              zIndex: index === currentIndex ? 2 : 1,
              transition: "transform 1s ease, opacity 1s ease",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <Image width={500} height={500} quality={100} src={image} alt={`Slide ${index}`} className="img-fluid" />
          </div>
        ))}
      </div>
    );
};

export default Carousel3D;