import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 15;

  const addValue = () => {
    if (counter <= 20) {
      setCounter(counter + 1);
    } else {
      return;
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      return;
    }
  };
  return (
    <>
      <h1>Chai aur code 2</h1>
      <h2>Counter Value:{counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
