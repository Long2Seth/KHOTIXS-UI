'use client'
import React, {useState} from 'react';
import Image from "next/image";
import {MinusIcon, PlusIcon} from "lucide-react";
import Link from "next/link";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {RiCalendarLine, RiFirefoxLine, RiHome5Line, RiMap2Line, RiTimerLine} from "react-icons/ri";
import {Button} from "@/components/ui/button";

// import CoverEvent from "@/public/event/cover-event.jpg";

type TicketType = {
    id: string
    name: string
    event: string
    price: number
    soldOut?: boolean
    quantity: number
    date: string
    mmm: string
    dd: string
    yyyy: string
}

export default function EventDetails() {

    const [tickets, setTickets] = useState<TicketType[]>([
        { id: 'vip', event:'THE Q RISE OF THE QUEEN', name: 'VIP - TICKETS', price: 60.00, soldOut: true, quantity: 0, date: 'Friday',dd: '30', mmm: 'NOV',  yyyy: '2024'},
        { id: 'premium', event:'THE Q RISE OF THE QUEEN', name: 'PREMIUM - TICKETS', price: 30.00, soldOut: true, quantity: 0, date: 'Friday',dd: '30', mmm: 'NOV',  yyyy: '2024'},
        { id: 'standing', event:'THE Q RISE OF THE QUEEN', name: 'STANDING - TICKETS', price: 15.00, soldOut: false, quantity: 3, date: 'Friday',dd: '30', mmm: 'NOV',  yyyy: '2024'}
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
        <div className="min-h-screen bg-gray-50 dark:bg-black">
            <main className="container mx-auto lg:px-20 xl:px-32 px-2 py-8">
                <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
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
                                    <Link href="/event">Events</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator/>
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-secondary-color dark:text-secondary-color">Event
                                    Details</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="flex space-x-2">
                    <h1 className="mb-6 lg:text-3xl font-bold tracking-tight md:text-lg">THE Q RISE OF THE QUEEN </h1>
                    <div
                        className="flex items-center rounded-[6px] px-2 text-label-premium h-6 bg-khotixs-background-white font-bold text-xs lg:mt-2 space-x-1">
                        <RiFirefoxLine className=""/>
                        <p>Upcoming</p>
                    </div>
                </div>
                <div className="grid gap-8 lg:grid-cols-2">
                    <div>
                        {/* cover of event*/}
                        <div className="relative mb-6  overflow-hidden rounded-lg">
                            <Image
                                src="/event/cover-event.jpg"
                                alt="Event banner"
                                width={800}
                                height={600}
                                className="object-cover rounded-xl"
                                priority
                            />
                        </div>

                        {/* event date and time*/}
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-md lg:text-lg font-semibold">DATE AND TIME</h2>
                                <div className="flex gap-2 items-center">
                                    <RiCalendarLine className="w-5"/>
                                    <p className="text-xs md:text-base text-muted-foreground">30 November 2024</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <RiTimerLine className="w-5"/>
                                    <p className="text-xs md:text-base text-muted-foreground">5:00PM-10:00PM</p>
                                </div>
                            </div>

                            {/* event location*/}
                            <div className="space-y-2">
                                <h2 className="text-md lg:text-lg font-semibold">LOCATION</h2>
                                <div className="flex gap-2 items-center">
                                    <RiMap2Line className="w-5"/>
                                    <p className="text-xs md:text-base text-muted-foreground">កីឡាដ្ឋានខេត្ត វាលបែកចាន ក្រុងបាត់ដំបង</p>
                                </div>
                            </div>

                            {/* event description*/}
                            <div className="space-y-2">
                                <h2 className="text-md lg:text-lg font-semibold">EVENT DESCRIPTION</h2>
                                <p className="text-xs md:text-base text-muted-foreground">
                                    ក្តីស្រមៃដែលគ្រប់គ្នាៗចង់ឲកើតមានឡើង ក្តីស្រមៃនោះបានក្លាយជាការពិតហើយ! STING
                                    MUSICVERSE សូមនាំយក ការប្រគុំតន្រ្តី THE Q RISE OF THE QUEEN – AOK SOKUNKANHA SOLO
                                    TOUR CONCERT ទៅដល់ខេត្តបាត់ដំបង ( កីឡាដ្ឋានខេត្ត វាលបែកចាន ក្រុងបាត់ដំបង ) នៅថ្ងៃទី
                                    30 ខែវិច្ឆិកា ឆ្នាំ 2024 ថ្ងៃសៅរ៍ ទី 30 ខែវិច្ឆិកា ឆ្នាំ 2024 វេលាម៉ោង
                                    5:00ល្ងាចទីតាំង៖ កីឡាដ្ឋានខេត្ត វាលបែកចាន ក្រុងបាត់ដំបងសំបុត្រប្រភេទ៖ • VIP - $60
                                    Premium - $30
                                    Standing - $15
                                </p>
                            </div>

                            <p className="text-xs md:text-base text-label-paid">ចំណាំ: សូមបង្ហាញកូដ QR
                                ទៅកាន់ក្រុមការងារដើម្បីផ្ទៀងផ្ទាត់សំបុត្រមុនចូលទស្សនា។</p>
                        </div>
                    </div>
                    <section>
                        <div className="">
                            <div className="space-y-4">
                                {tickets.map((ticket) => (
                                    <div key={ticket.id}
                                         className="flex justify-between rounded-xl border">
                                        <div
                                            className="relative h-32 w-48 rounded-xl overflow-hidden bg-cover bg-center"
                                            style={{backgroundImage: `url('/event/ticket.png')`}}
                                        >
                                            <div className="absolute inset-0 flex flex-col justify-center items-center">
                                                <h3 className="font-bold text-lg lg:text-2xl text-white">{ticket.dd} {ticket.mmm}</h3>
                                                <p className="text-xs lg:text-sm  text-muted-foreground text-white">{ticket.date} {ticket.yyyy}</p>
                                            </div>
                                        </div>
                                        <section className="space-y-1 p-4">
                                            <h3 className="font-bold text-lg lg:text-2xl uppercase">{ticket.name}</h3>
                                            <p  className="text-base lg:text-xl uppercase line-clamp-1">{ticket.event}</p>
                                            <div className="flex space-x-2">
                                                <p className="rounded-[6px] bg-blue-100 bg-opacity-70 px-2 py-1 text-xs font-bold text-label-premium">${ticket.price.toFixed(2)}</p>
                                                {ticket.soldOut ? (
                                                    <span
                                                        className="rounded-[6px] bg-red-100 bg-opacity-70 px-2 py-1 text-xs font-bold text-red-600">SOLD OUT
                                                </span>
                                                ) : (<></>)}
                                            </div>

                                        </section>

                                        <div className="flex items-center gap-2 pr-4">
                                        <Button
                                            className="p-1 bg-blue-100 bg-opacity-70 text-label-premium h-[25px] rounded-[4px]"
                                                    onClick={() => updateQuantity(ticket.id, false)}
                                                    disabled={ticket.quantity === 0}
                                                >
                                                    <MinusIcon className="h-2 w-2"/>
                                                </Button>
                                                <span className="w-4 font-bold text-center">{ticket.quantity}</span>
                                                <Button
                                                    className="p-1 bg-blue-100 bg-opacity-70 text-label-premium h-[25px] rounded-[4px]"
                                                    size="sm"
                                                    onClick={() => updateQuantity(ticket.id, true)}
                                                >
                                                    <PlusIcon className="h-2 w-2"/>
                                                </Button>
                                            </div>
                                    </div>
                                ))}

                                <div className="mt-6 space-y-4">
                                    <div className="flex justify-between border-t pt-4">
                                        <span className="font-medium">Total</span>
                                        <span className="font-medium">${total.toFixed(2)}</span>
                                    </div>
                                    <Button className="w-full" size="sm">
                                        Place Order
                                    </Button>
                                    <p className="text-center text-sm text-muted-foreground">
                                        We accept KHQR & Credit / Debit Card
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}