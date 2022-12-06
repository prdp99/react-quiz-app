import { useState } from "react";
import Homepage from "./components/Homepage";
import QuestionsList from "./components/QuestionsList";

function App() {
  const [start, setStart] = useState(false);
  function startGame() {
    console.log("game started");
    return setStart(true);
  }
  return <>{start ? <QuestionsList /> : <Homepage start={startGame} />}</>;
}

export default App;
