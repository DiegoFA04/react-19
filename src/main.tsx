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
      <h1>Hola Mundo</h1>
      <div>Estiamdo</div>
    </>
  );
}
