import { khotixsApi } from "@/lib/api";
import { EventType } from "@/lib/types/customer/event";

export const TicketApi = khotixsApi.injectEndpoints({
    endpoints: build => ({
        getTicketByEventId: build.query<EventType, string>({
            query: (id: string) => `/event-ticket/api/v1/events/organizer/${id}`,
            providesTags: [{ type: 'TicketOrganizer', id: 'LIST' }]
        })
    })
});

export const {
    useGetTicketByEventIdQuery
} = TicketApi;