import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import { AppThemeProvider } from "@/context/ThemeContext";
import ScrollToTop from "@/components/shared/ScrollToTop";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5, // 5 minutes cache
            refetchOnWindowFocus: false,
        },
    },
});

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <AppThemeProvider>
                <BrowserRouter>
                    <ScrollToTop />
                    <ScrollToTopButton />
                    <App />
                </BrowserRouter>
            </AppThemeProvider>
        </QueryClientProvider>
    </StrictMode>
);
