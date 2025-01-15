'use client'
import React, { useState, useEffect } from 'react';
import EventDetailsSkeleton from "@/components/customer/event/EventDetailsSkeleton";
import EventDetails from "@/components/customer/event/EventDetail";
import { EventType } from "@/lib/customer/event";

type Props = {
    params: Promise<{
        id: string
    }>;
    searchParams: {
        [key: string]: string | string[] | undefined
    };
};

const getData = async (id: string) => {
    const res = await fetch(`/event-ticket/api/v1/events/${id}`);
    const data = await res.json();
    console.log(data);
    return data;
};

export default function EventPage(props: Props) {
    const [isLoading, setIsLoading] = useState(true);
    const [event, setEvent] = useState<EventType | null>(null);
    const [params, setParams] = useState<{ id: string } | null>(null);

    useEffect(() => {
        const unwrapParams = async () => {
            const resolvedParams = await props.params;
            setParams(resolvedParams);
        };
        unwrapParams();
    }, [props.params]);

    useEffect(() => {
        if (params) {
            const fetchData = async () => {
                const data = await getData(params.id);
                setEvent(data);
                setIsLoading(false);
            };
            fetchData();
        }
    }, [params]);

    return isLoading ? <EventDetailsSkeleton /> : <EventDetails event={event} />;
}