'use client'

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { FiBell } from "react-icons/fi";
import NotificationCardComponent from "@/components/customer/notification/NotificationCardComponent";
import { Notification } from "@/lib/types/customer/notification";
import { useEffect, useState } from "react";
import { WebSocketService } from "@/lib/types/customer/websocket";
import { useDeleteNotificationByIdMutation } from "@/redux/feature/user/Notification";

export default function NotificationComponent() {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const userRole = "USER";
    const [deleteNotification] = useDeleteNotificationByIdMutation();

    useEffect(() => {
        const wsServer = new WebSocketService('/communication/ws', userRole);

        wsServer.onNotification((notification) => {
            setNotifications((prev) => [notification, ...prev]);
        });

        wsServer.onDeleteNotification((notificationId) => {
            setNotifications((prev) => prev.filter(notification => notification.id !== notificationId));
        });

        wsServer.connect();

        // Fetch initial notifications
        wsServer.fetchInitialNotifications("desc").then((initialNotifications) => {
            setNotifications(initialNotifications);
        });

        return () => {
            wsServer.disconnect();
        };
    }, [userRole]);

    const handleNotificationRead = (id: string) => {
        setNotifications((prev) =>
            prev.map((notification) =>
                notification.id === id ? { ...notification, isRead: true } : notification
            )
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
                <div className={`border-none mx-4 cursor-pointer`}>
                    <FiBell className="h-6 w-6 text-primary-color" />
                </div>
            </SheetTrigger>
            <SheetContent className={`no-scrollbar w-[270px] md:w-[370px] bg-white bg-opacity-95 absolute top-[48px]`}>
                <SheetHeader>
                    <SheetTitle className={`text-start dark:text-label-text-secondary text-2xl`}>Notification</SheetTitle>
                </SheetHeader>
                <section className="md:p-4 py-2 space-y-2">
                    {notifications?.map((notification) => (
                        <NotificationCardComponent
                            key={notification.id}
                            notification={notification}
                            onRead={handleNotificationRead}
                            onDelete={handleNotificationDelete}
                        />
                    ))}
                </section>
            </SheetContent>
        </Sheet>
    );
}