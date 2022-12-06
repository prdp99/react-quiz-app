import React from "react";

export default function Question(props) {
  return (
    <section className="question">
      <h2>{props.value}</h2>
      <ul className="answer-list">
        <li>{props.corAnswer}</li>
        <li>Hola</li>
        <li>Au Revoir</li>
        <li>Salir</li>
      </ul>
    </section>
  );
}
