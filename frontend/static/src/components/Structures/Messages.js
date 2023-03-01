import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import EditMessage from "./EditMessage";
import Button from "react-bootstrap/esm/Button";

function Messages({ roomId }) {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null)
  const [editMessageId, setEditMessageId] = useState(null)


  const handleCancelEdit = () => {
    setEditMessageId(null);
  };

  const handleSaveEdit = async (e, newText) => {
    console.log(newText)
    // send a PATCH request to update the message on the server
    console.log(`Saving edited message with ID ${editMessageId}: ${newText}`);
    const response = await fetch(`/api_v1/messages/${editMessageId}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'), // assuming you are using Django CSRF protection
      },
      body: JSON.stringify({ text: newText }),
    });
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    setMessages((prevMessages) => {
      const updatedMessages = prevMessages.map((message) => {
        if (message.id === editMessageId) {
          return {
            ...message,
            text: newText,
          };
        } else {
          return message;
        }
      });
      return updatedMessages;
    });
   
    setEditMessageId(null);
  };

  console.log ({messages})

  //Fetch for user editing and deleting ---- >
  //return authenticated user to compare pk to message.user  
  useEffect(() => {
    const getUser = async () => {
      const response = await fetch('/dj-rest-auth/user/');
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      const data = await response.json();
      setUser(data);
    };
    getUser();
  }, []);

//Fetch for chatrooms filtered by ID ---- >
  useEffect(() => {
    const getMessages = async () => {
      const response = await fetch(`/api_v1/messages/chatroom/${roomId}/`);
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const data = await response.json();
      setMessages(data);
    };
    getMessages();
  }, [roomId]);

  const handleEdit = (e, messageId) => {
    e.preventDefault();
    setEditMessageId(messageId)
  }
// console.log({editMessageId})

const messageHTML = messages.map((message) => {
  if (editMessageId === message.id) {
    return (
      <div key={message.id}>
        <EditMessage message={message.text} onSaveEdit={handleSaveEdit} />
        <Button type="submit" variant="dark" onClick={handleCancelEdit}>
          Cancel
        </Button>
      </div>
    );
  } else {
    return (
      <div key={message.id}>
        {message.text}
        <div className="message-container">
          By {message.username}
          <div id="small">{message.created_at}</div>
        </div>
        {user && user.pk === message.user && (
          <div>
            <Button
              type="submit"
              variant="light"
              onClick={(e) => handleEdit(e, message.id)}
            >
              Edit
            </Button>
            <Button type="submit" variant="light">
              Delete
            </Button>
          </div>
        )}
      </div>
    );
  }
});


  return <div>{messageHTML}</div>;
}

export default Messages;
