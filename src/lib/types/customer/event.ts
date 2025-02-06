export type Ticket = {
    id: string;
    ticketTitle: string;
    type: string;
    price: number;
    capacity: number;
    isPublish: string;
    isDisplay: string;
    isSoldOut: string;
    quantity: number;
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

export type UpcomingEvent = {
    id: string;
    eventTitle: string;
    startedDate: string;
    thumbnail: string;
}

export type UpdateTicket = {
    eventUuid: string;
    ticketTitle: string;
    type: string;
    price: number;
    capacity: number;
}

export type SummaryEvent = {
    totalEvent: number;
    totalTicket: number;
    eventPublished: number;
    eventUnpublished: number;
    totalPaymentOfAllEvent: number;
}

export type EventResponse = {
    content: EventType[];
}

