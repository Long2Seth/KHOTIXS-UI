'use client';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { FiBell } from "react-icons/fi";
import NotificationCardComponent from "@/components/customer/notification/NotificationCardComponent";
import { Notification } from "@/lib/types/customer/notification";
import { WebSocketService } from "@/lib/types/customer/websocket";
import { useDeleteNotificationByIdMutation } from "@/redux/feature/user/notification/Notification";
import {
    decrementUnreadCount,
    setUnreadCount,
    selectUnreadCount,
    incrementUnreadCount
} from '@/redux/feature/user/notification/notificationCountSlice';

export default function NotificationComponent() {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const userRole = "USER";
    const [deleteNotification] = useDeleteNotificationByIdMutation();
    const dispatch = useDispatch();
    const unreadCount = useSelector(selectUnreadCount);

    useEffect(() => {
        const wsServer = new WebSocketService('/communication/ws', userRole);

        // Set up notification callback
        wsServer.onNotification((notification) => {
            setNotifications((prev) => [notification, ...prev]);
            if (!notification.isRead) {
                dispatch(incrementUnreadCount());
            }
        });

        // Set up readDetailNotification callback
        wsServer.onReadDetailNotification((notificationId) => {
            setNotifications((prev) =>
                prev.map((notification) =>
                    notification.id === notificationId ? { ...notification, readDetailNotification: true } : notification
                )
            );
        });

        // Connect to WebSocket
        wsServer.connect();

        // Fetch initial notifications
        wsServer.fetchInitialNotifications("desc").then((initialNotifications) => {
            setNotifications(initialNotifications);
            const unreadCount = initialNotifications.filter(notification => !notification.isRead).length;
            dispatch(setUnreadCount(unreadCount));
        });

        // Cleanup on unmount
        return () => {
            wsServer.disconnect();
        };
    }, [userRole, dispatch]);

    const handleNotificationRead = (id: string) => {
        setNotifications((prev) =>
            prev.map((notification) =>
                notification.id === id ? { ...notification, isRead: true } : notification
            )
        );
        dispatch(decrementUnreadCount());
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
                <div className={`relative border-none mx-4 cursor-pointer`}>
                    <p className={`absolute top-[-8px] right-[-8px] text-sm font-semibold text-white bg-red-500 rounded-full ${unreadCount > 9 ? 'px-[5px]' : 'px-[8px]'} flex justify-center items-center`}>
                        {unreadCount > 9 ? '+9' : unreadCount}
                    </p>
                    <FiBell className="h-8 w-8 text-primary-color" />
                </div>
            </SheetTrigger>
            <SheetContent className={`no-scrollbar w-[270px] h-auto md:w-[370px] bg-white bg-opacity-95 absolute top-[145px]`}>
                <SheetHeader>
                    <SheetTitle className={`text-start dark:text-label-text-secondary text-2xl`}>Notification</SheetTitle>
                </SheetHeader>
                <section className="md:p-4 py-2 space-y-2 overflow-y-scroll h-[800px]">
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