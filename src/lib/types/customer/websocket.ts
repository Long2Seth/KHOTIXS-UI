import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import type { Notification } from '@/lib/types/customer/notification';

export class WebSocketService {
    private wsUrl: string;
    private client: Client;
    private subscriptionCallback: ((notification: Notification) => void) | null = null;
    private userRole: string;

    constructor(wsUrl: string = '/ws', userRole: string) {
        this.wsUrl = wsUrl;
        this.userRole = userRole;

        this.client = new Client({
            webSocketFactory: () => new SockJS(this.wsUrl),
            onConnect: () => {
                console.log('Connected to WebSocket');
                this.subscribe();
            },
            onStompError: (frame) => {
                console.error('STOMP error', frame);
            }
        });
    }

    async   fetchInitialNotifications(userRole:string): Promise<Notification[]> {
        const notifications = await fetch(`/communication/api/v1/notifications/publish-event/${this.userRole}`)
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
        if (this.client.connected) {
            this.subscribe();
        }
    }

    private subscribe(): void {
        if (this.subscriptionCallback) {
            this.client.subscribe(`/topic/notifications/`, (message) => {
                const notification = JSON.parse(message.body) as Notification;
                this.subscriptionCallback!(notification);
            });
        }
    }
}