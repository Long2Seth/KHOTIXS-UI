import { khotixsApi } from "@/lib/api";
import {EventType, Ticket} from "@/lib/types/customer/event";

export const TicketApi = khotixsApi.injectEndpoints({
    endpoints: build => ({
        getTicketByEventId: build.query<EventType, string>({
            query: (id: string) => `/event-ticket/api/v1/events/organizer/${id}`,
            providesTags: [{ type: 'TicketOrganizer', id: 'LIST' }]
        }),
        getTicketById : build.query<Ticket, string>({
            query: (id: string) => `/event-ticket/api/v1/tickets/${id}`,
            providesTags: [{ type: 'TicketOrganizer', id: 'LIST' }]
        }),
        updateTicketByID: build.mutation<Ticket, { id: string, data: EventType }>({
            query: ({ id, data }) => ({
                url: `/event-ticket/api/v1/tickets/${id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: [{ type: 'TicketOrganizer', id: 'LIST' }]
        }),
    })
});

export const {
    useGetTicketByEventIdQuery,
    useUpdateTicketByIDMutation,
    useGetTicketByIdQuery
} = TicketApi;