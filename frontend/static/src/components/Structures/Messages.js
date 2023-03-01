import { useState, useEffect } from "react";

function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessages = async () => {
      const response = await fetch(`/api_v1/messages/`);
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const data = await response.json();
      setMessages(data);
    };
    getMessages();
  }, []);

  const messageHTML = messages.map((message) => (
    <div key={message.id}>
      {message.text}
      <br />
      <small>{message.created_at}</small>
    </div>
  ));

  return <div>{messageHTML}</div>;
}

export default Messages;
