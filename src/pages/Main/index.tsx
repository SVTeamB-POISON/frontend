import { QueryKeys, restFetcher } from "@/queryClient";
import { Test } from "@/types/test";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function Main() {
  const { data: test } = useQuery<Test>([QueryKeys.TEST], () =>
    restFetcher({ method: "GET", path: "test" }),
  );
  const { data: product } = useQuery(["PRODUCT"], () =>
    restFetcher({ method: "GET", path: "/product" }),
  );
  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1 className="text-3xl font-bold text-blue-600">{test}</h1>
      <h1 className="text-3xl font-bold text-blue-600">
        {JSON.stringify(product)}
      </h1>
    </div>
  );
}
