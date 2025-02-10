import {khotixsApi} from "@/lib/api";
import {QrCodeResponseType} from "@/lib/types/customer/QrCode";

export const getQRCode = khotixsApi.injectEndpoints({
    endpoints: (builder) => ({
        getQRCode: builder.query<QrCodeResponseType, {
            accountId: string,
            acquiringBank: string,
            amount: number,
            userId: string,
            orderId: string
        }>({
            query: (body) => ({
                url: "/payment/api/khqr/generate",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            }),
        }),
    }),
});

export const {
    useGetQRCodeQuery
} = getQRCode;