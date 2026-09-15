import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { themeService } from "@/services/themeService";

export const THEME_QUERY_KEY = ["theme-settings"];

export const useGetThemeSettings = (options = {}) => {
    const queryClient = useQueryClient();

    useEffect(() => {
        const unsubscribe = themeService.subscribeToThemeSettings((data) => {
            queryClient.setQueryData(THEME_QUERY_KEY, data);
        });
        return () => {
            if (typeof unsubscribe === "function") unsubscribe();
        };
    }, [queryClient]);

    return useQuery({
        queryKey: THEME_QUERY_KEY,
        queryFn: () => themeService.getThemeSettings(),
        ...options,
    });
};

export const useThemeSettings = (options = {}) => {
    const query = useGetThemeSettings(options);
    return {
        themeSettings: query.data || null,
        loading: query.isLoading,
        error: query.error,
        ...query,
    };
};

export default useThemeSettings;
