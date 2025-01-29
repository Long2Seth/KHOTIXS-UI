import { Suspense } from "react";
import EventDetailsSkeleton from "@/components/customer/event/EventDetailsSkeleton";
import EventDetails from "@/components/customer/event/EventDetail";
import { EventType } from "@/lib/types/customer/event";

type PageProps = {
    params: Promise<{
        id: string
    }>;
};


// Fetch event data
const fetchEvent = async (id: string): Promise<EventType> => {
    const res = await fetch(`/event-ticket/api/v1/events/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch event data");
    }

    return res.json();
};

export default async function EventPage({ params }: PageProps) {
    const { id } = await params; // Await params

    return (
        <Suspense fallback={<EventDetailsSkeleton />}>
            <EventContent id={id} />
        </Suspense>
    );
}

async function EventContent({ id }: { id: string }) {
    try {
        const event = await fetchEvent(id);
        return <EventDetails event={event} />;
    } catch {
        return (
            <div className="p-4 text-center">
                <h1 className="text-xl font-bold text-red-600">Error Loading Event</h1>
                <p className="text-gray-600">Unable to load event details. Please try again later.</p>
            </div>
        );
    }
}
