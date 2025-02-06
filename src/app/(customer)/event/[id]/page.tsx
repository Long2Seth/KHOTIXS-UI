import EventDetails from "@/components/customer/event/EventDetail";
import type {Metadata, ResolvingMetadata} from "next";
import {EventType} from "@/lib/types/customer/event";



type Props = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

async function getEventMetadata(id: string): Promise<EventType | null> {
    try {
        const res = await fetch(`https://khotixs.istad.co/event-ticket/api/v1/events/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching event metadata:", error);
        return null;
    }
}

export async function generateMetadata(
    {params}: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {

    const {id} = await params;
    const event = await getEventMetadata(id);

    if (!event) {
        return {
            title: "Event Not Found",
        };
    }

    const previousImages = (await parent).openGraph?.images || [];

    return {
        title: event.eventTitle,
        description: event.description,
        openGraph: {
            title: event.eventTitle,
            description: event.description,
            images: [event.thumbnail, ...previousImages],
        },
    };
}

export default async function EventPage({params}: Props) {
    const {id} = await params;
    return <EventDetails id={id}/>;
}