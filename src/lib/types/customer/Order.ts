type TicketOrderType = {
    ticketId: string;
    quantity: number;
    price: number;
}

export type OrderType = {
    fullName: string;
    email: string;
    phoneNumber: string;
    eventId: string;
    tickets: TicketOrderType[];
}