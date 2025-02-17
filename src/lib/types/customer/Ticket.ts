export type Ticket = {
    id: string;
    ticketTitle: string;
    type: string;
    price: number;
    capacity: number;
    availableQuantity: number;
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
    ticketTitle: string;
}

export type CreateTicketType = {
    userUuid: string | null;
    tickets: ReserveTicket[];
}

export type ticketReserveds = {
    uuid: string;
    status: boolean;
    ticketTitle: string;
    availableQuantity: number;
};

export type TicketReserveResponseType = {
    userUuid: string | null;
    ticketReserveds: ticketReserveds[];
};