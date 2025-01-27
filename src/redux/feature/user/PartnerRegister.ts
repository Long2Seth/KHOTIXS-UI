import { khotixsApi } from "@/lib/api";

export const partnerRequest = khotixsApi.injectEndpoints({
    endpoints: (builder) => ({
        submitPartnerForm: builder.mutation({
            query: (data) => ({
                url: '/identity/api/v1/partners/request',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const {
    useSubmitPartnerFormMutation
} = partnerRequest;