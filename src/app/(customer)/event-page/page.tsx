'use client'
import React, { useState } from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {MinusIcon, PlusIcon} from "lucide-react";
import Link from "next/link";

interface TicketType {
    id: string
    name: string
    price: number
    soldOut?: boolean
    quantity: number
}

export default function EventDetails() {
    const [tickets, setTickets] = useState<TicketType[]>([
        { id: 'vip', name: 'VIP - TICKETS', price: 60.00, soldOut: true, quantity: 0 },
        { id: 'premium', name: 'PREMIUM - TICKETS', price: 30.00, soldOut: true, quantity: 0 },
        { id: 'standing', name: 'STANDING - TICKETS', price: 15.00, soldOut: false, quantity: 0 }
    ])

    const updateQuantity = (id: string, increment: boolean) => {
        setTickets(tickets.map(ticket => {
            if (ticket.id === id) {
                const newQuantity = increment ? ticket.quantity + 1 : Math.max(0, ticket.quantity - 1)
                return { ...ticket, quantity: newQuantity }
            }
            return ticket
        }))
    }

    const total = tickets.reduce((sum: number, ticket: TicketType) => sum + (ticket.price * ticket.quantity), 0)

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto px-4 py-8">
                <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
                    <Link href="/" className="hover:text-primary">Home</Link>
                    <span>/</span>
                    <a href="/events" className="hover:text-primary">Events</a>
                    <span>/</span>
                    <span className="text-primary">Event Details</span>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    <div>
                        <h1 className="mb-6 text-3xl font-bold tracking-tight">THE Q RISE OF THE QUEEN</h1>
                        <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-lg">
                            <Image
                                src="/placeholder.svg?height=600&width=800"
                                alt="Event banner"
                                width={800}
                                height={600}
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h2 className="text-lg font-semibold">DATE AND TIME</h2>
                                <p className="text-muted-foreground">30 November 2024, 5:00PM</p>
                            </div>

                            <div>
                                <h2 className="text-lg font-semibold">LOCATION</h2>
                                <p className="text-muted-foreground">CSTAD Auditorium</p>
                            </div>

                            <div>
                                <h2 className="text-lg font-semibold">EVENT DESCRIPTION</h2>
                                <p className="text-muted-foreground">
                                    Join us for an unforgettable evening at THE Q RISE OF THE QUEEN - AOK SOKUNKANHA SOLO TOUR CONCERT.
                                    Experience an amazing performance in a spectacular venue.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="p-6">
                            <h2 className="mb-6 text-xl font-semibold">Select Tickets</h2>
                            <div className="space-y-4">
                                {tickets.map((ticket) => (
                                    <div key={ticket.id} className="flex items-center justify-between rounded-lg border p-4">
                                        <div>
                                            <h3 className="font-medium">{ticket.name}</h3>
                                            <p className="text-sm text-muted-foreground">${ticket.price.toFixed(2)}</p>
                                        </div>
                                        {ticket.soldOut ? (
                                            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
                        SOLD OUT
                      </span>
                                        ) : (
                                            <div className="flex items-center gap-3">
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    onClick={() => updateQuantity(ticket.id, false)}
                                                    disabled={ticket.quantity === 0}
                                                >
                                                    <MinusIcon className="h-4 w-4" />
                                                </Button>
                                                <span className="w-8 text-center">{ticket.quantity}</span>
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    onClick={() => updateQuantity(ticket.id, true)}
                                                >
                                                    <PlusIcon className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                ))}

                                <div className="mt-6 space-y-4">
                                    <div className="flex justify-between border-t pt-4">
                                        <span className="font-medium">Total</span>
                                        <span className="font-medium">${total.toFixed(2)}</span>
                                    </div>
                                    <Button className="w-full" size="lg">
                                        Place Order
                                    </Button>
                                    <p className="text-center text-sm text-muted-foreground">
                                        We accept KHQR & Credit / Debit Card
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
