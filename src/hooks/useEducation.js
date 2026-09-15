import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { educationService } from "@/services/educationService";

export const EDUCATION_QUERY_KEY = ["education"];

export const useGetEducation = (options = {}) => {
    const queryClient = useQueryClient();

    useEffect(() => {
        const unsubscribe = educationService.subscribeToEducation((items) => {
            queryClient.setQueryData(EDUCATION_QUERY_KEY, items);
        });
        return () => {
            if (typeof unsubscribe === "function") unsubscribe();
        };
    }, [queryClient]);

    return useQuery({
        queryKey: EDUCATION_QUERY_KEY,
        queryFn: () => educationService.getEducation(),
        ...options,
    });
};

export const useEducation = (options = {}) => {
    const query = useGetEducation(options);
    return {
        education: query.data || [],
        loading: query.isLoading,
        error: query.error,
        ...query,
    };
};

export default useEducation;
