import Image from "next/image";
import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
} from "reactstrap";
import logo from "../../public/logo.png";
import { ThemeToggle } from "./ThemeToggle";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
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

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen, isNavbarVisible } = this.state;
    return (
      <div>
        {isNavbarVisible && (
          <Navbar expand="lg" fixed="top" className="custom-nav w-100 py-1">
            <NavbarBrand href="/" className="d-flex align-items-center">
              <Row className="m-0">
                <Col xs="auto" className="p-0">
                  <Image src={logo} alt="logo" className="navbar-logo" />
                </Col>
                <Col className="p-0 ps-2 d-flex align-item-center">
                  <h3 className="m-0 mt-2 brand-title">
                    Design Studio<span className="brand-color">z</span>
                  </h3>
                </Col>
              </Row>
            </NavbarBrand>
            <NavbarToggler
              onClick={this.toggle}
              className="ms-auto me-3 custom-toggler"
            />
            <Collapse isOpen={isOpen} navbar>
              <Nav
                className="mx-auto d-flexflex-column flex-lg-row align-items-lg-center"
                navbar
              >
                <NavItem>
                  <NavLink href="/" className="fw-bold">
                    Home
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown
                  nav
                  inNavbar
                  onMouseEnter={(e) => e.currentTarget.classList.add("show")}
                  onMouseLeave={(e) => e.currentTarget.classList.remove("show")}
                >
                  <DropdownToggle nav caret className="fw-bold">
                    Projects
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="/interiors">INTERIORS</DropdownItem>
                    <DropdownItem href="/land-scape">LANDSCAPE</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <div className="btn-navbar mt-0">
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
                <NavItem className="ms-3">
                  <ThemeToggle />
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        )}
      </div>
    );
  }
}
