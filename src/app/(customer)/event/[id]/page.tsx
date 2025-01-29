import { Suspense } from 'react';
import EventDetailsSkeleton from "@/components/customer/event/EventDetailsSkeleton";
import EventDetails from "@/components/customer/event/EventDetail";
import { EventType } from "@/lib/types/customer/event";
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
    params: {
        id: string;
    };
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

const getData = async (id: string): Promise<EventType | null> => {
    try {
        const res = await fetch(`${apiUrl}/event-ticket/api/v1/events/${id}`, {
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
        return null;
    }
};

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { id } = params;

    try {
        const event = await getData(id);
        if (!event) {
            return {
                title: 'Event not found - KHOTIXS',
                description: 'Unable to fetch event details.',
            };
        }

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
    const { id } = params;

    return (
        <Suspense fallback={<EventDetailsSkeleton />}>
            <EventContent id={id} />
        </Suspense>
    );
}

async function EventContent({ id }: { id: string }) {
    const event = await getData(id);

    if (!event) {
        return (
            <div className="p-4 text-center">
                <h1 className="text-xl font-bold text-red-600 uppercase">Error Loading Event</h1>
                <p className="dark:text-white text-gray-600">Unable to load event details. Please try again later.</p>
            </div>
        );
    }

    return <EventDetails event={event} />;
}