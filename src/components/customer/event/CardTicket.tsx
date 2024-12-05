import React, {useState} from 'react';
import {Button} from "@/components/ui/button";
import {MinusIcon, PlusIcon} from "lucide-react";
import {tickets} from "@/lib/customer/tickets";

export  const CardTicket = () => {
    const [ticket, setTicket] = useState(tickets);
    const updateQuantity = (id: string, increment: boolean) => {
        setTicket(ticket.map(ticket => {
            if (ticket.id === id) {
                const newQuantity = increment ? ticket.quantity + 1 : Math.max(0, ticket.quantity - 1)
                return { ...ticket, quantity: newQuantity }
            }
            return ticket
        }))
    }
    return (
        <section>
            {tickets.map((ticket) => (
                <div key={ticket.id}
                     className="flex rounded-xl border">
                    <section
                        className="flex-none relative h-24 w-24 md:h-20 md:w-28 lg:h-28 lg:w-32 rounded-xl overflow-hidden bg-cover bg-center"
                        style={{backgroundImage: `url('/event/ticket.png')`}}
                    >
                        <div className="absolute inset-0 flex flex-col justify-center items-center">
                            <h3 className="text-sm sm:text-md lg:text-lg font-semibold text-white">{ticket.dd} {ticket.mmm}</h3>
                            <p className="text-xs text-muted-foreground text-white">{ticket.date} {ticket.yyyy}</p>
                        </div>
                    </section>
                    <div className="grow flex justify-between items-center p-2 lg:p-4">
                        <section className="">
                            <h3 className="text-sm sm:text-md lg:text-lg font-semibold uppercase">{ticket.name}</h3>
                            <p className="text-xs lg:text-base uppercase line-clamp-1 dark:text-label-text-primary text-label-description">{ticket.event}</p>
                            <div className="flex space-x-2 mt-1">
                                <p className="rounded-[6px] bg-blue-100 bg-opacity-70 hover:bg-blue-100 hover:bg-opacity-70 lg:px-2 lg:py-1 px-1.5 py-0.5 text-[10px] lg:text-xs font-bold text-label-premium">${ticket.price.toFixed(2)}</p>
                                {ticket.soldOut ? (
                                    <span
                                        className="rounded-[6px] dark:bg-label-text-primary bg-red-100 dark:bg-opacity-70 bg-opacity-70 lg:px-2 lg:py-1 px-1.5 py-0.5 text-[10px] lg:text-xs font-bold text-red-600">SOLD OUT
                                                </span>
                                ) : (<></>)}
                                {ticket.soldOut ? (
                                    <span
                                        className="rounded-[6px] dark:bg-label-text-primary bg-red-100 dark:bg-opacity-70 bg-opacity-70 lg:px-2 lg:py-1 px-1.5 py-0.5 text-[10px] lg:text-xs font-bold text-red-600">SOLD OUT
                                                </span>
                                ) : (<></>)}
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
                            <span className="w-4 font-bold text-center">{ticket.quantity}</span>
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
        </section>
    );
};