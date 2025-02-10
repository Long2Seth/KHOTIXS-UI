import {khotixsApi} from "@/lib/api";
import {ReserveTicket} from "@/lib/types/customer/Ticket";

export const ticketEndpoint = khotixsApi.injectEndpoints({
    endpoints: (builder) => ({
        reserveTicket: builder.mutation<any, { tickets: ReserveTicket[] }>({
            query: (body) => ({
                url: "/event-ticket/api/v1/tickets/reserve",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const {
    useReserveTicketMutation
} = ticketEndpoint;