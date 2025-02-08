import {khotixsApi} from "@/lib/api";

export const notification = khotixsApi.injectEndpoints({
    endpoints: (builder) => ({

        readNotificationById: builder.mutation({
            query: (id: string) => ({
                url: `/communication/api/v1/notifications/publish-event/${id}`,
                method: 'PUT',
            }),
            invalidatesTags: [{type: 'Notification', id: 'LIST'}],
        }),

        getNotificationById: builder.mutation({
            query: (id: string) => ({
                url: `/communication/api/v1/notifications/publish-event/notification/${id}`,
                method: 'GET',
            }),
            invalidatesTags: [{type: 'Notification', id: 'LIST'}],
        }),

        deleteNotificationById: builder.mutation({
            query: (id: string) => ({
                url: `/communication/api/v1/notifications/publish-event/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{type: 'Notification', id: 'LIST'}],
        })
    }),
});

export const {
    useReadNotificationByIdMutation,
    useGetNotificationByIdMutation,
    useDeleteNotificationByIdMutation
} = notification;