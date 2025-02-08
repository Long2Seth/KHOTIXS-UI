import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import type { Notification } from '@/lib/types/customer/notification';
import { incrementUnreadCount } from '@/redux/feature/user/notification/notificationCountSlice';
import { store } from '@/lib/store'; // Correctly import the store

export class WebSocketService {
    private wsUrl: string;
    private client: Client;
    private subscriptionCallback: ((notification: Notification) => void) | null = null;
    private readDetailCallback: ((notificationId: string) => void) | null = null;
    private userRole: string;

    constructor(wsUrl: string = '/communication/ws', userRole: string) {
        this.wsUrl = wsUrl;
        this.userRole = userRole;

        this.client = new Client({
            webSocketFactory: () => new SockJS(this.wsUrl),
            onConnect: () => {
                console.log('Connected to WebSocket');
                // Subscribe to topics after connection is established
                this.subscribe();
                this.subscribeToReadDetail();
            },
            onStompError: (frame) => {
                console.error('STOMP error', frame);
            },
        });
    }

    async fetchInitialNotifications(order: string): Promise<Notification[]> {
        const notifications = await fetch(`/communication/api/v1/notifications/publish-event/${this.userRole}?order=${order}`)
            .then((response) => response.json())
            .then(data => data.content);

        return notifications;
    }

    connect(): void {
        this.client.activate();
    }

    disconnect(): void {
        this.client.deactivate();
    }

    onNotification(callback: (notification: Notification) => void): void {
        this.subscriptionCallback = callback;
    }

    onReadDetailNotification(callback: (notificationId: string) => void): void {
        this.readDetailCallback = callback;
    }

    private subscribe(): void {
        if (this.subscriptionCallback && this.client.connected) {
            this.client.subscribe(`/topic/notifications/`, (message) => {
                const notification = JSON.parse(message.body) as Notification;
                this.subscriptionCallback!(notification);


                // Dispatch action to increment unread count if the notification is unread
                if (!notification.isRead) {
                    store.dispatch(incrementUnreadCount());
                }
            });
        }
    }

    private subscribeToReadDetail(): void {
        if (this.readDetailCallback && this.client.connected) {
            this.client.subscribe(`/topic/notifications/read-detail`, (message) => {
                const notificationId = message.body;
                this.readDetailCallback!(notificationId);
            });
        }
    }
}