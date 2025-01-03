'use client';

import * as React from "react";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {useRouter} from "next/navigation";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";

enum TicketType {
    VIP = 'VIP',
    REGULAR = 'REGULAR',
    PREMIUM = 'PREMIUM',
    FREE = 'FREE'
}

const ticketTypes = [TicketType.VIP, TicketType.REGULAR, TicketType.PREMIUM, TicketType.FREE];

type Ticket = {
    id: string;
    ticketTitle: string;
    type: TicketType;
    price: string;
    capacity: number;
    isPublish: boolean;
    isDisplay: boolean;
    isSoldOut: boolean;
};

type Event = {
    image: string;
    date: string;
    title: string;
    location: string;
    tickets: Ticket[];
    eventType: string;
};

type CardUpcomingProps = {
    event: Event;
};

export function CardComponent({event}: CardUpcomingProps) {
    const date = new Date(event.date);
    const month = date.toLocaleString('default', {month: 'short'});
    const day = String(date.getDate()).padStart(2, '0');
    const router = useRouter();

    const getLabelClass = (tickets: TicketType) => {
        switch (tickets) {
            case TicketType.VIP:
                return 'bg-label-vip';
            case TicketType.PREMIUM:
                return 'bg-label-premium';
            case TicketType.REGULAR:
                return 'bg-label-regular';
            case TicketType.FREE:
                return 'bg-label-free';
            default:
                return '';
        }
    };

    return (
        <section
            onClick={() => router.push(`/event`)}
            className="relative cursor-pointer bg-white dark:bg-backdrop-blur dark:bg-opacity-5 rounded-[10px] flex flex-col justify-start items-start h-[215px] max-w-[200px] sm:h-[215px] md:max-w-[330px] md:h-[340px] xl:max-w-[400px] xl:h-[450px] 2xl:max-w-[450px] md:p-0">

            <a className="group block overflow-hidden rounded-[10px]">
                <div className="rounded-tr-[10px] z-10 rounded-tl-[10px] w-full h-[50%] overflow-hidden">
                    <Image
                        width={100}
                        height={100}
                        unoptimized
                        src={`${event.image}`}
                        alt=""
                        className="z-10 rounded-tr-[10px] rounded-tl-[10px] w-full bg-cover bg-center transform transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
                <section
                    className="relative z-20 pb-5 flex w-full gap-3 h-[50%] md:w-full lg:gap-5 px-[10px] lg:pb-[25px] xl:my-5 xl:px-5">
                    <div className="text-center my-2">
                        <p className="text-title-color text-[11px] md:text-base xl:text-lg font-bold dark:text-secondary-color-text uppercase">{month}</p>
                        <p className="text-title-color text-[10px] md:text-lg xl:text-xl font-bold dark:text-secondary-color-text">{day}</p>
                    </div>
                    <div
                        className="absolute top-[30px] left-[16px] md:top-[47px] md:left-[11px] lg:top-[48px] lg:left-[13px] xl:top-[48px] xl:left-[30px]">
                        <hr className="w-[40px] md:w-[70px] lg:w-[70px] xl:w-[70px] rotate-90 bg-black"/>
                    </div>
                    <div className="h-auto w-full my-2">
                        <p className="text-title-color text-[10px] md:text-lg xl:text-xl font-bold line-clamp-3 uppercase dark:text-secondary-color-text">{event.title}</p>
                        <div className="flex relative xl:my-[10px]">
                            <HiOutlineLocationMarker
                                className="absolute top-[-5px] text-description-color my-2 w-[10px] h-[10px] md:w-[18px] md:h-[18px] lg:top-[-8px] lg:w-[20px] lg:h-[20px] xl:top-[-9px] xl:w-[25px] xl:h-[25px] dark:text-dark-description-color"/>
                            <p className="pl-[15px] md:ml-[15px] text-description-color text-[11px] md:text-base xl:text-lg lg:pl-[20px] lg:mb-5 lg:text-sm xl:pl-[25px] font-light dark:text-dark-description-color line-clamp-2">{event.location}</p>
                        </div>
                    </div>
                </section>
                {ticketTypes.map((type, typeIndex) => (
                    event.tickets
                        .filter(ticket => ticket.type === type)
                        .map((ticket, index) => (
                            <Badge
                                key={index}
                                className={`absolute bottom-2 w-14 justify-center right-${typeIndex * 16} dark:text-black text-white rounded-[6px] mx-2 ${getLabelClass(ticket.type)}`}>

                                {ticket.type}
                                price: {ticket.price}

                            </Badge>
                        ))
                ))}
            </a>
        </section>
    );
}