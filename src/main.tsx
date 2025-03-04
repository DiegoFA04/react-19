import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <HolaMundo />
  </StrictMode>
);

function HolaMundo() {
  return (
    <>
      <h1 className="new">Hola Mundo</h1>
      <div className="new">Estimado</div>
    </>
  );
}
