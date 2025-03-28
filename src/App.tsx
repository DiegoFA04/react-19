import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./shared/components/header/Header";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Jorge");
  const [isImportant, setIsImportant] = useState(true);

 

  return (
    <>
      <Header />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hola Jorge</h1>
      <h1>Vite + React</h1>
      <button onClick={(prev) => setIsImportant(!prev)} >{isImportant ? "Si" : "No"}</button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setName("React")}>name is {name}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
