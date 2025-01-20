'use client'

import Image from "next/image"
import { MinusIcon, PlusIcon } from 'lucide-react'
import Link from "next/link"
import { useRouter } from "next/navigation";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import {
    RiArrowRightLine,
    RiCalendarLine,
    RiErrorWarningLine,
    RiFirefoxLine,
    RiHome5Line,
    RiMap2Line,
    RiTimerLine
} from "react-icons/ri"
import { Button } from "@/components/ui/button"
import { EventType } from "@/lib/customer/event";
import { useState, useEffect } from "react";

type TicketType = {
    id: string
    name: string
    event: string
    price: number
    type: string
    soldOut?: boolean
    quantity: number
    capacity: number
    date: string
    mmm: string
    dd: string
    yyyy: string
}

type EventDetailsProps = {
    event: EventType | null;
};

export default function EventDetails({ event }: EventDetailsProps) {

    const router = useRouter()
    const [tickets, setTickets] = useState<TicketType[]>(event?.tickets?.map(ticket => ({
        ...ticket,
        price: Number(ticket.price),
        name: ticket.ticketTitle,
        event: event?.eventTitle || '',
        quantity: 0,
        date: event?.startedDate || '',
        mmm: '',
        dd: '',
        yyyy: ''
    })) || [])

    const updateQuantity = (id: string, increment: boolean) => {
        // Use functional update to get the latest state
        setTickets(prevTickets => {
            const updatedTickets = prevTickets.map(ticket => {
                if (ticket.id === id) {
                    const newQuantity = increment 
                    ? Math.min(ticket.quantity + 1, ticket.capacity) 
                    : Math.max(0, ticket.quantity - 1);

                    fetch('http://localhost:8084/api/v1/order-saga/reserve', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            userId: 'a48aaccf-ef41-41a1-a8fe-1f290ce20e02',
                            ticketId: ticket.id,
                            quantity: newQuantity,
                        }),
                    })
                        .then(res => res.json())
                        .then(data => console.log('API Response:', data))
                        .catch(error => console.error('Error updating quantity:', error));
    
                    return { ...ticket, quantity: newQuantity };
                }
                return ticket;
            });

            return updatedTickets;
        });
    };

    useEffect(() => {
        const handlePlaceOrder = () => {
            const getTickets = tickets.filter(ticket => ticket.quantity > 0)

            const userId: string = 'a48aaccf-ef41-41a1-a8fe-1f290ce20e02'

            const reserveTickets = getTickets.map(ticket => ({
                userId: userId,
                ticketId: ticket.id,
                quantity: ticket.quantity,
            }))

            fetch('http://localhost:8084/api/v1/order-saga/reserve', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reserveTickets),
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(error => console.log('Error placing order:', error))

            console.log(reserveTickets)
        }

        handlePlaceOrder()
    }, [tickets]);


    const total = tickets.reduce((sum: number, ticket: TicketType) => sum + (ticket.price * ticket.quantity), 0)

    return (
        <main className={`w-full container mx-auto px-5 lg:px-10 `}>
            <div className="py-7">
                {/* Breadcrumb */}
                <section className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink>
                                    <Link href="/"><RiHome5Line /></Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink>
                                    <Link href="/">Events</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-primary-color dark:text-primary-color">Event
                                    Details</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </section>
                {/*Event title*/}
                <section className="flex gap-5 mb-7 items-center">
                    <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text uppercase">{event?.eventTitle}</h1>
                    <div
                        className="flex items-center rounded-[6px] px-2 text-label-premium h-6 font-bold text-base bg-blue-100 bg-opacity-70 space-x-1">
                        <RiFirefoxLine />
                        <p>Upcoming</p>
                    </div>
                </section>
                {/*Event details*/}
                <section className="grid md:gap-2 lg:gap-8 md:grid-cols-2">
                    <div>
                        {/* cover of event*/}
                        <section className="relative mb-6  overflow-hidden rounded-lg">
                            <Image
                                src={event?.thumbnail || '/event/event-banner.png'}
                                unoptimized
                                alt="Event banner"
                                width={800}
                                height={600}
                                className="object-cover rounded-xl"
                                priority
                                placeholder="blur"
                                blurDataURL="/event/event-banner.png"
                            />
                        </section>

                        {/* event date and time*/}
                        <section className="space-y-6">
                            <section className="space-y-2">
                                <h2 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-secondary-color-text ">DATE
                                    AND TIME</h2>
                                <div
                                    className="flex gap-2 items-center dark:text-label-text-primary text-label-description">
                                    <RiCalendarLine className="w-5" />
                                    <p className="text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">{event?.startedDate}</p>
                                </div>
                                <div
                                    className="flex gap-2 items-center dark:text-label-text-primary text-label-description">
                                    <RiTimerLine className="w-5" />
                                    <p className="text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">5:00PM-10:00PM</p>
                                </div>
                            </section>

                            {/* event location*/}
                            <section className="space-y-2">
                                <h2 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-secondary-color-text  ">LOCATION</h2>
                                <div
                                    className="flex gap-2 items-center dark:text-label-text-primary text-label-description">
                                    <RiMap2Line className="w-5" />
                                    <p className="  text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">{event?.location}</p>
                                </div>
                            </section>

                            {/* event description*/}
                            <section className="space-y-2">
                                <h2 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-secondary-color-text">EVENT
                                    DESCRIPTION</h2>
                                <p className="text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color ">{event?.description}</p>
                            </section>
                            {/*Note*/}
                            <p className="text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">ចំណាំ: សូមបង្ហាញកូដ QR ទៅកាន់ក្រុមការងារដើម្បីផ្ទៀងផ្ទាត់សំបុត្រមុនចូលទស្សនា។</p>
                        </section>
                    </div>
                    {/*Tickets*/}
                    <div>
                        {tickets.length > 0 && (
                            <div className="space-y-4 mt-4 md:mt-0">
                                {tickets.map((ticket) => (
                                    <div key={ticket.id} className="flex rounded-xl border">
                                        <section className="flex-none relative h-24 w-24 md:h-20 md:w-28 lg:h-28 lg:w-32 rounded-xl overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url('/event/${ticket.type.toLowerCase()}-ticket.png')` }}>
                                            <div className="absolute inset-0 flex flex-col justify-center items-center"></div>
                                        </section>

                                        <div className="grow flex justify-between items-center p-2 lg:p-4">
                                            <section className="">
                                                <h3 className="text-title-color text-base md:text-lg xl:text-xl font-bold uppercase dark:text-secondary-color-text">{event?.eventTitle}</h3>
                                                <p className="text-base md:text-lg xl:text-xl uppercase line-clamp-1 dark:text-label-text-primary text-label-description">{ticket.name}</p>
                                                <div className="flex space-x-2 mt-1">
                                                    {ticket.price === 0 ? (
                                                        <>
                                                            <p className="rounded-[6px] bg-label-free lg:px-2 lg:py-1 px-1.5 py-0.5 text-sm font-bold text-label-text-primary uppercase">
                                                                Free
                                                            </p>
                                                            {ticket.soldOut && <p className="rounded-[6px] dark:bg-label-text-primary bg-red-100 dark:bg-opacity-70 bg-opacity-70 lg:px-2 lg:py-1 px-1.5 py-0.5 text-sm font-bold text-red-600">SOLD OUT</p>}
                                                        </>
                                                    ) : (
                                                        <>
                                                            <p className="rounded-[6px] bg-blue-100 bg-opacity-70 hover:bg-blue-100 hover:bg-opacity-70 lg:px-2 lg:py-1 px-1.5 py-0.5 text-sm font-bold text-label-premium">${ticket.price.toFixed(2)}</p>
                                                            {ticket.soldOut && <p className="rounded-[6px] dark:bg-label-text-primary bg-red-100 dark:bg-opacity-70 bg-opacity-70 lg:px-2 lg:py-1 px-1.5 py-0.5 text-sm font-bold text-red-600">SOLD OUT</p>}
                                                        </>
                                                    )}
                                                </div>
                                            </section>

                                            {/*Count Button*/}
                                            <section className="flex items-center gap-1 lg:gap-2">
                                                <Button
                                                    className="p-1 bg-blue-100 bg-opacity-70 hover:bg-blue-100 hover:bg-opacity-70 text-label-premium h-[20px] lg:h-[25px] rounded-[4px]"
                                                    onClick={() => updateQuantity(ticket.id, false)}
                                                    disabled={ticket.quantity === 0}
                                                >
                                                    <MinusIcon className="h-2 w-2" />
                                                </Button>
                                                <span className="w-4 font-bold text-center">{ticket.quantity}</span>
                                                <Button
                                                    className="p-1 bg-blue-100 bg-opacity-70 hover:bg-blue-100 hover:bg-opacity-70 text-label-premium h-[20px] lg:h-[25px] rounded-[4px]"
                                                    size="sm"
                                                    onClick={() => updateQuantity(ticket.id, true)}
                                                >
                                                    <PlusIcon className="h-2 w-2" />
                                                </Button>
                                            </section>
                                        </div>
                                    </div>
                                ))}

                                {/* Sub Total */}
                                <section className="flex justify-between items-center py-4">
                                    <hr className="border w-full" />
                                    <span className="font-bold w-60 text-center dark:text-label-text-primary text-label-description dark:text-label-primary">Sub Total</span>
                                    <hr className="border w-full" />
                                </section>

                                {/* Total */}
                                <section className="mt-6 space-y-4">
                                    <div className="flex items-center justify-between border p-4 pl-6 rounded-[8px]">
                                        <span className="text-label-paid text-lg md:text-2xl xl:text-4xl font-bold">${total.toFixed(2)}</span>
                                        <Button
                                            onClick={() => router.push('/order-info-requirement')}
                                            className="bg-primary-color hover:bg-primary-color hover:bg-opacity-85 text-label-text-primary rounded-[6px] h-[45px] font-bold">
                                            Place Order <RiArrowRightLine />
                                        </Button>
                                    </div>

                                    <div className="flex items-center space-x-2 dark:text-label-text-primary text-label-description">
                                        <RiErrorWarningLine className="w-5" />
                                        <p className="text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">We accept KHQR & Credit / Debit Card</p>
                                    </div>
                                </section>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </main>
    )
}
