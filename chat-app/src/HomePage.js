import React from "react";
import "./HomePage.css";
import { useState } from "react";

export default function HomePage() {
  let userAndy = {
    name: "Andy S.",
    message: [
      { text: "Hey there!" },
      // { text: "How is everybody doing??" },
      // { text: "So glad this chat is up and running " },
    ],
  };

  let userSelf = {
    name: "You",
    message: [{ text: "I know me too!" }, { text: "This is a lot of fun" }],
  };

  const u_messages = userAndy.message.map((msg) => {
    return (
      <>
        <p>{msg.text}</p>
      </>
    );
  });

  const Andy_message = userSelf.message.map((msg) => {
    return (
      <>
        <p>{msg.text}</p>
      </>
    );
  });

  const [input, setInput] = useState("");
  const [name, setName] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setName(input);
  };

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <div className="homepage">
      <sidebar className="sidebars">
        <button className="btn">Sport</button>
        <button className="btn">Movie</button>
        <button className="btn">Jokes</button>
      </sidebar>
      <div className="Display">
        <p className="NameList"> {u_messages}</p>
        <h1 className="NameList"> {"yes"}</h1>

        {/* {Andy_message} */}
      </div>
      <form className="inputForm" onSubmit={handleClick}>
        <input
          className="input"
          onChange={handleChange}
          type="type"
          placeholder="  Write a message..."
        />
        <button className="sendBtn">Send</button>
      </form>
    </div>
  );
}
