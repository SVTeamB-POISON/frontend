import { QueryKeys, restFetcher } from "@/queryClient";
import { Test } from "@/types/test";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function Main() {
  const { data } = useQuery<Test>([QueryKeys.TEST], () =>
    restFetcher({ method: "GET", path: "test" }),
  );
  return (
    <div className="min-h-screen flex justify-center items-center">
      <p>메인페이지 UI 리팩토링0</p>
      <h1 className="text-3xl font-bold text-blue-600">{data}</h1>
      <p>메인페이지 UI 작업</p>
      <p>메인페이지 UI 리팩토링1</p>
      <p>메인페이지 UI 리팩토링2</p>
      <p>메인페이지 UI 리팩토링3</p>
    </div>
  );
}
