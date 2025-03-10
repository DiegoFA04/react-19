import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <HolaMundo name="Ricardo" age={22} />
  </StrictMode>
);

export function HolaMundo(props: IProps) {
  const firstName: string = "John";
  const lastName: string = "Doe";
  console.log(props);
  return (
    <>
      <h1 className="new">Hola {firstName} {lastName} </h1>
      <h2 className="new">Name: {props.name} Age: {props.age} </h2>
      <div className="new">The Date is {new Date().getDate() }</div>
    </>
  );
}

interface IProps { 
  name: string;
  age: number;
}
