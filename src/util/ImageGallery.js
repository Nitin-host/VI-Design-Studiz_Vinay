import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/ImageGallery.module.css';

export default function ImageGallery({ data }) {
    const router = useRouter();

    if (!data || Object.keys(data).length === 0) {
        return <p>No categories available.</p>;
    }

    return (
        <div className={styles['image-container']}>
            {Object.entries(data).map(([category, projects]) => (
                projects.length > 0 ? (
                    <div key={category || 'uncategorized'}>
                        {category ? (
                            <h2 className={styles['section-title']}>{category}</h2>
                        ) : ''}
                        <div className={styles['project-grid']}>
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className={styles['project-card']}
                                    onClick={() => project.link && router.push(project.link)}
                                    style={{ cursor: project.link ? 'pointer' : 'default' }}
                                >
                                    <div
                                        className={styles['project-image']}
                                        style={{ backgroundImage: `url(${project.image})` }}
                                    >
                                        <div className={styles['project-overlay']}>
                                            <h2>{project.title}</h2>
                                            <p>{project.subtitle}</p>
                                            {project.link && (
                                                <span className={styles['read-more']}>Read More....</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : null
            ))}
        </div>
    );
}
