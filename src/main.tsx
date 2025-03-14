import { JSX, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import jokes from "./jokes";
import data from "./data";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <HolaMundo name="Ricardo" age={22} />
    <Nasa />
  </StrictMode>
);

export function HolaMundo(props: IProps) {
  const firstName: string = "John";
  const lastName: string = "Doe";
  const jokeElements = jokes.map((joke) => (
    <div>
      <h1>{joke.joke}</h1>
      <p>{joke.punchline}</p>
    </div>
  ));
  console.log(props);
  return (
    <>
      <h1 className="new">
        Hola {firstName} {lastName}{" "}
      </h1>
      <h2 className="new">
        Name: {props.name} Age: {props.age}{" "}
      </h2>
      <div className="new">The Date is {new Date().getDate()}</div>
      {jokeElements}
    </>
  );
}

export function Nasa(): JSX.Element {
  const dataElements = data.map((data) => (
    <div>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <img src={data.url} alt={data.title} />
    </div>
  ));
  return (
    <>
      <h1>Nasa Data</h1>
      {dataElements}
    </>
  );
}

/* interface INasaProps {
  title: string;
  date: string;
  url: string;
} */

interface IProps {
  name: string;
  age: number;
}
