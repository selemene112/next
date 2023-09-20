'use client';
import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Form, Button, Offcanvas } from 'react-bootstrap';
import Link from 'next/link';

function NavbarLogin() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const token = localStorage.getItem('Ankasa');

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const displayNavbar = windowWidth >= 100;

  return (
    <>
      {displayNavbar && (
        <Navbar expand="lg" className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="/">
              <img src="/illustration.svg" alt="Logo" className="img-fluid" />
              Angkasa
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Collapse id="offcanvasNavbar">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Form className="d-flex">
                  <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                </Form>
                <Nav.Link href="/Pages/Auth/Login">Find Tiket</Nav.Link>
                <Nav.Link href="/Pages/Auth/Register">My Boking</Nav.Link>

                {token ? (
                  <div className=" px-lg-4 d-flex justify-content-end">
                    <MyVerticallyCenteredModal />
                    <Button variant="white" style={{ width: '4rem' }}>
                      <Link href="/profile">
                        <img
                          src={profile.photo}
                          alt=""
                          style={{
                            verticalAlign: 'middle',
                            height: '40px',
                            borderRadius: '50%',
                            marginLeft: '-5px',
                          }}
                        />
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <div className="d-lg-flex d-flex justify-content-end">
                    <Link href="/login">
                      <Button id="responsive-navbar-nav" className="btn-1 px-lg-4" variant="primary">
                        Login
                      </Button>
                    </Link>
                  </div>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}

      <Offcanvas show={!displayNavbar} placement="end" className="bg-body-tertiary">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            </Form>
            <Nav.Link href="#action1">Find Tiket</Nav.Link>
            <Nav.Link href="#action2">My Booking</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavbarLogin;
