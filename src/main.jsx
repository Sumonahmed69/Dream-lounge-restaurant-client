// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { router } from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./provider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
 
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </QueryClientProvider>
</HelmetProvider>
);
