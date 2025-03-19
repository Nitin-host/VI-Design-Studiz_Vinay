import React, { Component } from 'react';
import { Instagram } from 'lucide-react';
import { Row, Col } from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return (
            <footer className='footer-container text-center bg-light mt-5'>
                <Row className="justify-content-center">
                    <Col md={3} className="mb-3">
                        <ul className="list-unstyled">
                            <li className="footer-item"><a href="/" className="footer-link">Home</a></li>
                            <li className="footer-item"><a href='/contact' className="footer-link">Contact</a></li>
                        </ul>
                    </Col>
                    <Col md={3} className="mb-3">
                        <ul className="list-unstyled">
                            <li className="footer-item"><a href='/project' className="footer-link">Project</a></li>
                            <li className="footer-item"><a href='/architecture' className="footer-link">Architecture</a></li>
                            <li className="footer-item"><a href='/interiors' className="footer-link">Interior</a></li>
                            <li className="footer-item"><a href='/land-scape' className="footer-link">Landscape</a></li>
                        </ul>
                    </Col>
                    <Col md={3} className="mb-3">
                        <h3 className="footer-heading text-black-50">Follow us</h3>
                        <div className="d-flex justify-content-center align-items-center mt-2">
                            <a
                                href='https://www.instagram.com/the_vi_designs?igsh=OXFuNmMxaHBqOXV1'
                                target="_blank"
                                rel="noopener noreferrer"
                                className="me-3"
                            >
                                <Instagram color='black' size={40} />
                            </a>
                            <a
                                href='https://wa.me/918143233330'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src='/whatsapp.svg' alt='whats-app-logo' style={{ width: '40px' }} />
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row className='bg-colour'>
                    <h5 className='footer-end'>Copyright © 2025 VI Desgin Studioz. All Rights Reserved</h5>
                </Row>
            </footer>
        );
    }
}
