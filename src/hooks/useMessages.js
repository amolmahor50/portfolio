import { useMutation, useQueryClient } from "@tanstack/react-query";
import { contactService } from "@/services/contactService";

export const MESSAGE_QUERY_KEY = ["messages"];

export const useSendMessage = (options = {}) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (messageData) => contactService.sendMessage(messageData),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: MESSAGE_QUERY_KEY });
            if (options.onSuccess) options.onSuccess(data);
        },
        onError: (err) => {
            if (options.onError) options.onError(err);
        },
        ...options,
    });
};

export const useAddMessage = useSendMessage;

export default useSendMessage;
