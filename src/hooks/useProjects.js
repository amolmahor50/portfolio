import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { projectService } from "@/services/projectService";

export const PROJECTS_QUERY_KEY = ["projects"];

export const useGetProjects = (options = {}) => {
    const queryClient = useQueryClient();

    useEffect(() => {
        const unsubscribe = projectService.subscribeToProjects((items) => {
            queryClient.setQueryData(PROJECTS_QUERY_KEY, items);
        });
        return () => {
            if (typeof unsubscribe === "function") unsubscribe();
        };
    }, [queryClient]);

    return useQuery({
        queryKey: PROJECTS_QUERY_KEY,
        queryFn: () => projectService.getProjects(),
        ...options,
    });
};

export const useProjects = (options = {}) => {
    const query = useGetProjects(options);
    return {
        projects: query.data || [],
        loading: query.isLoading,
        error: query.error,
        ...query,
    };
};

export default useProjects;
