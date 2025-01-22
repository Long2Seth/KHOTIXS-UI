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



export type Notification = {

    id?: string;

    eventId?: string;

    eventTitle?: string;

    eventCategory?: string;

    startedDate?: string;

    timestamp: string; // Add this line

    endedDate?: string;

    capacity?: number;

    thumbnail?: string;

    isPublish?: boolean;

    title?: string;

    message?: string;

    paymentDate?: string;

    amount?: number;

    location?: string;

    description?: string;

    thumbnailUrl?: string;

    isContent?: boolean;

    dateTime?: string;

    ticketAmount?: number;

    companyName?: string;

    phoneNumber?: string;

    email?: string;

    status?: string;

    template?: string;

    avatar?: string;

    position?: string;

    businessName?: string;

    notificationType?: string;

    isRead?: boolean;

    receiverId?: string;

    createdAt?: Date;

    read?: boolean;

    role?: string;


}