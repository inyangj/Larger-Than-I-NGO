"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const ClientLayout = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>  
     <div>{children}</div>
    </QueryClientProvider>
  );
};

export default ClientLayout;
