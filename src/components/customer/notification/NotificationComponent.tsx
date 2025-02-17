'use client';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { FiBell } from "react-icons/fi";
import NotificationCardComponent from "@/components/customer/notification/NotificationCardComponent";
import { Notification } from "@/lib/types/customer/Notification";
import { WebSocketService } from "@/lib/types/customer/Websocket";
import { useDeleteNotificationByIdMutation } from "@/redux/feature/user/notification/Notification";
import {
    decrementUnreadCount,
    setUnreadCount,
    selectUnreadCount,
    incrementUnreadCount
} from '@/redux/feature/user/notification/notificationCountSlice';
import { useFetchInitialNotifications } from "@/components/customer/notification/useFetchInitialNotifications";

export default function NotificationComponent() {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const userRole = "USER";
    const [deleteNotification] = useDeleteNotificationByIdMutation();
    const dispatch = useDispatch();
    const unreadCount = useSelector(selectUnreadCount);

    const { notifications: initialNotifications } = useFetchInitialNotifications("desc", userRole);

    useEffect(() => {
        const wsServer = new WebSocketService('/communication/ws', userRole);

        // Set up notification callback
        wsServer.onNotification((notification: Notification) => {
            setNotifications((prev) => [notification, ...prev]);
            if (!notification.isRead) {
                dispatch(incrementUnreadCount());
            }
        });

        // Set up readDetailNotification callback
        wsServer.onReadDetailNotification((notificationId: string) => {
            setNotifications((prev) =>
                prev.map((notification) =>
                    notification.id === notificationId ? { ...notification, readDetailNotification: true } : notification
                )
            );
        });

        // Connect to WebSocket
        wsServer.connect();

        // Set initial notifications
        setNotifications(initialNotifications);
        const unreadCount = initialNotifications.filter((notification: Notification) => !notification.isRead).length;        dispatch(setUnreadCount(unreadCount));

        // Cleanup on unmount
        return () => {
            wsServer.disconnect();
        };
    }, [userRole, dispatch, initialNotifications]);

    const handleNotificationRead = (id: string) => {
        setNotifications((prev) =>
            prev.map((notification) => {
                if (notification.id === id && !notification.isRead) {
                    dispatch(decrementUnreadCount());
                    return { ...notification, isRead: true };
                }
                return notification;
            })
        );
    };

    const handleNotificationDelete = async (id: string) => {
        try {
            await deleteNotification(id).unwrap();
            setNotifications((prev) => prev.filter(notification => notification.id !== id));
        } catch (error) {
            console.error('Error deleting notification:', error);
        }
    };

    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className={`relative border-none md:mx-4 mr-2 cursor-pointer`}>
                    <p className={`absolute top-[-3px] right-[-4px] md:top-[-8px] md:right-[-8px] text-[6px] md:text-sm font-semibold text-white bg-red-500 rounded-full ${unreadCount > 9 ? 'px-[3px] md:px-[4px]' : 'px-[8px]'} flex justify-center items-center`}>
                        {unreadCount > 9 ? '+9' : unreadCount}
                    </p>
                    <FiBell className="md:h-8 md:w-8 h-5 w-5 text-primary-color" />
                </div>
            </SheetTrigger>
            <SheetContent
                className={`no-scrollbar w-[270px] md:w-[370px] bg-white bg-opacity-95 mt-[48px] rounded-[6px]`}>
                <SheetHeader>
                    <SheetTitle
                        className={`text-start dark:text-label-text-secondary text-2xl`}>Notification</SheetTitle>
                </SheetHeader>
                <section className="md:p-4 py-2 space-y-2 overflow-y-scroll h-[700px] no-scrollbar ">
                    {notifications?.map((notification) => (
                        <NotificationCardComponent
                            key={notification.id}
                            notification={notification}
                            onRead={handleNotificationRead}
                        />
                    ))}
                </section>
            </SheetContent>
        </Sheet>
    );
}