import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: '' });

export const khotixsApi = createApi({
    reducerPath: "khotixsApi",
    baseQuery: baseQuery,
    endpoints: () => ({}),
    tagTypes: [
        'EventPublish',
        'UserProfile',
        'Notification',
        'EventOrganizer',
        'TicketOrganizer'
    ]
});