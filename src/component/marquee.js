import React, { Component } from 'react';
import Marquee from 'react-fast-marquee';
import styles from '../styles/marquee.module.css';
import Image from 'next/image';

export default class MarqueeComponent extends Component {
    render() {
        const images = [
            '/COMMERCAIL-INTERIORS/4.webp',
            '/COMMERCAIL-INTERIORS/PTG (4).webp',
            '/COMMERCAIL-INTERIORS/PTG (7).webp',
            '/COMMERCAIL-INTERIORS/LO1.webp',
            '/COMMERCAIL-INTERIORS/PTG (2).webp',
            '/COMMERCAIL-INTERIORS/PTG (8).webp',
            '/COMMERCAIL-INTERIORS/PTG (6).webp',
            '/images/image9.webp'
        ];

        return (
            <div className={styles.marqueeContainer}>
                <Marquee speed={70} gradient={false} direction="left" autoFill delay={1}>
                    {images.map((image, index) => {
                        if (index % 3 === 0 && images[index + 1]) {
                            return (
                              <div key={index} className={styles.marqueeItem}>
                                <Image
                                  width={500}
                                  height={500}
                                  quality={100}
                                  src={images[index]}
                                  alt={`marquee-image-${index}`}
                                  className={styles.image}
                                />
                                <Image
                                  width={500}
                                  height={500}
                                  quality={100}
                                  src={images[index + 1]}
                                  alt={`marquee-image-${index + 1}`}
                                  className={styles.image}
                                />
                              </div>
                            );
                        }
                        else if (index % 3 === 2) {
                            return (
                              <div
                                key={index}
                                className={`${styles.marqueeItem} ${styles.centerItem}`}
                              >
                                <Image
                                  width={500}
                                  height={500}
                                  quality={100}
                                  src={image}
                                  alt={`marquee-image-${index}`}
                                  className={styles.largeImage}
                                />
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
