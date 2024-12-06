'use client'
import React, { useState, useEffect } from 'react';
import EventDetailsSkeleton from "@/components/customer/event/EventDetailsSkeleton";
import EventDetails from "@/components/customer/event/EventDetail";

type EventPageParams = {
    params: Promise<{ id: string }>;
}

export default function EventPage({ params }: EventPageParams) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchEventData = async () => {
            await params;
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay
            setIsLoading(false);
        };
        fetchEventData();
    }, [params]);

    if (isLoading) {
        return <EventDetailsSkeleton />;
    }

    return <EventDetails />;
}