import './App.css';
import Userview from './components/userview';
import RegistrationView from './components/registrationview';
import LoginView from './components/loginview';
import Welcome from './components/loginview';
import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Welcome />;
      case 'login':
        return <LoginView />;
      case 'register':
        return <RegistrationView />;
      case 'user':
        return <Userview />;
      default:
        return null;
    }
  }

  return (
  <div>
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => handlePageChange('home')}>Home</Nav.Link>
          <Nav.Link onClick={() => handlePageChange('login')}>Login</Nav.Link>
          <Nav.Link onClick={() => handlePageChange('register')}>Register</Nav.Link>
          <Nav.Link onClick={() => handlePageChange('user')}>User View</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {renderPage()}
  </div>

  );
}

export default App;
