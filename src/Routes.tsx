import { lazy } from "react";
import GlobalLayout from "@/pages/_layout";

const MainPage = lazy(() => import("@/pages/Main"));

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [{ path: "/", element: <MainPage /> }],
  },
];

export const pages = [{ route: "/" }];
