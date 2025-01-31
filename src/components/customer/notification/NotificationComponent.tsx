'use client'

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { FiBell } from "react-icons/fi";
import NotificationCardComponent from "@/components/customer/notification/NotificationCardComponent";
import { Notification } from "@/lib/types/customer/notification";
import { useEffect, useState } from "react";
import { WebSocketService } from "@/lib/types/customer/websocket";

export default function NotificationComponent() {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const userRole = "USER";

    useEffect(() => {
        const wsServer = new WebSocketService('/ws', userRole);

        wsServer.onNotification((notification) => {
            setNotifications((prev) => [notification, ...prev]);
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

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className={`border-none p-2 pr-0`}>
                    <FiBell className="h-4 w-4 text-primary-color" />
                </Button>
            </SheetTrigger>
            <SheetContent className={`no-scrollbar w-[270px] bg-white bg-opacity-95 absolute top-[48px]`}>
                <SheetHeader>
                    <SheetTitle className={`text-start dark:text-label-text-secondary text-2xl`}>Notification</SheetTitle>
                </SheetHeader>
                <section className="md:p-4 py-2 space-y-2">
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