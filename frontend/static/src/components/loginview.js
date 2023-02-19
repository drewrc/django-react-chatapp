import './styles/loginview.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LoginView() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, password: password })
    };

    fetch('/api_v1/login/', options)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
            console.log('Registration successful');
        } else {
        console.log('error');
        }
      });
  };

  return (
    <Container className='login-container'>
        <Row>
            <h2>Welcome to Discourse</h2>
            <h3>Log in below</h3>
        </Row>
        <Row>    
            <Col>  
                <Form onSubmit={handleSubmit}>
                <div className='login-text'>
                    <Form.Group controlId="username">
                        <Form.Label>Username:</Form.Label>
                            <Form.Control type="text" value={username} onChange={event => setUsername(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="password" className='password-box'>
                        <Form.Label>Password:</Form.Label>
                            <Form.Control type="password" value={password} onChange={event => setPassword(event.target.value)} />
                    </Form.Group>
                        <Button type="submit">Login</Button>
                </div>
                </Form>
            <a href="#"><h4>Create new account</h4></a>
            <a href="#"><h4>Forgot username?</h4></a>
            <a href="#"><h4>Forgot password?</h4></a>
            </Col>  
        </Row>
    </Container>

  );
}

export default LoginView;

