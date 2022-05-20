import { useEffect } from "react";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";
import { init, subscirbeChat } from "../socketApi";
import { useChat } from "../context/ChatContext";

function Connect() {
  const { setMessages } = useChat();
  useEffect(() => {
    init();
    subscirbeChat((message) => {
      setMessages((prevState) => [...prevState, { message }]);
    });
  }, []);
  return (
    <div>
      <ChatList />
      <ChatForm />
    </div>
  );
}

export default Connect;
