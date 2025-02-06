enum TicketType {
    REGULAR = 'REGULAR',
    VIP = 'VIP',
    PREMIUM = 'PREMIUM',
    FREE = 'FREE'
}

type Ticket = {
    id: string;
    ticketTitle: string;
    type: TicketType;
    price: string;
    capacity: number;
    isPublish: boolean;
    isDisplay: boolean;
    isSoldOut: boolean;
};

type Event = {
    image: string;
    date: string;
    title: string;
    location: string;
    tickets: Ticket[];
    eventType: string;
};

export const upcomingData: Event[] = [
    {
        image: "/event/home-upcoming.png",
        date: "2024-12-04",
        title: "Event Four: A Symphony of Sound and Light in the Heart of Sydney",
        location: "Sydney, Australia - Sydney Opera House, an architectural marvel hosting a breathtaking regular concert experience.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.FREE,
                price: "0.00",
                capacity: 0,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "UPCOMING"
    }
];