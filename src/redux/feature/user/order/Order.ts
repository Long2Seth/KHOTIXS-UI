import {khotixsApi} from "@/lib/api";
import {OrderType} from "@/lib/types/customer/Order";

export const orderEndpoint = khotixsApi.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation<OrderType, Partial<OrderType>>({
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