import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { experienceService } from "@/services/experienceService";

export const EXPERIENCES_QUERY_KEY = ["experiences"];

export const useGetExperiences = (options = {}) => {
    const queryClient = useQueryClient();

    useEffect(() => {
        const unsubscribe = experienceService.subscribeToExperiences((items) => {
            queryClient.setQueryData(EXPERIENCES_QUERY_KEY, items);
        });
        return () => {
            if (typeof unsubscribe === "function") unsubscribe();
        };
    }, [queryClient]);

    return useQuery({
        queryKey: EXPERIENCES_QUERY_KEY,
        queryFn: () => experienceService.getExperiences(),
        ...options,
    });
};

export const useExperiences = (options = {}) => {
    const query = useGetExperiences(options);
    return {
        experiences: query.data || [],
        loading: query.isLoading,
        error: query.error,
        ...query,
    };
};

export default useExperiences;
