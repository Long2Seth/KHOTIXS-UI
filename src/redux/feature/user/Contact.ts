import { khotixsApi } from "@/lib/api";

export const contactUs = khotixsApi.injectEndpoints({
    endpoints: (builder) => ({
        submitContactForm: builder.mutation({
            query: (data) => ({
                url: '/communication/api/v1/feedback',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useSubmitContactFormMutation } = contactUs;