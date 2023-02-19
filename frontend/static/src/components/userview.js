import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import './styles/userview.css'
import Navbar from 'react-bootstrap/Navbar'
import React, { useState } from 'react';
import ChatInput from './chatinput'
import Messages from './messages';
import User from './user';

function Userview() {

    return (
        <div>
      <header className='head'></header>
      <Container className='container'>
      <Row>
        <Col className='col side-bar' sm={1}> 
        <div>
        <h5>Groups</h5>
        </div>
        <div>
        <Image className='group-icon' src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=717&q=80" />
        </div>
       </Col>
        <Col className='col room-nav' sm={3}>
        <h5>Channels</h5>
        <div>
            <h6>Text chat</h6>
            <p>channel 1</p>
            <p>channel 2</p>
        </div>
        <div>
        <h6>Audio chat</h6>
        <p>channel 1</p>
        <p>channel 2</p>
        </div>
        </Col>
        <Col className="col main" sm={5}>
        <h5>Messages</h5>
        <div className='messages'>        
          <Messages />
        </div>
        <div className='messages'>        
            <Messages />
        </div>
        <div className='messages'>        
            <Messages />
        </div>
        <div className='enter-text'>        
          <ChatInput />
        </div>
        </Col>
        <Col className='col users-list' sm={3}>
            <h5>Group members</h5>
        <div className='user'>        
          <User />
        </div>
        <div className='user'>        
        <User />
        </div>
        <div className='user'>        
        <User />
        </div>
        </Col>
      </Row>
    </Container>

    </div>
    )
}
export default Userview