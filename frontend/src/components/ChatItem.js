import React from "react";

function ChatItem({ item }) {
  return <div className="chatItem">{item.message}</div>;
}

export default ChatItem;
