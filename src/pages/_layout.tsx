import Loading from "@/components/Loading";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Outlet />
    </Suspense>
  );
}
function LoadingPage() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#a8b0d7",
      }}
    />
  );
}
