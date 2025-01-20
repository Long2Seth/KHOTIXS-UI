import { Suspense } from 'react';
import EventDetailsSkeleton from "@/components/customer/event/EventDetailsSkeleton";
import EventDetails from "@/components/customer/event/EventDetail";
import { EventType } from "@/lib/customer/event";
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
    params: {
        id: string;
    };
};

// Move the fetch function to a separate utility file or API layer
const getData = async (id: string): Promise<EventType> => {
    try {
        const res = await fetch(`http://localhost:8000/event-ticket/api/v1/events/${id}`, {
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch event data: ${res.status}`);
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching event:', error);
        throw error;
    }
};

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { id } = await params;
    
    try {
        const event = await getData(id);
        return {
            title: `${event.eventTitle} - KHOTIXS`,
            description: event.description,
            openGraph: {
                title: event.eventTitle,
                description: event.description,
                type: 'website',
            },
        };
    } catch (error) {
        return {
            title: 'Event not found - KHOTIXS',
            description: 'Unable to fetch event details.',
        };
    }
}

export default async function EventPage({ params }: Props) {
    const { id } = await params;

    return (
        <Suspense fallback={<EventDetailsSkeleton />}>
            <EventContent id={id} />
        </Suspense>
    );
}

async function EventContent({ id }: { id: string }) {
    try {
        const event = await getData(id);
        return <EventDetails event={event} />;
    } catch (error) {
        return (
            <div className="p-4 text-center">
                <h1 className="text-xl font-bold text-red-600">Error Loading Event</h1>
                <p className="text-gray-600">Unable to load event details. Please try again later.</p>
            </div>
        );
    }
}