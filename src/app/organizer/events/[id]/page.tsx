'use client';
import React, { useEffect, useState } from 'react';
import EventDetailsPage from '@/components/organizer/event/DetailEvent';
import TicketTable from '@/components/organizer/event/TicketTable';

type Props = {
    params: {
        id: string;
    };
};

const TicketPage = ({ params }: Props) => {
    const { id } = params;
    const [eventData, setEventData] = useState(null);
    const [ticketData, setTicketData] = useState(null);

    const getData = async () => {
        try {
            const response = await fetch(`http://localhost:8000/event-ticket/api/v1/events/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setEventData(data);
            setTicketData(data.tickets);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        getData();
    }, [id]);

    return (
        <main className="container mx-auto w-full space-y-[30px] md:space-y-[50px] xl:space-y-[80px] my-[30px] md:my-[50px] xl:my-[80px]">
            <EventDetailsPage event={eventData} />
            <TicketTable event={eventData} />
        </main>
    );
};

export default TicketPage;