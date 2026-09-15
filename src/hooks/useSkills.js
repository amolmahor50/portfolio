import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { skillService } from "@/services/skillService";

export const SKILLS_QUERY_KEY = ["skills"];

export const useGetSkills = (options = {}) => {
    const queryClient = useQueryClient();

    useEffect(() => {
        const unsubscribe = skillService.subscribeToSkills((items) => {
            queryClient.setQueryData(SKILLS_QUERY_KEY, items);
        });
        return () => {
            if (typeof unsubscribe === "function") unsubscribe();
        };
    }, [queryClient]);

    return useQuery({
        queryKey: SKILLS_QUERY_KEY,
        queryFn: () => skillService.getSkills(),
        ...options,
    });
};

export const useSkills = (options = {}) => {
    const query = useGetSkills(options);
    return {
        skills: query.data || [],
        loading: query.isLoading,
        error: query.error,
        ...query,
    };
};

export default useSkills;
