// import SockJS from 'sockjs-client';
// import { Client } from '@stomp/stompjs';
// import { fetchNotifications } from '@/lib/customer/api';
// import type { Notification } from '@/types/notification';
//
// export class WebSocketService {
//     private wsUrl: string;
//     private client: Client;
//     private subscriptionCallback: ((notification: Notification) => void) | null = null;
//     private userId: string;
//
//     constructor(wsUrl: string = 'http://localhost:8081/ws', id: string) {
//         this.wsUrl = wsUrl;
//         this.userId = id;
//
//         this.client = new Client({
//             webSocketFactory: () => new SockJS(this.wsUrl),
//             onConnect: () => {
//                 console.log('Connected to WebSocket');
//                 this.subscribe();
//             },
//             onDisconnect: () => {
//                 console.log('Disconnected from WebSocket');
//             },
//             onStompError: (frame) => {
//                 console.error('STOMP error:', frame);
//             },
//             reconnectDelay: 5000, // Reconnect automatically after 5 seconds
//         });
//     }
//
//     async fetchInitialNotifications(order: 'asc' | 'desc' = 'asc'): Promise<Notification[]> {
//         const notifications = await fetchNotifications(this.userId);
//         return notifications.sort((a, b) => {
//             if (order === 'asc') {
//                 return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
//             } else {
//                 return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
//             }
//         });
//     }
//
//     connect(): void {
//         this.client.activate();
//     }
//
//     disconnect(): void {
//         this.client.deactivate();
//     }
//
//     onNotification(callback: (notification: Notification) => void): void {
//         this.subscriptionCallback = callback;
//         if (this.client.connected) {
//             this.subscribe();
//         }
//     }
//
//     private subscribe(): void {
//         if (this.subscriptionCallback) {
//             this.client.subscribe(`/topic/notifications/${this.userId}`, (message) => {
//                 const notification = JSON.parse(message.body) as Notification;
//                 this.subscriptionCallback!(notification);
//             });
//         }
//     }
//
// }

import SockJS from 'sockjs-client';
import {Client} from '@stomp/stompjs';
// import {fetchNotifications} from '@/lib/customer/api';
import type {Notification} from '@/type/notification';

export class WebSocketService {
    private wsUrl: string;
    private client: Client;
    private subscriptionCallback: ((notification: Notification) => void) | null = null;

    constructor(wsUrl: string = 'http://localhost:8891/ws') {
        this.wsUrl = wsUrl;

        this.client = new Client({
            webSocketFactory: () => new SockJS(this.wsUrl),
            onConnect: () => {
                console.log('Connected to WebSocket');
                this.subscribe();
            },
            onDisconnect: () => {
                console.log('Disconnected from WebSocket');
            },
            onStompError: (frame) => {
                console.error('STOMP error:', frame);
            },
            reconnectDelay: 5000,
        });
    }

    // async fetchInitialNotifications(order: 'asc' | 'desc' = 'desc'): Promise<Notification[]> {
    //     // const notifications = await fetchNotifications();
    //     return notifications.sort((a, b) => {
    //         if (order === 'asc') {
    //             return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    //         } else {
    //             return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    //         }
    //     });
    // }

    connect(): void {
        this.client.activate();
    }

    disconnect(): void {
        this.client.deactivate();
    }

    onNotification(callback: (notification: Notification) => void): void {
        this.subscriptionCallback = callback;
        if (this.client.connected) {
            this.subscribe();
        }
    }

    private subscribe(): void {
        if (this.subscriptionCallback) {
            this.client.subscribe(`/topic/notifications`, (message) => {
                const notification = JSON.parse(message.body) as Notification;
                this.subscriptionCallback!(notification);
            });
        }
    }
}