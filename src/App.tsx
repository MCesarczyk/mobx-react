import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import mobxLogo from "./assets/mobx.svg";
import "./App.css";
import { observable } from "mobx";
import { observer } from "mobx-react";

function App() {
  const counterState = observable({
    count: 0,
    incrementCount: () => {
      counterState.count++;
    },
    decrementCount: () => {
      counterState.count--;
    },
  });

  interface CounterState {
    counterState: {
      count: number;
      incrementCount: () => void;
      decrementCount: () => void;
    };
  }

  const Counter = observer(({ counterState }: CounterState) => {
    return (
      <div className="card">
        <button onClick={counterState.incrementCount}>+</button>
        <p>{counterState.count}</p>
        <button onClick={counterState.decrementCount}>-</button>
      </div>
    );
  });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://mobx.js.org" target="_blank">
          <img src={mobxLogo} className="logo mobx" alt="Mobx logo" />
        </a>
      </div>
      <h1>Vite + React + Mobx</h1>
      <Counter counterState={counterState} />
      <p className="read-the-docs">Click on the logos to learn more</p>
    </>
  );
}

export default App;
