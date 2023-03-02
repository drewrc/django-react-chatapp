import { useState, useEffect } from "react";
import RoomComponent from "./RoomComponent";
import Messages from "./Messages";
import Button from "react-bootstrap/esm/Button";
import Cookies from "js-cookie";

function ChatRoom({ handleRoomClick }) {
  const [rooms, setRooms] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

   //returns isAdmin True or False depending on user ----->
   useEffect(() => {
    const getAdmin = async () => {
      const response = await fetch ('/api_v1/is_admin/');
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      const data = await response.json();
      setIsAdmin(data);
    };
    getAdmin();
  }, []);
  console.log({isAdmin})

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

  const IsAdminTrue = (room) => {
    if (isAdmin === true){
      return (
        <Button 
        variant="danger" 
        onClick={() => handleDelete(room.id)}
        >
          Remove
        </Button> 
      )
    } else {
      return null
    }
  }

  const DeleteButton = ({room, isAdmin}) => {
    if (!isAdmin){
      return null;
    }
    return (
        <Button 
        variant="danger" 
        onClick={() => handleDelete(room.id)}
        >
          Remove
        </Button> 
    )
  }

console.log({IsAdminTrue})

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
    
    <DeleteButton />
{/*      
      <Button 
      variant="danger" 
      onClick={() => handleDelete(room.id)}
      >
        Remove
      </Button>  */}

    </div>
  ));

  // console.log(roomHTML)
  return (
  
  <div>
    {roomHTML}
  </div>

  )
}
export default ChatRoom;
