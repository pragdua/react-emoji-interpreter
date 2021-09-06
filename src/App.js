import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "smiling",
  "😢": "sad",
  "😠": "angry",
  "😲": "surprised",
  "🤡": "clown"
};

const emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("?");

  const emojiInputHandler = (event) => {
    let userInput = event.target.value;

    if (userInput in emojiDictionary) {
      setEmojiMeaning(emojiDictionary[userInput]);
    } else {
      setEmojiMeaning("Doesn't Exist");
    }
  };

  const emojiClick = (emoji) => {
    setEmojiMeaning(emojiDictionary[emoji]);
  };

  const emofun = (emoji) => {
    return <span onClick={() => emojiClick(emoji)}>{emoji}</span>;
  };

  return (
    <div className="App">
      <div className="container">
        <h1>inside out</h1>
        <input onChange={emojiInputHandler}></input>
        <p className="output"> {emojiMeaning} </p>
        <p className="collection">{emojisWeKnow.map(emofun)}</p>
      </div>
    </div>
  );
}
