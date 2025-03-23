import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import { Row, Col } from 'react-bootstrap';
import Carousel3D from './carousel';
import MarqueeComponent from './marquee';
import data from './data.json';

export default function Home () {
    const { home } = data;
    const [index, setIndex] = useState(0);

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % home.changingText.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [home.changingText.length]);

    return (
        <div className="home-container content-center">
            <div className="home-title d-flex flex-row justify-content-center">
                <h1 className="title-we">{home.title}</h1>
                <div key={index} className="changing-text">
                    {home.changingText[index]}
                </div>
            </div>
            <img src={home.bannerImage} alt="home-banner" className="home-banner" />
            <Row className="align-items-center">
                <Col xs={12} md={4}>
                    <div
                        data-aos="fade-up"
                        data-aos-once="false"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-out"
                        data-aos-duration="1000"
                        className="about-text"
                    >
                        <h3 className="description lh-base fw-bolder">
                            {home.about.description}
                        </h3>
                    </div>
                    <h4 className="sub-about-text lh-base">
                        {home.about.subDescription}
                    </h4>
                </Col>
                <Col xs={12} md={8} className="mt-5 mt-md-0">
                    <Carousel3D />
                </Col>
            </Row>
            <div data-aos="fade-up" data-aos-once="true">
                <img src="/LANDSCAPING/00.jpg" alt="bottom-banner" className="home-banner-bottom" />
            </div>
            <div data-aos="fade-up" data-aos-once="true" className='mt-3'>
                <h2 className="our-work mt-3">{home.ourWork.title}</h2>
                <h2 className="sub-title">
                    <span key={index} className="sub-changing-text">
                        {home.ourWork.changingText[index]}
                    </span>
                </h2>
            </div>
            <Row className="our-work-description" data-aos="fade-right" data-aos-once="true">
                <Col xs={12} md={5}>
                    <img src={home.ourWork.image} alt="work" className="our-work-image" />
                </Col>
                <Col xs={12} md={7}>
                    <div>
                        {home.ourWork.description.map((text, i) => (
                            <h3 key={i} className="min-description text-black-50">
                                {text}
                            </h3>
                        ))}
                    </div>
                    {/* <a
                        href={home.ourWork.buttonLink}
                        data-aos="fade-up"
                        data-aos-once="true"
                        className="btn-project mt-auto align-self-start mt-5"
                    >
                        {home.ourWork.buttonText}
                    </a> */}
                </Col>
            </Row>
            <MarqueeComponent />
            <div data-aos="fade-up-right" data-aos-once="true">
                <h1 className="title mt-5">{home.studioz.title}</h1>
                <hr />
                <h4 className="text-muted">{home.studioz.subtitle}</h4>
                <Row className="mt-5">
                    <Col xs={12} md={7} className="d-flex flex-column justify-content-end">
                        {home.studioz.content.map((text, i) => (
                            <h4 key={i} className="studioz-content mt-2">
                                {text}
                            </h4>
                        ))}
                    </Col>
                    <Col xs={12} md={5}>
                        <img src={home.studioz.image} alt="logo" className="desgin-image image-fluid" />
                    </Col>
                </Row>
            </div>
            <div className="fixed-image-container">
                <div className="fixed-image"></div>
                <div className="content" data-aos-once="true">
                    <h3 className="approach-subtitle">{home.approach.subtitle}</h3>
                    <h1 className="approach-title">{home.approach.title}</h1>
                    {home.approach.content.map((row, rowIndex) => (
                        <Row key={rowIndex} className="approach-description">
                            {row.map((text, colIndex) => (
                                <Col key={colIndex} xs={12} md={6}>
                                    <h5 className="approach-content lh-base">
                                        {text}
                                    </h5>
                                </Col>
                            ))}
                        </Row>
                    ))}
                </div>
            </div>
            <div className="mt-5">
                <img src={home.services.image} alt="image" width="100%" height="50%" className="service-image" />
                <div data-aos="fade-up" data-aos-once="true">
                    <h3 className="service-subtitle">{home.services.subtitle}</h3>
                    <h1 className="service-title mb-5">{home.services.title}</h1>
                    <div className="mb-5 mt-5">
                        {home.services.list.map((service, i) => (
                            <Row key={i} className="move-right mt-4">
                                <Col className="d-flex align-items-center">
                                    <h2 className="desgin-title">{service.title}</h2>
                                    <small className="service-description ms-2">{service.description}</small>
                                </Col>
                            </Row>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <img src="/images/COMMERCIAL.jpeg" alt="image" width="100%" height="100%" style={{ borderRadius: '10px' }} />
                <div>
                    <h3 className="service-subtitle">{home.clients.subtitle}</h3>
                    <h1 className="service-title">{home.clients.title}</h1>
                    <Row xs={2} md={4} className="mt-5">
                        {home.clients.logos.map((client, i) => (
                            <Col key={i} className="d-flex justify-content-center align-items-center">
                                <img src={client.image} alt={client.alt} className="client-logo" />
                            </Col>
                        ))}
                    </Row>
                    <h3 className="client-description mt-3">{home.clients.description}</h3>
                </div>
            </div>
        </div>
    );
};
