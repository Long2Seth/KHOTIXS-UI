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


export type UpdateTicket = {
    eventUuid: string;
    ticketTitle: string;
    type: string;
    price: number;
    capacity: number;
}

export type ReserveTicket = {
    ticketId: string;
    quantity: number;
}