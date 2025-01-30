import EventDetails from "@/components/customer/event/EventDetail";
import type {Metadata, ResolvingMetadata} from "next";
import {EventType} from "@/lib/types/customer/event";

const baseUrl = "http://localhost:8001"

type Props = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

async function getEventMetadata(id: string): Promise<EventType | null> {
    try {
        const res = await fetch(`https://khotixs.istad.co/event-ticket/api/v1/events/${id}`);
        const data = await res.json();
        console.log("EVENT DATA: ", data);
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
    console.log("EVENT ID MMMM : ", id);
    const event = await getEventMetadata(id);

    console.log(" EVENT METADATA : ", event);

    if (!event) {
        return {
            title: "Event Not Found",
        };
    }

    console.log("  EVENT TITLE: ", event.eventTitle);
    console.log("  EVENT DESCRIPTION: ", event.description);
    console.log("  EVENT THUMBNAIL: ", event.thumbnail);

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
    console.log("EVENT ID: ", id);
    return <EventDetails id={id}/>;
}