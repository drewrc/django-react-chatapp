import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/chatinput.css'


function NewRoom() {
   const [text, setText] = useState('');

  const handleSubmit = async (event) => {
     event.preventDefault();
}


  return (
    <div className='new-chat-room-box'>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formChatInput">
        <Form.Control
            type="text"
            placeholder="Create New Room"
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        </Form.Group>
        <Button variant="primary" type="submit">
        Submit
        </Button>
    </Form>
  </div>
  );
}

export default NewRoom;
