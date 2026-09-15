import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { serviceService } from "@/services/serviceService";

export const SERVICES_QUERY_KEY = ["services"];

export const useGetServices = (options = {}) => {
    const queryClient = useQueryClient();

    useEffect(() => {
        const unsubscribe = serviceService.subscribeToServices((items) => {
            queryClient.setQueryData(SERVICES_QUERY_KEY, items);
        });
        return () => {
            if (typeof unsubscribe === "function") unsubscribe();
        };
    }, [queryClient]);

    return useQuery({
        queryKey: SERVICES_QUERY_KEY,
        queryFn: () => serviceService.getServices(),
        ...options,
    });
};

export const useServices = (options = {}) => {
    const query = useGetServices(options);
    return {
        services: query.data || [],
        loading: query.isLoading,
        error: query.error,
        ...query,
    };
};

export default useServices;
