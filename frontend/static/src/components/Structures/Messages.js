import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import EditMessage from "./EditMessage";
import Button from "react-bootstrap/esm/Button";

function Messages({ roomId }) {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [editMessageId, setEditMessageId] = useState(null);

  // console.log(messages.id);
  // console.log(roomId)

  const handleCancelEdit = () => {
    setEditMessageId(null);
  };

  const handleEdit = (e, messageId) => {
    e.preventDefault();
    setEditMessageId(messageId);
  };

  const handleSaveEdit = async (e, newText) => {
    const response = await fetch(`/api_v1/messages/${editMessageId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"), 
      },
      body: JSON.stringify({ text: newText }),
    });
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }

    
//set new edited message ---- >
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

  const handleDelete = async (e, messageId) => {
    e.preventDefault()
    const response = await fetch(`/api_v1/messages/${messageId}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"), 
      }
  })
  if (!response.ok) {
    throw new Error("Network response was not OK");
  }
}

  //Fetch for user editing and deleting ---- >
  //return authenticated user to compare pk to message.user
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

  // console.log({isAdmin})
  // console.log({user})

  const messageHTML = messages.map((message) => {
    if (editMessageId === message.id) { 
      return (
        // render edit form if message is being edited --->
        <div key={message.id}>
          <EditMessage 
            message={message.text}
            onSaveEdit={handleSaveEdit} 
          />
          <Button 
            type="submit" 
            variant="dark" 
            onClick={handleCancelEdit}
          >
            Cancel
          </Button>
        </div>
      );
      
    } else {

      //  render message for all users ---- >
      //  render message and edit button if user = message.user  ---- >
      //  render message and delete if isAdmin = True  OR user = message.user ---- >
      const canEdit = user && user.pk === message.user;
      const canDelete = isAdmin || (user && user.pk === message.user);
  
      return (
        <div key={message.id}>
          {message.text}
          <div className="message-container">
            By {message.username}
            <div id="small">{message.created_at}</div>
          </div>
  
          {(canEdit || canDelete) && (
            <div>
              {canEdit && (
                <Button
                  type="submit"
                  variant="light"
                  onClick={(e) => handleEdit(e, message.id)}
                >
                  Edit
                </Button>
              )}
  
              {canDelete && (
                <Button 
                  type="submit" 
                  variant="light"
                  onClick={(e) => handleDelete(e, message.id)}
                >
                  Delete
                </Button>
              )}
            </div>
          )}
        </div>
      );
    }
  });
  
  return (
  <div>
    {messageHTML}
  </div>
  )
}

export default Messages;
