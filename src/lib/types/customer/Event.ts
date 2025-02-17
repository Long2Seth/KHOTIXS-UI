import {Ticket} from "@/lib/types/customer/Ticket";


export type EventType = {
    id: string;
    eventTitle: string;
    description: string;
    location: string;
    eventCategory: string;
    startedDate: string;
    endedDate: string;
    capacity: number;
    availableQuantity: number;
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

