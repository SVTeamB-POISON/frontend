import { useRoutes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { getClient } from "./queryClient";
import "@/reset.scss";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { routes } from "@/Routes";

export default function App() {
  const queryClient = getClient();
  const elem = useRoutes(routes);
  return (
    <QueryClientProvider client={queryClient}>
      {elem}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
