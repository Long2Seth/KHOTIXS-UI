'use client'

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
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

    return (
        <Sheet >
            <SheetTrigger asChild>
                <Button className={` border-none`} >
                    <FiBell className="h-7 w-7" />
                </Button>
            </SheetTrigger>
            <SheetContent className={`overflow-y-scroll no-scrollbar`}>
                <SheetHeader>
                    <SheetTitle className={`text-start text-2xl`}>Notification</SheetTitle>
                </SheetHeader>
                <section className="p-4 space-y-2">
                    {notifications.map((notification) => (
                        <NotificationCardComponent key={notification.id} notification={notification} />
                    ))}
                </section>
            </SheetContent>
        </Sheet>
    );
}