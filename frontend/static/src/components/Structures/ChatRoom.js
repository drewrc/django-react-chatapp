import { useState, useEffect } from "react";
import RoomComponent from "./RoomComponent";

function ChatRoom() {
  const [room, setRoom] = useState([]);

  useEffect(() => {
    const getRoom = async () => {
      const response = await fetch(`/api_v1/chatrooms/`);
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const data = await response.json();
      setRoom(data);
    };
    getRoom();
  }, []);

  const roomHTML = room.map((room) => (
    <RoomComponent key={room.id} room={room} />
  ));

  return <div>{roomHTML}</div>;
}
export default ChatRoom;
