import React from "react";
import Question from "./Question";
import { useState, useEffect } from "react";

export default function QuestionsList() {
  const [quizFetch, setQuizFetch] = useState({
    isLoading: true,
    errorMessage: "",
    pradip: "what's your name?",
  });

  useEffect(() => {
    async function getQuiz() {
      fetch("https://opentdb.com/api.php?amount=5")
        .then((res) => res.json())
        .then((data) =>
          setQuizFetch({
            isLoading: false,
            errorMessage: "",
            pradip: data.results,
          })
        );
    }
    getQuiz();
  }, []);

  console.log(quizFetch.pradip);
  const url = quizFetch.pradip;

  return (
    <>
      <div className="question-container">
        <Question
          value={quizFetch.pradip[0].question}
          corAnswer={quizFetch.pradip[0].correct_answer}
        />
        <Question value={quizFetch.pradip[1].question} />
        <Question value={quizFetch.pradip[2].question} />
        <Question value={quizFetch.pradip[3].question} />
        <Question value={quizFetch.pradip[4].question} />
      </div>
      <div className="button-container">
        <button className="check-button">Check Answer</button>
      </div>
    </>
  );
}
