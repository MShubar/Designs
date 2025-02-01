import { useState } from 'react'
import { Navbar, Nav, Offcanvas, ListGroup, Button } from 'react-bootstrap'
import {
  FaBars,
  FaSuitcaseRolling,
  FaSearch,
  FaPlane,
  FaHotel,
  FaHome,
  FaCog,
  FaCommentDots,
  FaQuestionCircle,
  FaGlobe,
  FaDollarSign,
  FaMapMarkerAlt
} from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import LightDark from './Light-Dark'

const CustomNavbar = () => {
  const [show, setShow] = useState(false)
  const location = useLocation() // Hook to get the current route

  const getLinkClass = (path) => {
    // Apply the class 'active' if the current path matches the link's path
    return location.pathname === path ? 'active-link' : ''
  }
  const getLinkClassSignup = (path) => {
    // Apply the class 'active' if the current path matches the link's path
    return location.pathname === path ? 'active-signup' : ''
  }

  return (
    <>
      <Navbar
        bg="blue"
        variant="dark"
        expand="lg"
        className="px-3 d-flex align-items-center"
      >
        <FaBars
          className="text-white fs-4 me-3"
          style={{ cursor: 'pointer' }}
          onClick={() => setShow(true)}
        />

        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 me-3">
          Logo
        </Navbar.Brand>

        <Nav className="d-flex align-items-center">
          <Nav.Link
            as={Link}
            to="/route1"
            className={`d-flex align-items-center text-light me-2 ${getLinkClass(
              '/route1'
            )}`}
          >
            Route1
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/route2"
            className={`d-flex align-items-center text-light me-2 ${getLinkClass(
              '/route2'
            )}`}
          >
            Route2
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/route3"
            className={`d-flex align-items-center text-light me-2 ${getLinkClass(
              '/route3'
            )}`}
          >
            Route3
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/route4"
            className={`d-flex align-items-center text-light me-2 ${getLinkClass(
              '/route4'
            )}`}
          >
            Route4
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/route5"
            className={`d-flex align-items-center text-light ${getLinkClass(
              '/route5'
            )}`}
          >
            Route5
          </Nav.Link>
        </Nav>

        <Nav className="ms-auto d-flex align-items-center">
          <LightDark />
          <Nav.Link
            as={Link}
            to="/signin"
            className={`d-flex align-items-center text-light ${getLinkClass(
              '/signin'
            )}`}
          >
            Sign In
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/signup"
            className={`d-flex align-items-center text-light ${getLinkClassSignup(
              '/signup'
            )}`}
          >
            <Button>Sign Up</Button>
          </Nav.Link>
        </Nav>
      </Navbar>

      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        className="bg-dark text-white"
        style={{ width: '280px' }}
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title className="fw-bold fs-4">Logo</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <ListGroup variant="flush">
            <ListGroup.Item
              as={Link}
              to="/route1"
              className={`bg-dark text-white border-0 d-flex align-items-center ${getLinkClass(
                '/route1'
              )}`}
            >
              <FaSuitcaseRolling className="me-2" /> Route1
            </ListGroup.Item>
            <ListGroup.Item
              as={Link}
              to="/route2"
              className={`bg-dark text-white border-0 d-flex align-items-center ${getLinkClass(
                '/route2'
              )}`}
            >
              <FaSearch className="me-2" /> Route2
            </ListGroup.Item>
            <ListGroup.Item
              as={Link}
              to="/route3"
              className={`bg-dark text-white border-0 d-flex align-items-center ${getLinkClass(
                '/route3'
              )}`}
            >
              <FaPlane className="me-2" /> Route3
            </ListGroup.Item>
            <ListGroup.Item
              as={Link}
              to="/route4"
              className={`bg-dark text-white border-0 d-flex align-items-center ${getLinkClass(
                '/route4'
              )}`}
            >
              <FaHotel className="me-2" /> Route4
            </ListGroup.Item>
            <ListGroup.Item
              as={Link}
              to="/route5"
              className={`bg-dark text-white border-0 d-flex align-items-center ${getLinkClass(
                '/route5'
              )}`}
            >
              <FaHome className="me-2" /> Route5
            </ListGroup.Item>

            <hr className="bg-light" />

            <ListGroup.Item className="bg-dark text-white border-0 d-flex align-items-center">
              <FaGlobe className="me-2" /> Something
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white border-0 d-flex align-items-center">
              <FaDollarSign className="me-2" /> Something
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white border-0 d-flex align-items-center">
              <FaMapMarkerAlt className="me-2" /> Something
            </ListGroup.Item>

            <hr className="bg-light" />

            <ListGroup.Item
              className="bg-dark text-white border-0 d-flex align-items-center"
              as={Link}
              to="/settings"
            >
              <FaCog className="me-2" /> Settings
            </ListGroup.Item>
            <ListGroup.Item
              className="bg-dark text-white border-0 d-flex align-items-center"
              as={Link}
              to="/feedback"
            >
              <FaCommentDots className="me-2" /> Feedback
            </ListGroup.Item>
            <ListGroup.Item
              className="bg-dark text-white border-0 d-flex align-items-center"
              as={Link}
              to="/help"
            >
              <FaQuestionCircle className="me-2" /> Help
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default CustomNavbar
