import './styles/registrationview.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';

function RegistrationView () {
        const [username, setUsername] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          fetch('/api_v1/register/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
          })
          .then(response => {
            if (response.ok) {
              console.log('Registration successful');
            } else {
                response.json().then(errors => {
                  console.log(errors);
                });
              }
            });
          }


    return(
        <Container className='login-container'>
             <Row>
                <h2>Welcome to Discourse</h2>
                <h3>create new account</h3>
            </Row>
            <Row>    
                <Col>  
                    <Form onSubmit={handleSubmit}>
                    <div className='login-text'>
                    <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </Form.Group>
                
                    <Button variant="primary" type="submit">
                    Register
                    </Button> 
                    </div>
                    <a href="#"><h4>Already have an account?</h4></a>

                    </Form>
                </Col>  
            </Row>
        </Container>
    )
}

export default RegistrationView