export enum NotificationType {
    // EVENT_CREATED = 'EVENT_CREATED',
    // EVENT_PUBLISHED = 'EVENT_PUBLISHED',
    // EVENT_CANCELLED = 'EVENT_CANCELLED',
    // EVENT_UPCOMING = 'EVENT_UPCOMING',
    // REGULAR_TICKET = 'REGULAR_TICKET',
    // VIP_TICKET = 'VIP_TICKET',
    // PREMIUM_TICKET = 'PREMIUM_TICKET',
    // FREE_TICKET = 'FREE_TICKET',
    // PAYMENT_SUCCESS = 'PAYMENT_SUCCESS',
    // ORGANIZER_UPDATE = 'ORGANIZER_UPDATE'

    EVENT_CREATED = 'EVENT_CREATED',
    EVENT_PUBLISHED = 'EVENT_PUBLISHED',
    REGULAR_TICKET = 'REGULAR_TICKET',
    VIP_TICKET = 'VIP_TICKET',
    PREMIUM_TICKET = 'PREMIUM_TICKET',
    FREE_TICKET = 'FREE_TICKET',

}

export interface EventData {
    id: string
    title: string
    startDate: string
    endDate: string
    location: string
    price: number
    isPremium: boolean
    uuid: string
    slug: string
    thumbnail: string | null
    isContent: boolean
}

export interface Notification {
    id: string;
    userId: string;
    userName: string;
    eventTitle?: string;
    message: string;
    notificationType: NotificationType;
    read: boolean;
    createdAt: string;
    thumbnail?: string;

    // id: string
    // userId: string
    // senderId: string
    // userName: string
    // eventTitle: string
    // description: string
    // location: string
    // eventCategory: string
    // message: string
    // notificationType: NotificationType
    // notificationData: EventData
    // isRead: boolean
    // startedDate: string
    // endedDate: string
    // capacity: number
    // thumbnail: string
    // published: boolean
    // read: boolean
    // createdAt: string
}


export interface NotificationActions {
    markAsRead: (id: string, status: boolean) => Promise<void>;
    remove: (id: string) => Promise<void>;
}