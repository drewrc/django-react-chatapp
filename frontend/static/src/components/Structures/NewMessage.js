import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/chatinput.css'
import Cookies from 'js-cookie';


function ChatInput({roomId, user}) {
  const [text, setText] = useState('');
  // console.log(roomId)

console.log({user})

  const handleError = (err) => {
    console.warn(err)
    }


console.log(user)
  const handleSubmit = async (event) => {
     event.preventDefault();

    const options = {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json',
             "X-CSRFToken": Cookies.get("csrftoken"),
         },
         body: JSON.stringify({ text, user}
        )
      }

      ///api_v1/messages/chatroom/2/
      //message.room
      const response = await fetch(`/api_v1/messages/chatroom/${roomId}/`, options).catch(handleError);
      if (!response.ok) {
        throw new Error('Network response not ok!')
      }
      const data = await response.json()
    }

    // console.log({user})
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
