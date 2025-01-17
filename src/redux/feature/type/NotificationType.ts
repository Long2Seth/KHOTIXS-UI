export interface Notification {
    id: string;
    type: string;
    userId: string;
    organizerId: string;
    ticketId: string;
    eventId: string;
    message: string;
    timestamp: string;
    status: string;
}

export interface Event {
    id: string;
    type: string;
    payload: string;
    createdAt: string;
}