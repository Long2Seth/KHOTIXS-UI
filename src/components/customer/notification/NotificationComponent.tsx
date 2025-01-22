'use client'

import NotificationItem from "@/components/customer/notification/NotificationStatic";
import { Notification } from "@/type/notification";
import { useEffect, useState } from "react";
import { WebSocketService } from "@/lib/customer/websocket";

export default function NotificationComponent() {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const userRole = "USER";
    useEffect(() => {

        const wsServer = new WebSocketService('http://localhost:8891/ws', userRole);

        wsServer.onNotification((notification) => {
            setNotifications((prev) => [notification, ...prev]); // Add new notification at the top
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
        <section className="p-4 space-y-2">
            {notifications.map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
            ))}
        </section>
    )
}