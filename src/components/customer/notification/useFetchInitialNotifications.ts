import { useGetAllNotificationQuery } from '@/redux/feature/user/notification/Notification';
import { Notification } from '@/lib/types/customer/Notification';

export const useFetchInitialNotifications = (order: string, role: string) => {
    const { data, error, isLoading } = useGetAllNotificationQuery({ order, role });
    return {
        notifications: data?.content || [],
        error,
        isLoading,
    };
};