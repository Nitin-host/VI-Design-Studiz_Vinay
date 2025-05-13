import React, { Component } from "react";
import { Instagram } from "lucide-react";
import { Row, Col } from "reactstrap";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-container-with-bg text-light position-relative">
        <div className="footer-overlay"></div>
        <div className="footer-accent-line"></div>
        <Row className="justify-content-center footer-content text-center">
          <Col md={3} className="mb-4">
            <div className="footer-card">
              <h5 className="footer-heading">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="footer-item">
                  <a href="/" className="footer-link">
                    Home
                  </a>
                </li>
                <li className="footer-item">
                  <a href="/contact" className="footer-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={3} className="mb-4">
            <div className="footer-card">
              <h5 className="footer-heading">Services</h5>
              <ul className="list-unstyled">
                <li className="footer-item">
                  <a href="/interiors" className="footer-link">
                    Interior
                  </a>
                </li>
                <li className="footer-item">
                  <a href="/land-scape" className="footer-link">
                    Landscape
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={3} className="mb-4">
            <div className="footer-card">
              <h5 className="footer-heading">Follow Us</h5>
              <div className="d-flex justify-content-center align-items-center mt-3 gap-3">
                <a
                  href="https://www.instagram.com/the_vi_designs?igsh=OXFuNmMxaHBqOXV1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Instagram"
                >
                  <Instagram size={32} />
                </a>
                <a
                  href="https://wa.me/918143233330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="WhatsApp"
                >
                  <img
                    src="/whatsapp.svg"
                    alt="whats-app-logo"
                    style={{ width: "32px" }}
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom text-center py-2">
          <h6 className="footer-end mb-0">
            © 2025 VI Design Studioz. All Rights Reserved
          </h6>
        </div>
      </footer>
    );
  }
}
