import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { testimonialService } from "@/services/testimonialService";

export const TESTIMONIALS_QUERY_KEY = ["testimonials"];

export const useGetTestimonials = (options = {}) => {
    const queryClient = useQueryClient();

    useEffect(() => {
        const unsubscribe = testimonialService.subscribeToTestimonials((items) => {
            queryClient.setQueryData(TESTIMONIALS_QUERY_KEY, items);
        });
        return () => {
            if (typeof unsubscribe === "function") unsubscribe();
        };
    }, [queryClient]);

    return useQuery({
        queryKey: TESTIMONIALS_QUERY_KEY,
        queryFn: () => testimonialService.getTestimonials(),
        ...options,
    });
};

export const useTestimonials = (options = {}) => {
    const query = useGetTestimonials(options);
    return {
        testimonials: query.data || [],
        loading: query.isLoading,
        error: query.error,
        ...query,
    };
};

export default useTestimonials;
