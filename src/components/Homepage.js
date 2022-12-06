import React from "react";

export default function Homepage(props) {
  return (
    <>
      <div className="top-right"></div>
      <div className="bottom-left"></div>
      <div className="start-page">
        <h2>Quizzical</h2>
        <p>This is the description</p>
        <button className="start-button" onClick={props.start}>
          Start quiz
        </button>
      </div>
    </>
  );
}
