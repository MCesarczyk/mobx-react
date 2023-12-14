import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { observable } from "mobx";
import { observer } from "mobx-react";

function App() {
  // const [count, setCount] = useState(0)
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
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
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
      </div>
      <h1>Vite + React</h1>
      <Counter counterState={counterState} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
