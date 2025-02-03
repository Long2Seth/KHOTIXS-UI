import { khotixsApi } from "@/lib/api";
import { EventType } from "@/lib/types/customer/event";

export const getAllEventPublish = khotixsApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllEventPublish: builder.query<EventType[], void>({
            query: () => '/event-ticket/api/v1/events/published',
            providesTags: [{ type: 'EventOrganizer', id: "LIST" }],
        }),
        getEventById: builder.query<EventType, string>({
            query: (id) => `/event-ticket/api/v1/events/${id}`,
            providesTags: [{ type: 'EventOrganizer', id: "LIST" }],
        }),
        getEventByCategory: builder.query<EventType[], string>({
            query: (category) => `/event-ticket/api/v1/events/category/${category}`,
            providesTags: [{ type: 'EventOrganizer', id: "LIST" }],
        }),
    }),
});

export const {
    useGetAllEventPublishQuery,
    useGetEventByIdQuery,
    useGetEventByCategoryQuery,
} = getAllEventPublish;