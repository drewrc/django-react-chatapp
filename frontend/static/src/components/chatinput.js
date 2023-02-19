import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/chatinput.css'
//import { api_url } from ...

function ChatInput() {
   const [text, setText] = useState('');

  const handleSubmit = async (event) => {
     event.preventDefault();
}
//     const response = await fetch(`...url`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Token ${localStorage.getItem('token')}`,
//       },
//       body: JSON.stringify({
//         text,
//       }),
//     });
//     if (response.ok) {
//       setText('');
//     }
//  };

  return (
    <div className='input-box'>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formChatInput">
        <Form.Control
            type="text"
            placeholder="Enter Text Here"
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        </Form.Group>
        <Button variant="primary" type="submit">
        Send
        </Button>
    </Form>
  </div>
  );
}

export default ChatInput;
