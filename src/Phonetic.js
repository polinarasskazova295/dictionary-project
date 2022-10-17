import React from "react";
import "./Phonetic.css"

export default function Phonetic(props) {
  const phoneticsAudio = props.phonetic.audio;

  function playAudio() {
    const audio = new Audio(phoneticsAudio);
    audio.play();
  }

  if (props.phonetic.audio) {
    return (
      <span className="Phonetic phonetic-block">
        <span>
          <i className="fa-solid fa-play" onClick={playAudio}>
            {" "}
           {" "}
          </i>
        </span>
        <span className="text"> {props.phonetic.text}</span>
      </span>
    );
  } else {
    return null;
  }
}