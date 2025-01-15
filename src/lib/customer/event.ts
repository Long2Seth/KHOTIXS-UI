export type Ticket = {
    id: string;
    ticketTitle: string;
    type: string;
    price: string;
    capacity: number;
    isPublish: boolean;
    isDisplay: boolean;
    isSoldOut: boolean;
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
    isPublish: boolean;
    tickets: Ticket[];
}