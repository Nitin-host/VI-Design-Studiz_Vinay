import React, { Component } from 'react';
import Marquee from 'react-fast-marquee';
import styles from '../styles/marquee.module.css'; // Import CSS Module

export default class MarqueeComponent extends Component {
    render() {
        const images = [
            '/COMMERCAIL-INTERIORS/4.jpg',
            '/COMMERCAIL-INTERIORS/PTG (4).jpeg',
            '/COMMERCAIL-INTERIORS/PTG (7).jpeg',
            '/COMMERCAIL-INTERIORS/LO1.jpg',
            '/COMMERCAIL-INTERIORS/PTG (2).jpeg',
            '/COMMERCAIL-INTERIORS/PTG (8).jpeg',
            '/COMMERCAIL-INTERIORS/PTG (6).jpeg',
            './images/image9.jpg'
        ];

        return (
            <div className={styles.marqueeContainer}>
                <Marquee speed={70} gradient={false} direction="left" autoFill delay={1}>
                    {images.map((image, index) => {
                        if (index % 3 === 0 && images[index + 1]) {
                            return (
                                <div key={index} className={styles.marqueeItem}>
                                    <img src={images[index]} alt={`marquee-image-${index}`} className={styles.image} />
                                    <img src={images[index + 1]} alt={`marquee-image-${index + 1}`} className={styles.image} />
                                </div>
                            );
                        }
                        else if (index % 3 === 2) {
                            return (
                                <div key={index} className={`${styles.marqueeItem} ${styles.centerItem}`}>
                                    <img src={image} alt={`marquee-image-${index}`} className={styles.largeImage} />
                                </div>
                            );
                        }
                        return null;
                    })}
                </Marquee>
            </div>
        );
    }
}
