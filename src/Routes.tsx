import { lazy } from "react";
import GlobalLayout from "@/pages/_layout";

const MainPage = lazy(() => import("@/pages/Main"));
const ResultPage = lazy(() => import("@/pages/Result"));
const EncyclopediaPage = lazy(() => import("@/pages/Encyclopedia"));
const DetailPage = lazy(() => import("@/pages/Detail"));

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/result", element: <ResultPage /> },
      { path: "/encyclopedia", element: <EncyclopediaPage /> },
      { path: "/detail", element: <DetailPage /> },
    ],
  },
];

export const pages = [{ route: "/" }];
