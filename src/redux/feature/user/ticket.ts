import {khotixsApi} from "@/lib/api";
import {CreateTicketType, TicketReserveResponseType} from "@/lib/types/customer/Ticket";

export const ticketEndpoint = khotixsApi.injectEndpoints({
    endpoints: (builder) => ({
        reserveTicket: builder.mutation<TicketReserveResponseType, CreateTicketType>({
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