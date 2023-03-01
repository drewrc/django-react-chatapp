import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "../styles/userview.css";
import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";
import ChatInput from "../Structures/ChatInput";
import Messages from "../Structures/Messages";
import User from "../User";
import ChatRoom from "../Structures/ChatRoom";
import NewRoom from "../Structures/NewRoom";

function Userview() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
  };

  return (
    <div>
      <header className="head"></header>
      <Container className="container">
        <Row>
          <Col className="col side-bar" md={{ span: 3 }}>
            <div>
              <h5>Rooms</h5>
            </div>
            <ChatRoom handleRoomClick={handleRoomClick} />
            <NewRoom />
          </Col>
          <Col className="col main" md={{ span:6}}>
            <h5>Messages</h5>
            <div className="messages">
              {/* <Messages /> */}
              <div>
              {selectedRoom && <Messages roomId={selectedRoom.id} />}
            </div>
            <ChatInput />
            </div>
          </Col>
          {/* <Col className="col users-list" sm={3}>
            <h5>Group members</h5>
            <div className="user">
              <User />
            </div>
            <div className="user">
              <User />
            </div>
            <div className="user">
              <User />
            </div>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}
export default Userview;
