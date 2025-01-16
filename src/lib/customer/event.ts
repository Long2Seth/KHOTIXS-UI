export type Ticket = {
    id: string;
    ticketTitle: string;
    type: string;
    price: string;
    capacity: number;
    isPublish: string;
    isDisplay: string;
    isSoldOut: string;
};

export type EventType = {
    id: string;
    eventTitle: string;
    description: string;
    location: string;
    eventCategory: string;
    startedDate: string;
    endedDate: string;
    capacity: number;
    thumbnail: string;
    isPublish: string;
    tickets: Ticket[];
};