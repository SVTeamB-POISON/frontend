import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { worker } from "./mocks/worker";
import { BrowserRouter } from "react-router-dom";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

if (import.meta.env.DEV) {
  worker.start();
}

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [new BrowserTracing()],

  tracesSampleRate: 1.0, // 프로덕션 환경에서는 수치를 더 낮춰야 합니다.
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
