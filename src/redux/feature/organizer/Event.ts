import {khotixsApi} from "@/lib/api";
import {EventResponse, EventType, SummaryEvent} from "@/lib/types/customer/event";

export const Event = khotixsApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllEventUpcoming: builder.query<EventType[], void>({
            query: () => '/event-ticket/api/v1/events/published',
            providesTags: [{type: 'EventOrganizer', id: "LIST"}],
        }),

        updateEventById: builder.mutation<EventType, { id: string, data: Partial<EventType> }>({
            query: ({id, data}) => ({
                url: `/event-ticket/api/v1/events/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: [{type: 'EventOrganizer', id: "LIST"}],
        }),

        getEventById: builder.query<EventType, string>({
            query: (id) => `/event-ticket/api/v1/events/${id}`,
            providesTags: [{type: 'EventOrganizer', id: "LIST"}],
        }),

        getSummaryEvent: builder .query<SummaryEvent,void>(
            {
                query: () => '/event-ticket/api/v1/events/organizer/summary'
            }
        ),

        getAllEventOrganizer: builder.query<EventResponse, { page: number, size: number }>({
            query: ({page, size}) => `/event-ticket/api/v1/events?page=${page}&size=${size}`,
            providesTags: [{type: 'EventOrganizer', id: "LIST"}],
        }),

        createEvent: builder.mutation<EventType, EventType>({
            query: (data) => ({
                url: '/event-ticket/api/v1/events',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: [{type: 'EventOrganizer', id: "LIST"}],
        }),

        publishEvent: builder.mutation<void, string>({
            query: (id) => ({
                url: `/event-ticket/api/v1/events/${id}/publish`,
                method: 'PUT',
            }),
            invalidatesTags: [{type: 'EventOrganizer', id: "LIST"}],
        }),

        unpublishEvent: builder.mutation<void, string>({
            query: (id) => ({
                url: `/event-ticket/api/v1/events/${id}/unpublish`,
                method: 'PUT',
            }),
            invalidatesTags: [{type: 'EventOrganizer', id: "LIST"}],
        }),
    }),
});

export const {
    useGetAllEventUpcomingQuery,
    useGetAllEventOrganizerQuery,
    useGetEventByIdQuery,
    useUpdateEventByIdMutation,
    useCreateEventMutation,
    usePublishEventMutation,
    useUnpublishEventMutation,
    useGetSummaryEventQuery,
} = Event;