import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/chatinput.css'
import Cookies from 'js-cookie';


function NewRoom() {
   const [name, setName] = useState('');

    const handleError = (err) => {
    console.warn(err)
    }

    const handleSubmit = async (event) => {
    event.preventDefault();

    const options = {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json',
            "X-CSRFToken": Cookies.get("csrftoken"),
        },
        body: JSON.stringify({name})
     }
     const response = await fetch('/api_v1/chatrooms/', options).catch(handleError);
     if (!response.ok) {
        throw new Error('Network response not ok!')
     }

     const data = await response.json();
     console.log({data})
}
console.log(name)

  return (
    <div className='new-chat-room-box'>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formChatInput">
        <Form.Control
            type="text"
            placeholder="Create New Room"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        </Form.Group>
        <Button
        variant="primary" 
        type="submit"
        >
        Submit
        </Button>
    </Form>
  </div>
  );
}

export default NewRoom;
