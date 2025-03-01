'use client'
import Image from "next/image"
import {MinusIcon, PlusIcon} from 'lucide-react'
import Link from "next/link"
import {useRouter} from "next/navigation";
import { format, parseISO } from 'date-fns';
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
import {Button} from "@/components/ui/button"
import {useEffect, useState} from "react";
import {EventType, Ticket} from "@/lib/types/customer/event";
import { useGetEventByIdQuery } from "@/redux/feature/user/Event";
import EventDetailsSkeleton from "@/components/customer/event/EventDetailsSkeleton";

type PropsType = {
    id: string;
}

export default function EventDetails({id}: PropsType) {
    const { data: eventData, error, isLoading } = useGetEventByIdQuery(id);
    const [tickets, setTickets] = useState<Ticket[]>([]);

    useEffect(() => {
        if (eventData) {
            setTickets(
                eventData.tickets.map((ticket) => ({
                    ...ticket,
                    price: Number(ticket.price),
                    quantity: 0,
                }))
            );
        }
    }, [eventData]);

    const updateQuantity = (id: string, increment: boolean) => {
        setTickets((prevTickets) =>
            prevTickets.map((ticket) => {
                if (ticket.id === id) {
                    const newQuantity = increment
                        ? Math.min(ticket.quantity + 1, ticket.capacity)
                        : Math.max(ticket.quantity - 1, 0);
                    return {...ticket, quantity: newQuantity};
                }
                return ticket;
            })
        );
    };

    const total = tickets.reduce(
        (sum, ticket) => sum + ticket.price * ticket.quantity,
        0
    );

    const formatDate = (dateString: string | undefined) => {
        if (!dateString) return '';
        const date = parseISO(dateString);
        return format(date, 'yyyy-MM-dd');
    };

    const formatTime = (start: string | undefined, end: string | undefined) => {
        if (!start || !end) return '';
        const startTime = format(parseISO(start), 'h:mmaaa');
        const endTime = format(parseISO(end), 'h:mmaaa');
        return `${startTime}-${endTime}`;
    };

    if (isLoading) return <EventDetailsSkeleton />;
    if (error) return <p>Error loading event details</p>;

    return (
        <main className={`container mx-auto px-5 lg:px-10 `}>
            <div className="py-7">
                {/* Breadcrumb */}
                <section className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink>
                                    <Link href="/"><RiHome5Line/></Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator/>
                            <BreadcrumbItem>
                                <BreadcrumbLink>
                                    <Link href="/">Events</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator/>
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-primary-color dark:text-primary-color">Event
                                    Details</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </section>

                {/*Event title*/}
                <section className="sm:flex gap-5 mb-7">
                    <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text uppercase">{eventData?.eventTitle}</h1>
                    <div
                        className="flex w-24 sm:w-28 items-center rounded-[6px] px-2 text-label-premium h-6 mt-1.5 font-bold text-base bg-blue-100 bg-opacity-70 space-x-1">
                        <RiFirefoxLine/>
                        <p className="text-[12px] sm:text-base">Upcoming</p>
                    </div>
                </section>
                {/*Event details*/}
                {tickets.length > 0 && (
                    <section className="grid md:gap-2 lg:gap-8 lg:grid-cols-2">
                        <div>
                            {/* cover of event*/}
                            <section className="relative mb-6 h-[200px] md:h-[370px] w-full justify-center flex overflow-hidden rounded-lg">
                                <Image
                                    src={eventData?.thumbnail || '/event/event-banner.png'}
                                    unoptimized
                                    alt="Event banner"
                                    width={800}
                                    height={600}
                                    className="object-cover h-[200px] md:h-[370px] w-full rounded-xl"
                                    priority
                                />
                            </section>

                            {/* event date and time*/}
                            <section className="space-y-6">
                                <section className="space-y-2">
                                    <h2 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-secondary-color-text">DATE
                                        AND TIME</h2>
                                    <div
                                        className="flex gap-2 items-center dark:text-label-text-primary text-label-description">
                                        <RiCalendarLine className="w-5"/>
                                        <p className="text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">{formatDate(eventData?.startedDate)}</p>
                                    </div>
                                    <div
                                        className="flex gap-2 items-center dark:text-label-text-primary text-label-description">
                                        <RiTimerLine className="w-5"/>
                                        <p className="text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">
                                            {formatTime(eventData?.startedDate, eventData?.endedDate)}
                                        </p>
                                    </div>
                                </section>

                                {/* event location*/}
                                <section className="space-y-2">
                                    <h2 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-secondary-color-text  ">LOCATION</h2>
                                    <div
                                        className="flex items-start dark:text-label-text-primary text-label-description">
                                        <div className="w-8 mt-1.5">
                                            <RiMap2Line className="w-5"/>
                                        </div>
                                        <p className="text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">{eventData?.location}</p>
                                    </div>
                                </section>

                                {/* event description*/}
                                <section className="space-y-2">
                                    <h2 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-secondary-color-text">EVENT
                                        DESCRIPTION</h2>
                                    <p className="text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color ">
                                        {eventData?.description}
                                    </p>
                                </section>
                                {/*Note*/}
                                <p className="text-description-color text-base md:text-lg xl:text-xl text-red-700">ចំណាំ:
                                    សូមបង្ហាញកូដ QR
                                    ទៅកាន់ក្រុមការងារដើម្បីផ្ទៀងផ្ទាត់សំបុត្រមុនចូលទស្សនា។</p>
                            </section>
                        </div>
                        {/*Tickets*/}
                        <div>
                            {tickets.length > 0 && (
                                <div className="space-y-4 mt-4 lg:mt-0">
                                    {tickets.map((ticket) => (
                                        <div key={ticket.id}
                                             className="flex rounded-xl border">
                                            {ticket.type === "VIP" ? (
                                                <section
                                                    className="flex-none relative h-24 w-24 md:h-28 md:w-32 lg:h-28 lg:w-32 rounded-xl overflow-hidden bg-cover bg-center"
                                                    style={{backgroundImage: `url('/event/vip-ticket.png')`}}
                                                >
                                                    <div
                                                        className="absolute inset-0 flex flex-col justify-center items-center">
                                                    </div>
                                                </section>
                                            ) : ticket.type === "PREMIUM" ? (
                                                <section
                                                    className="flex-none relative h-24 w-24 md:h-28 md:w-32 lg:h-28 lg:w-32 rounded-xl overflow-hidden bg-cover bg-center"
                                                    style={{backgroundImage: `url('/event/premium-ticket.png')`}}
                                                >
                                                    <div
                                                        className="absolute inset-0 flex flex-col justify-center items-center">
                                                    </div>
                                                </section>
                                            ) : ticket.type === "REGULAR" ? (
                                                <section
                                                    className="flex-none relative h-24 w-24 md:h-28 md:w-32 lg:h-28 lg:w-32 rounded-xl overflow-hidden bg-cover bg-center"
                                                    style={{backgroundImage: `url('/event/regular-ticket.png')`}}
                                                >
                                                    <div
                                                        className="absolute inset-0 flex flex-col justify-center items-center">
                                                    </div>
                                                </section>
                                            ) : (
                                                <section
                                                    className="flex-none relative h-24 w-24 md:h-28 md:w-32 lg:h-28 lg:w-32 rounded-xl overflow-hidden bg-cover bg-center"
                                                    style={{backgroundImage: `url('/event/free-ticket.png')`}}
                                                >
                                                    <div
                                                        className="absolute inset-0 flex flex-col justify-center items-center">
                                                    </div>
                                                </section>
                                            )}

                                            <div className="grow flex justify-between items-center p-2 md:p-5 lg:p-3">
                                                <section className="">
                                                    <h3 className="text-title-color text-[12px] sm:text-base md:text-lg xl:text-xl font-bold uppercase dark:text-secondary-color-text">{ticket.type}-
                                                        ticket</h3>
                                                    <p className="text-description-color text-[12px] sm:text-base md:text-lg xl:text-xl uppercase line-clamp-1 dark:text-label-text-primary ">{eventData?.eventTitle}</p>
                                                    <div className="flex space-x-2 mt-1">
                                                        {ticket.isSoldOut === 'true' ? (
                                                            <>
                                                                <p className="rounded-[6px] bg-label-free lg:px-2 lg:py-1 px-1.5 py-0.5 text-sm font-bold text-label-text-primary uppercase">
                                                                    Free</p>
                                                                {ticket.isSoldOut === 'true' ? (
                                                                    <p className="rounded-[6px] dark:bg-label-text-primary bg-red-100 dark:bg-opacity-70 bg-opacity-70 lg:px-2 lg:py-1 px-1.5 py-0.5 text-sm font-bold text-red-600">SOLD
                                                                        OUT</p>
                                                                ) : (<></>)}
                                                            </>
                                                        ) : (
                                                            <>
                                                                <p className="rounded-[6px] bg-blue-100 bg-opacity-70 hover:bg-blue-100 hover:bg-opacity-70 lg:px-2 lg:py-1 px-1.5 py-0.5 text-sm font-bold text-label-premium">${ticket.price.toFixed(2)}</p>
                                                                {ticket.isSoldOut === 'true' ? (
                                                                    <p className="rounded-[6px] dark:bg-label-text-primary bg-red-100 dark:bg-opacity-70 bg-opacity-70 lg:px-2 lg:py-1 px-1.5 py-0.5 text-sm font-bold text-red-600">SOLD
                                                                        OUT</p>
                                                                ) : (<></>)}
                                                            </>)}

                                                    </div>
                                                </section>


                                                {/*Count Button*/}
                                                <section className="flex items-center gap-1 lg:gap-2">
                                                    <Button
                                                        className="p-1 bg-blue-100 bg-opacity-70 hover:bg-blue-100 hover:bg-opacity-70 text-label-premium h-[20px] lg:h-[25px] rounded-[4px]"
                                                        onClick={() => updateQuantity(ticket.id, false)}
                                                        disabled={ticket.quantity === 0}
                                                    >
                                                        <MinusIcon className="h-2 w-2"/>
                                                    </Button>
                                                    <span
                                                        className="w-4 text-[12px] sm:text-base font-bold text-center">{ticket.quantity}</span>
                                                    <Button
                                                        className="p-1 bg-blue-100 bg-opacity-70 hover:bg-blue-100 hover:bg-opacity-70 text-label-premium h-[20px] lg:h-[25px] rounded-[4px]"
                                                        size="sm"
                                                        onClick={() => updateQuantity(ticket.id, true)}
                                                    >
                                                        <PlusIcon className="h-2 w-2"/>
                                                    </Button>
                                                </section>
                                            </div>
                                        </div>
                                    ))}
                                    {/*Sub Total*/}
                                    <section className="flex justify-between items-center py-4">
                                        <hr className="border w-full"/>
                                        <span
                                            className="font-bold w-60 text-center dark:text-label-text-primary text-label-description dark:text-label-primary">Sub Total</span>
                                        <hr className="border w-full"/>
                                    </section>
                                    {/*Total*/}
                                    <section className="mt-6 space-y-4">
                                        {eventData?.tickets.length === 0 ? (
                                            <section
                                                className="flex items-center justify-between border p-4 pl-6 rounded-[8px]">
                                                <span
                                                    className="font-bold text-lg lg:text-2xl text-label-free uppercase">$ free</span>
                                                <Button
                                                    className="bg-primary-color hover:bg-primary-color hover:bg-opacity-85 text-label-text-primary rounded-[6px] h-[45px] font-bold">
                                                    Place Order <RiArrowRightLine/>
                                                </Button>
                                            </section>
                                        ) : (
                                            <section
                                                className="flex items-center justify-between border p-4 pl-6 rounded-[8px]">
                                            <span
                                                className="font-bold text-lg lg:text-2xl text-label-paid">${total.toFixed(2)}</span>
                                                <Button
                                                    className="bg-primary-color hover:bg-primary-color hover:bg-opacity-85 text-label-text-primary rounded-[6px] h-[45px] font-bold">Place
                                                    Order <RiArrowRightLine/>
                                                </Button>
                                            </section>
                                        )}
                                        <div
                                            className="flex items-center space-x-2 dark:text-label-text-primary text-label-description">
                                            <RiErrorWarningLine className="w-5"/>
                                            <p className="text-centertext-description-color text-base md:text-lg xl:text-xl">
                                                We accept KHQR & Credit / Debit Card
                                            </p>
                                        </div>
                                    </section>
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {/*Event details*/}
                {tickets.length == 0 && (
                    <section className="grid grid-cols-1 gap-x-4 md:gap-x-4 lg:gap-x-8 md:grid-cols-2">

                        {/* cover of event*/}
                        <section className="relative mb-6 justify-center flex col-span-1 md:col-span-1 h-[200px] md:h-[370px] w-full overflow-hidden rounded-lg">
                            <Image
                                src={eventData?.thumbnail || '/event/event-banner.png'}
                                unoptimized
                                alt="Event banner"
                                width={800}
                                height={600}
                                className="object-cover h-[200px] md:h-[370px] w-full rounded-xl"
                                priority
                            />
                        </section>

                        {/* event date and time*/}
                        <section className="space-y-6 col-span-1">
                            <section className="space-y-2">
                                <h2 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-secondary-color-text">DATE
                                    AND TIME</h2>
                                <div
                                    className="flex gap-2 items-center dark:text-label-text-primary text-label-description">
                                    <RiCalendarLine className="w-5"/>
                                    <p className="text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">{formatDate(eventData?.startedDate)}</p>
                                </div>
                                <div
                                    className="flex gap-2 items-center dark:text-label-text-primary text-label-description">
                                    <RiTimerLine className="w-5"/>
                                    <p className="text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">
                                        {formatTime(eventData?.startedDate, eventData?.endedDate)}
                                    </p>
                                </div>
                            </section>

                            {/* event location*/}
                            <section className="space-y-2">
                                <h2 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-secondary-color-text ">LOCATION</h2>
                                <div
                                    className="flex items-start dark:text-label-text-primary text-label-description">
                                    <div className="w-10 mt-1.5">
                                        <RiMap2Line className="w-5"/>
                                    </div>
                                    <p className="text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">{eventData?.location}</p>
                                </div>
                            </section>
                        </section>

                        {/* event description*/}
                        <section className="col-span-1 md:col-span-2 space-y-2 mt-6 md:mt-0">
                            <h2 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-secondary-color-text">EVENT
                                DESCRIPTION</h2>
                            <p className="text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color ">
                                {eventData?.description}
                            </p>
                        </section>
                    </section>
                )}
            </div>
        </main>
    );
}