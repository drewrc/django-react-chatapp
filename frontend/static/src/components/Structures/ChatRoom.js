import { useState, useEffect } from "react";
import RoomComponent from "./RoomComponent";
import Messages from "./Messages";

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

  const roomHTML = rooms.map((room) => (
    <div key={room.id}>
      <RoomComponent room={room} />
        <button 
        onClick={() => handleRoomClick(room)}
        className="enter-button"
        >
        {room.name}
        </button>
    </div>
  ));

  return (
  
  <div>
    <div>
    {roomHTML}
    </div>
  </div>

  )
}
export default ChatRoom;
