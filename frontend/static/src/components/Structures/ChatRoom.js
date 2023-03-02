import { useState, useEffect } from "react";
import RoomComponent from "./RoomComponent";
import Messages from "./Messages";
import Button from "react-bootstrap/esm/Button";
import Cookies from "js-cookie";

function ChatRoom({ handleRoomClick }) {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const getRoom = async () => {
      const response = await fetch(`/api_v1/chatrooms/`);
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const data = await response.json();
      setRooms(data);
    };
    getRoom();
  }, []);

  const handleDelete = async (roomId) => {
    const response = await fetch(`/api_v1/chatrooms/${roomId}/`, {
      method: "DELETE",
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    setRooms((prevRooms) => prevRooms.filter((room) => room.id !== roomId));
  };

  const roomHTML = rooms.map((room) => (
    <div key={room.id}>
      <RoomComponent room={room} />
      <Button
        variant="dark"
        onClick={() => handleRoomClick(room)}
        className="enter-button"
      >
        {room.name}
      </Button>
      <Button variant="danger" onClick={() => handleDelete(room.id)}>
        Remove
      </Button>
    </div>
  ));
  console.log(roomHTML)
  return (
  
  <div>
    <div>
    {roomHTML}
    </div>
  </div>

  )
}
export default ChatRoom;
