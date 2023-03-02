import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "../styles/userview.css";
import Navbar from "react-bootstrap/Navbar";
import React, { useState, useEffect } from "react";
import ChatInput from "../Structures/NewMessage";
import Messages from "../Structures/Messages";
import User from "../User";
import ChatRoom from "../Structures/ChatRoom";
import NewRoom from "../Structures/NewRoom";

function Userview() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [user, setUser] = useState("")
console.log(user.pk)

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("/dj-rest-auth/user/");
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const data = await response.json();
      setUser(data);
    };
    getUser();
  }, []);

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
            {selectedRoom && user && <ChatInput roomId={selectedRoom.id} user={user.pk} />}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Userview;
