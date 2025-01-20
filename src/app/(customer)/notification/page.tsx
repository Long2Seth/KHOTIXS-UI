// "use client"
//
// import { useEffect, useState, useCallback } from 'react';
// import { WebSocketService } from "@/lib/customer/websocket";
// import { NotificationList } from "@/components/customer/notification/NotificationList";
// import { markAsRead, removeNotification } from "@/lib/customer/api";
// import type { Notification } from "@/types/notification";
//
// export default function NotificationsPage() {
//     const [notifications, setNotifications] = useState<Notification[]>([]);
//     const [isClient, setIsClient] = useState(false);
//
//     const handleMarkAsRead = useCallback(async (id: string) => {
//         try {
//             await markAsRead(id, true);
//             setNotifications(prev =>
//                 prev.map(notification =>
//                     notification.id === id
//                         ? { ...notification, isRead: true }
//                         : notification
//                 )
//             );
//         } catch (error) {
//             console.error('Error marking notification as read:', error);
//         }
//     }, []);
//
//     const handleRemove = useCallback(async (id: string) => {
//         try {
//             await removeNotification(id);
//             setNotifications(prev =>
//                 prev.filter(notification => notification.id !== id)
//             );
//         } catch (error) {
//             console.error('Error removing notification:', error);
//         }
//     }, []);
//
//     useEffect(() => {
//         setIsClient(true);
//     }, []);
//
//     useEffect(() => {
//         if (!isClient) return;
//
//         const currentUserId = 'event-00003'; // Replace with actual user ID retrieval method
//
//         const wsService = new WebSocketService(
//             process.env.NEXT_PUBLIC_WS_URL || 'http://localhost:8891/ws',
//             currentUserId
//         );
//
//         wsService.onNotification((notification) => {
//             setNotifications(prev => [notification, ...prev]);
//         });
//
//         wsService.connect();
//
//         wsService.fetchInitialNotifications('desc').then(initialNotifications => {
//             setNotifications(initialNotifications);
//         });
//
//         return () => {
//             wsService.disconnect();
//         };
//     }, [isClient]);
//
//     if (!isClient) {
//         return null;
//     }
//
//     return (
//         <div className="mt-[68px] container max-w-4xl mx-auto p-4 min-h-screen">
//             <h1 className="text-primary font-semibold text-3xl mb-2">
//                 Notifications
//             </h1>
//             <NotificationList
//                 notifications={notifications}
//                 actions={{ markAsRead: handleMarkAsRead, remove: handleRemove }}
//             />
//         </div>
//     );
// }

// NotificationsPage.tsx
"use client";

import {useEffect, useState, useCallback} from "react";
import type {Notification} from "@/type/notification";
import {useUser} from "@/lib/customer/contextContenet/commentContext";
import {WebSocketService} from "@/lib/customer/websocket";
import {NotificationList} from "@/components/customer/notification/NotificationList";
import {markAsRead, removeNotification} from "@/lib/customer/api";



export default function NotificationsPage() {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [userId, setUserId] = useState<string>("");


    const handleMarkAsRead = useCallback(async (id: string, status: boolean) => {
        try {
            console.log("Updating read status:", id, status);
            await markAsRead(id, status);
            setNotifications((prev) =>
                prev.map((notification) =>
                    notification.id === id
                        ? {...notification, isRead: status}
                        : notification
                )
            );
        } catch (error) {
            console.error("Error updating notification status:", error);
        }
    }, []);

    const handleRemove = useCallback(async (id: string) => {
        try {
            await removeNotification(id);
            setNotifications((prev) =>
                prev.filter((notification) => notification.id !== id)
            );
        } catch (error) {
            console.error("Error removing notification:", error);
        }
    }, []);

//Fetch notifications "/me"
    //
    // useEffect(() => {
    //   const fetchUserProfile = async () => {
    //     try {
    //       const response = await fetch(`/user-profile/api/v1/user-profiles/me`, {
    //         credentials: "include",
    //       });
    //
    //       if (response.ok) {
    //         const data = await response.json();
    //         setUserProfile(data);
    //       } else {
    //         setUserProfile(null);
    //       }
    //     } catch (error) {
    //       console.error("Error fetching user user:", error);
    //       setUserProfile(null);
    //     }
    //   };
    //   fetchUserProfile();
    // }, []);
    //

    useEffect(() => {
        const currentUserId = "USER";

            setUserId(currentUserId);

        const wsService = new WebSocketService(
            "http://localhost:8891/ws",
            // currentUserId
        );

        wsService.onNotification((notification) => {
            setNotifications((prev) => [notification, ...prev]); // Add new notification at the top
        });

        wsService.connect();

        // Fetch initial notifications
        wsService.fetchInitialNotifications("desc").then((initialNotifications) => {
            setNotifications(initialNotifications);
        });

        return () => {
            wsService.disconnect();
        };
    }, []);


    return (
        <div className="mt-[68px] container max-w-4xl mx-auto p-4 min-h-screen">
            <h1 className="text-primary font-semibold text-3xl mb-2">
                ការជូនដំណឹង
            </h1>
            <NotificationList
                notifications={notifications}
                actions={{markAsRead: handleMarkAsRead, remove: handleRemove}}
            />
        </div>
    );
}