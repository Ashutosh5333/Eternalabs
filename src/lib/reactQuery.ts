
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchInterval: 60000,
      refetchOnWindowFocus: false,
      staleTime: 30000
    }
  }
});
