import { khotixsApi } from "@/lib/api";
import { EventType } from "@/lib/types/customer/Event";
import {Ticket, UpdateTicket} from "@/lib/types/customer/Ticket";

export const TicketApi = khotixsApi.injectEndpoints({
    endpoints: build => ({
        getTicketByEventId: build.query<EventType, string>({
            query: (id: string) => `/event-ticket/api/v1/events/organizer/${id}`,
            providesTags: [{ type: 'TicketOrganizer', id: 'LIST' }]
        }),
        getTicketById: build.query<Ticket, string>({
            query: (id: string) => `/event-ticket/api/v1/tickets/${id}`,
        }),
        updateTicketByID: build.mutation<UpdateTicket, { id: string, data: UpdateTicket }>({
            query: ({ id, data }) => ({
                url: `/event-ticket/api/v1/tickets/${id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: [{ type: 'TicketOrganizer', id: 'LIST' }]
        }),
        publishTicket: build.mutation<void, string>({
            query: (id: string) => ({
                url: `/event-ticket/api/v1/tickets/${id}/publish`,
                method: 'PUT'
            }),
            invalidatesTags: [{ type: 'TicketOrganizer', id: 'LIST' }]
        }),
        unpublishTicket: build.mutation<void, string>({
            query: (id: string) => ({
                url: `/event-ticket/api/v1/tickets/${id}/unpublish`,
                method: 'PUT'
            }),
            invalidatesTags: [{ type: 'TicketOrganizer', id: 'LIST' }]
        }),
        displayTicket: build.mutation<void, string>({
            query: (id: string) => ({
                url: `/event-ticket/api/v1/tickets/${id}/display`,
                method: 'PUT'
            }),
            invalidatesTags: [{ type: 'TicketOrganizer', id: 'LIST' }]
        }),
        hideTicket: build.mutation<void, string>({
            query: (id: string) => ({
                url: `/event-ticket/api/v1/tickets/${id}/hide`,
                method: 'PUT'
            }),
            invalidatesTags: [{ type: 'TicketOrganizer', id: 'LIST' }]
        }),
        deleteTicket: build.mutation<void, string>({
            query: (id: string) => ({
                url: `/event-ticket/api/v1/tickets/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [{ type: 'TicketOrganizer', id: 'LIST' }]
        })
    })
});

export const {
    useGetTicketByEventIdQuery,
    useGetTicketByIdQuery,
    useUpdateTicketByIDMutation,
    usePublishTicketMutation,
    useUnpublishTicketMutation,
    useDisplayTicketMutation,
    useHideTicketMutation,
    useDeleteTicketMutation
} = TicketApi;