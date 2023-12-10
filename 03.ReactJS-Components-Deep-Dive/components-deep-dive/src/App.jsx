import React, { useState, useEffect } from "react";
import Starwars from "./Starwars";
import styles from "./App.module.css";

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [count, setCount] = useState(0);
  const [isManualUpdate, setIsManualUpdate] = useState(false);

  useEffect(() => {
    console.log("Mount component");
  }, []);

  useEffect(() => {
    console.log(`Update component - ${numbers.length}`);
  }, [count]);

  useEffect(() => {
    // if (!isManualUpdate) {
    //  setTimeout(() => setCount((s) => s + 1), 1000);
    // } else {
    //   setIsManualUpdate(false);
    // }
  }, [count]);

  const onClick = () => {
    setNumbers((oldState) => oldState.slice(0, oldState.length - 1));
  };

  return (
    <div className={styles.app}>
        <Starwars></Starwars>

      <h3>Count: {count}</h3>
      <ul>
        {numbers.map((number, i) => (
          <li className={styles['list-item']} key={i}>
            {number * 2}
          </li>
        ))}
      </ul>
      <button onClick={onClick}>Remove</button>
      <button
        onClick={() => {
          setCount((c) => c + 1);
          setIsManualUpdate(true);
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
