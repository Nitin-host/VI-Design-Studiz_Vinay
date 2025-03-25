import React from 'react';
import ImageGallery from './ImageGallery';
import styles from '../styles/GalleryPage.module.css';
import Image from 'next/image';


export default function GalleryPage({ title, description, imageData, banner }) {
    return (
        <div className={`{${styles.galleryContainer}} content-center`}>
            <div className={styles.slowMotionContainer}>
                <Image width={500} height={500} quality={100} src={banner} alt={title} className={styles.slowMotionImage} />
            </div>
            <h1 className={styles.galleryTitle}>{title}</h1>
            <h5 className={styles.galleryDescription}>
                {description.split('VI Design Studioz').map((part, index) => (
                    <React.Fragment key={index}>
                        {part}
                        {index < description.split('VI Design Studioz').length - 1 && (
                            <span className={styles.designSpace}>
                                <br /> VI Design Studio
                                <span className={styles.brandColor}>z</span>
                            </span>
                        )}
                    </React.Fragment>
                ))}
            </h5>
            <div className="mt-5">
                <ImageGallery data={imageData} />
            </div>
            <h1 className={styles.visionContent}>"From vision to reality, we shape spaces that reflect you."</h1>
        </div>
    )
}