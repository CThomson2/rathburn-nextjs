"use client";
import "./globals.scss";
import { Provider } from "react-redux";
import store from "@/shared/redux/store";
import PrelineScript from "./PrelineScript";
import { useState } from "react";
import { Initialload } from "@/shared/contextapi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      refetchOnWindowFocus: false,
    },
  },
});

const RootLayout = ({ children }: any) => {
  const [pageloading, setpageloading] = useState(false);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Initialload.Provider value={{ pageloading, setpageloading }}>
            {children}
          </Initialload.Provider>
        </Provider>
      </QueryClientProvider>
      <PrelineScript />
    </>
  );
};

export default RootLayout;
