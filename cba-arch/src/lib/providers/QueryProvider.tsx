import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode, useMemo } from "react";

type Props = { children: ReactNode };

const QueryProvider = ({ children }: Props) => {
  const queryConfig = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 3,
            staleTime: 60 * 60 * 1000, // 1 hour
            refetchInterval: 30 * 60 * 1000, // 30 minutes
          },
        },
      }),
    [] // Empty dependency array means this function runs only once on mount
  );
  return (
    <QueryClientProvider client={queryConfig}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
