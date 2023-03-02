import "./App.css";
import Userview from "./components/Views/UserView";
import RegistrationView from "./components/Auth/RegistrationView";
import LoginView from "./components/Auth/LoginView";
import Welcome from "./components/Auth/LoginView";
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/esm/Container";
import LogOut from "./components/Auth/LogoutView";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Welcome />;
      case "login":
        return <LoginView />;
      case "register":
        return <RegistrationView />;
      case "user":
        return <Userview />;
      case "logout":
        return <LogOut />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar bg="light" expand="lg" className="nav-bar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => handlePageChange("user")}>Home</Nav.Link>
            <Nav.Link onClick={() => handlePageChange("login")}>Login</Nav.Link>
            <Nav.Link onClick={() => handlePageChange("register")}>
              Register
            </Nav.Link>
            {/* <Nav.Link onClick={() => handlePageChange("user")}>
              User View
            </Nav.Link> */}
            <Nav.Link onClick={() => handlePageChange("logout")}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {renderPage()}

      <div className="fixed-bottom footer">
        <Container>Discourse</Container>
      </div>
    </div>
  );
}

export default App;
