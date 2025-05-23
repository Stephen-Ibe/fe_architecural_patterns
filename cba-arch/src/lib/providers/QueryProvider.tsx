import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode, useRef } from "react";

type Props = { children: ReactNode };

const QueryProvider = ({ children }: Props) => {
  const queryClient = useRef<QueryClient | null>(null);
  if (!queryClient.current) {
    queryClient.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClient.current}>
      {children}
    </QueryClientProvider>
  );
};

export default QueryProvider;
