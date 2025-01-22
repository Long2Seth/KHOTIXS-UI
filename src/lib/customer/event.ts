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


// src/lib/customer/event.ts
export async function getData(id: string) {
    const response = await fetch(`/event-ticket/api/v1/events/${id}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch event data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
}