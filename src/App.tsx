import { useRoutes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { getClient } from "./queryClient";
import "@/reset.scss";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { routes } from "@/Routes";
import * as Sentry from "@sentry/react";

function App() {
  const queryClient = getClient();
  const elem = useRoutes(routes);

  return (
    <QueryClientProvider client={queryClient}>
      {elem}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
export default Sentry.withProfiler(App);
