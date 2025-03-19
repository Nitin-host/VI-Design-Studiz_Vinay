import { useEffect, useState } from 'react';
import styles from '../styles/carousel.module.css';

const Carousel3D = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [screenWidth, setScreenWidth] = useState(0);

    const images = [
        '/images/image1.jpeg',
        '/images/image2.jpg',
        '/images/image3.jpeg',
        '/images/image4.jpg',
        '/images/image5.jpg',
        '/images/image6.jpg',
        '/images/image7.jpg',
        '/images/image8.jpg',
    ];

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Only run this code on the client-side
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
        if (screenWidth > 1024) return 400;
        if (screenWidth > 768) return 250;
        if (screenWidth > 480) return 200;
        return 150;
    };

    return (
        <div className={styles.carousel}>
            {images.map((image, index) => (
                <div
                    key={index}
                    className={styles.carouselItem}
                    style={{
                        transform: `rotateY(${(index - currentIndex) * 30}deg) translateZ(${getTranslateZ()}px)`,
                        opacity: index === currentIndex ? 1 : 0.2,
                        transition: 'transform 1s, opacity 1s',
                    }}
                >
                    <img src={image} alt={`Slide ${index}`} className="img-fluid" />
                </div>
            ))}
        </div>
    );
};

export default Carousel3D;