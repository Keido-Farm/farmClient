import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Image } from "react-bootstrap";
import Swal from "sweetalert2";
import { FaSignOutAlt } from "react-icons/fa"; 
export default function NavBar() {
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.clear();
    Swal.fire({
      position: 'top-end',
      icon: 'warning',
      title: 'Logged Out',
      showConfirmButton: false,
      timer: 1500
    });
    navigate('/login');
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-padding">
      <Navbar.Brand>
        <Link to="/">
          <Image
            src="https://ik.imagekit.io/dug63etx5/keido.png?updatedAt=1699380787367"
            alt="Logo"
            height={35}
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto"> 
        <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/register-admin">
            Admin Register
          </Nav.Link>
          <Nav.Link>
            Controller
          </Nav.Link>
          <Nav.Link href="/" onClick={handleLogout}>
            <FaSignOutAlt /> Sign out 
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}




