import {khotixsApi} from "@/lib/api";
import {OrderType} from "@/lib/types/customer/Order";
import {OrderResponseType} from "@/lib/types/customer/QrCode";

export const orderEndpoint = khotixsApi.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation<OrderResponseType, Partial<OrderType>>({
            query: (newOrder) => ({
                url: '/order/api/v1/orders',
                method: 'POST',
                body: newOrder,
            }),
            invalidatesTags: [{type: 'EventOrganizer', id: "LIST"}],
        }),
    }),
});

export const {
    useCreateOrderMutation
} = orderEndpoint;