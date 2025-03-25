import Image from 'next/image';
import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../public/logo.png';
import { ThemeToggle } from './ThemeToggle';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      isNavbarVisible: true,
      lastScrollY: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { lastScrollY } = this.state;
    const scrollThreshold = window.innerHeight * 0.5;
    const currentScrollY = window.scrollY;
    if (currentScrollY > scrollThreshold && currentScrollY > lastScrollY) {
      this.setState({ isNavbarVisible: false });
    } else if (currentScrollY < lastScrollY) {
      this.setState({ isNavbarVisible: true });
    }
    this.setState({ lastScrollY: currentScrollY });
  };

  handleMouseEnter(name) {
    this.setState({ [name]: true });
  }

  handleMouseLeave(name) {
    this.setState({ [name]: false });
  }

  handleThemeToggle (){
    this.props.toggleTheme();
  };

  render() {
    const { show, isNavbarVisible } = this.state;
    return (
      <div>
        {isNavbarVisible && (
          <Navbar expand="lg" fixed="top" className='navbar-bg'>
            <Navbar.Brand
              href="/"
              className="d-flex justify-content-center align-items-center"
            >
              <Image
                src={logo}
                // width={100}
                // height={100}
                alt="logo"
                className="navbar-logo"
              />
              <h3 className="mt-1 ms-3 brand-title">
                Design Studio<span className="brand-color">z</span>
              </h3>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="ms-auto me-3"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="w-100 d-flex justify-content-around me-3">
                <Nav className="d-flex gap-4 align-items-center custom-nav">
                  <Nav.Link href="/" className="fw-bold">
                    Home
                  </Nav.Link>
                  <NavDropdown
                    title={<span className="fw-bold">Project</span>}
                    onMouseEnter={() => this.handleMouseEnter("show")}
                    onMouseLeave={() => this.handleMouseLeave("show")}
                    show={show}
                  >
                    {/* <NavDropdown.Item href="/architecture">
                      ARCHITECTURE
                    </NavDropdown.Item> */}
                    <NavDropdown.Item href="/interiors">
                      INTERIORS
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/land-scape">
                      LANDSCAPE
                    </NavDropdown.Item>
                  </NavDropdown>
                  <div className="btn-navbar mt-0 ms-3">
                    <a
                      href="/contact"
                      className="btn-nav-visible text-decoration-none fw-bold"
                    >
                      Contact
                    </a>
                    <a
                      href="/contact"
                      className="btn-nav-hidden text-decoration-none fw-bold"
                    >
                      Contact
                    </a>
                  </div>
                  <div className="flex flex-1 items-center justify-end space-x-2">
                    <ThemeToggle />
                  </div>
                </Nav>
              </div>
            </Navbar.Collapse>
          </Navbar>
        )}
      </div>
    );
  }
}