import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { certificationService } from "@/services/certificationService";

export const CERTIFICATIONS_QUERY_KEY = ["certifications"];

export const useGetCertifications = (options = {}) => {
    const queryClient = useQueryClient();

    useEffect(() => {
        const unsubscribe = certificationService.subscribeToCertifications((items) => {
            queryClient.setQueryData(CERTIFICATIONS_QUERY_KEY, items);
        });
        return () => {
            if (typeof unsubscribe === "function") unsubscribe();
        };
    }, [queryClient]);

    return useQuery({
        queryKey: CERTIFICATIONS_QUERY_KEY,
        queryFn: () => certificationService.getCertifications(),
        ...options,
    });
};

export const useCertifications = (options = {}) => {
    const query = useGetCertifications(options);
    return {
        certifications: query.data || [],
        loading: query.isLoading,
        error: query.error,
        ...query,
    };
};

export default useCertifications;
