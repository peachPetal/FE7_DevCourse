import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./css/index.css";
import { ErrorBoundary } from "react-error-boundary";
import GlobalError from "./components/GlobalError.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={GlobalError}>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
