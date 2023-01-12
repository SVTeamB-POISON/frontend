import { QueryClient } from "@tanstack/react-query";
import axios, { AxiosRequestConfig } from "axios";

type AnyOBJ = {
  [key: string]: any;
};

export const getClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    if (!client) {
      client = new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: 1000 * 60 * 60 * 24, // 24시간
            staleTime: 1000 * 60, // 1분
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      });
    }
    return client;
  };
})();

//const { VITE_BASE_URL } = import.meta.env;
const BASE_URL = import.meta.env.DEV ? "/api" : "http://poisonsvb.com/api";

export const restFetcher = async ({
  method,
  path,
  body,
  params,
}: {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  path: string;
  body?: AnyOBJ;
  params?: AnyOBJ;
}) => {
  try {
    let url = `${BASE_URL}${path}`;
    const axiosConfig: AxiosRequestConfig = {
      method,
    };
    if (body) axiosConfig.data = body;
    if (params) {
      const searchParams = new URLSearchParams(params);
      url += "?" + searchParams.toString();
    }
    const res = await axios(url, axiosConfig);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const QueryKeys = {
  TEST: "TEST",
  ENCY: "ENCY",
  RESULT: "RESULT",
  DETAIL: "DETAIL",
};
