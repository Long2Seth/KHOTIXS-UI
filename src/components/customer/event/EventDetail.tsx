'use client'
import React, { useState } from 'react'
import Image from "next/image"
import { MinusIcon, PlusIcon } from 'lucide-react'
import Link from "next/link"
import {useRouter} from "next/navigation";
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

type TicketType = {
    id: string
    name: string
    event: string
    price: number
    free?: boolean
    soldOut?: boolean
    quantity: number
    date: string
    mmm: string
    dd: string
    yyyy: string
}


export default function EventDetails() {

    const router = useRouter()
    const [tickets, setTickets] = useState<TicketType[]>([
        { id: 'vip', event:'THE Q RISE OF THE QUEEN', name: 'VIP - TICKETS', price: 0, free: true, soldOut: true, quantity: 0, date: 'Friday',dd: '30', mmm: 'NOV',  yyyy: '2024'},
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
        <main className="min-h-screen">
            <div className="container mx-auto px-2 py-8">
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
                                    <Link href="/event">Events</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator/>
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-primary-color dark:text-primary-color">Event Details</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </section>
                {/*Event title*/}
                <section className="flex space-x-[180px]">
                    <h1 className="mb-6 text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text ">THE Q RISE OF THE QUEEN </h1>
                    <div className="flex items-center rounded-[6px] px-2 text-label-premium h-6 font-bold text-base lg:mt-2 mt-1.5 bg-blue-100 bg-opacity-70 space-x-1">
                        <RiFirefoxLine className=""/>
                        <p>Upcoming</p>
                    </div>
                </section>
                {/*Event details*/}
                <section className="grid md:gap-2 lg:gap-8 md:grid-cols-2">
                    <div>
                        {/* cover of event*/}
                        <section className="relative mb-6  overflow-hidden rounded-lg">
                            <Image
                                src="/event/cover-event.jpg"
                                alt="Event banner"
                                width={800}
                                height={600}
                                className="object-cover rounded-xl"
                                priority
                            />
                        </section>

                        {/* event date and time*/}
                        <section className="space-y-6">
                            <section className="space-y-2">
                                <h2 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-secondary-color-text ">DATE AND TIME</h2>
                                <div className="flex gap-2 items-center dark:text-label-text-primary text-label-description">
                                    <RiCalendarLine className="w-5"/>
                                    <p className="text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">30 November 2024</p>
                                </div>
                                <div className="flex gap-2 items-center dark:text-label-text-primary text-label-description">
                                    <RiTimerLine className="w-5"/>
                                    <p className="text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">5:00PM-10:00PM</p>
                                </div>
                            </section>

                            {/* event location*/}
                            <section className="space-y-2">
                                <h2 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-secondary-color-text  ">LOCATION</h2>
                                <div className="flex gap-2 items-center dark:text-label-text-primary text-label-description">
                                    <RiMap2Line className="w-5"/>
                                    <p className="  text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">កីឡាដ្ឋានខេត្ត វាលបែកចាន ក្រុងបាត់ដំបង</p>
                                </div>
                            </section>

                            {/* event description*/}
                            <section className="space-y-2">
                                <h2 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-secondary-color-text">EVENT DESCRIPTION</h2>
                                <p className="text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color ">
                                    ក្តីស្រមៃដែលគ្រប់គ្នាៗចង់ឲកើតមានឡើង ក្តីស្រមៃនោះបានក្លាយជាការពិតហើយ! STING
                                    MUSICVERSE សូមនាំយក ការប្រគុំតន្រ្តី THE Q RISE OF THE QUEEN – AOK SOKUNKANHA SOLO
                                    TOUR CONCERT ទៅដល់ខេត្តបាត់ដំបង ( កីឡាដ្ឋានខេត្ត វាលបែកចាន ក្រុងបាត់ដំបង ) នៅថ្ងៃទី
                                    30 ខែវិច្ឆិកា ឆ្នាំ 2024 ថ្ងៃសៅរ៍ ទី 30 ខែវិច្ឆិកា ឆ្នាំ 2024 វេលាម៉ោង
                                    5:00ល្ងាចទីតាំង៖ កីឡាដ្ឋានខេត្ត វាលបែកចាន ក្រុងបាត់ដំបងសំបុត្រប្រភេទ៖ • VIP - $60
                                    Premium - $30
                                    Standing - $15
                                </p>
                            </section>
                            {/*Note*/}
                            <p className="text-description-color text-base md:text-lg xl:text-xl text-red-700">ចំណាំ: សូមបង្ហាញកូដ QR
                                ទៅកាន់ក្រុមការងារដើម្បីផ្ទៀងផ្ទាត់សំបុត្រមុនចូលទស្សនា។</p>
                        </section>
                    </div>
                    {/*Tickets*/}
                    <div>
                        <div className="space-y-4 mt-4 md:mt-0">
                            {tickets.map((ticket) => (
                                <div key={ticket.id}
                                     className="flex rounded-xl border">
                                    <section
                                        className="flex-none relative h-24 w-24 md:h-20 md:w-28 lg:h-28 lg:w-32 rounded-xl overflow-hidden bg-cover bg-center"
                                        style={{backgroundImage: `url('/event/ticket.png')`}}
                                    >
                                        <div className="absolute inset-0 flex flex-col justify-center items-center">
                                        </div>
                                    </section>
                                    <div className="grow flex justify-between items-center p-2 lg:p-4">
                                        <section className="">
                                            <h3 className="text-title-color text-base md:text-lg xl:text-xl font-bold uppercase dark:text-secondary-color-text">{ticket.name}</h3>
                                            <p className="text-description-color text-base md:text-lg xl:text-xl uppercase line-clamp-1 dark:text-label-text-primary text-label-description">{ticket.event}</p>
                                            <div className="flex space-x-2 mt-1">
                                                {ticket.free ? (
                                                    <>
                                                        <p className="rounded-[6px] bg-label-free lg:px-2 lg:py-1 px-1.5 py-0.5 text-sm font-bold text-label-text-primary uppercase">$ Free</p>
                                                        {ticket.soldOut ? (
                                                            <p className="rounded-[6px] dark:bg-label-text-primary bg-red-100 dark:bg-opacity-70 bg-opacity-70 lg:px-2 lg:py-1 px-1.5 py-0.5 text-sm font-bold text-red-600">SOLD OUT</p>
                                                        ) : (<></>)}
                                                    </>
                                                ) : (
                                                    <>
                                                        <p className="rounded-[6px] bg-blue-100 bg-opacity-70 hover:bg-blue-100 hover:bg-opacity-70 lg:px-2 lg:py-1 px-1.5 py-0.5 text-sm font-bold text-label-premium">${ticket.price.toFixed(2)}</p>
                                                        {ticket.soldOut ? (
                                                            <p className="rounded-[6px] dark:bg-label-text-primary bg-red-100 dark:bg-opacity-70 bg-opacity-70 lg:px-2 lg:py-1 px-1.5 py-0.5 text-sm font-bold text-red-600">SOLD OUT</p>
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
                            {/*Sub Total*/}
                            <section className="flex justify-between items-center py-4">
                                <hr className="border w-full"/>
                                <span className="font-bold w-60 text-center dark:text-label-text-primary text-label-description dark:text-label-primary">Sub Total</span>
                                <hr className="border w-full"/>
                            </section>
                            {/*Total*/}
                            <section className="mt-6 space-y-4">
                                {/*{tickets.map((ticket) => (*/}
                                {/*    <>*/}
                                {/*        {ticket.price === 0 && ticket.free ? (*/}
                                {/*            <div*/}
                                {/*                className="flex items-center justify-between border p-4 pl-6 rounded-[8px]">*/}
                                {/*                <span*/}
                                {/*                    className="font-bold text-lg lg:text-2xl text-label-free uppercase">$ free</span>*/}
                                {/*                <Button*/}
                                {/*                    className="bg-primary-color hover:bg-primary-color hover:bg-opacity-85 text-label-text-primary rounded-[6px] h-[45px] font-bold">*/}
                                {/*                    Place Order <RiArrowRightLine/>*/}
                                {/*                </Button>*/}
                                {/*            </div>*/}
                                {/*        ) : (*/}
                                {/*            <>*/}
                                {/*                <div*/}
                                {/*                    className="flex items-center justify-between border p-4 pl-6 rounded-[8px]">*/}
                                {/*                    <span*/}
                                {/*                        className="font-bold text-lg lg:text-2xl text-label-paid">${total.toFixed(2)}</span>*/}
                                {/*                    <Button*/}
                                {/*                        className="bg-primary-color hover:bg-primary-color hover:bg-opacity-85 text-label-text-primary rounded-[6px] h-[45px] font-bold">*/}
                                {/*                        Place Order <RiArrowRightLine/>*/}
                                {/*                    </Button>*/}
                                {/*                </div>*/}
                                {/*            </>*/}
                                {/*        )}*/}
                                {/*    </>*/}
                                {/*))}*/}
                                <div className="flex items-center justify-between border p-4 pl-6 rounded-[8px]">
                                    <span
                                        className="text-label-paid text-lg md:text-2xl xl:text-4xl font-bold ">${total.toFixed(2)}</span>
                                    <Button
                                        onClick={() => router.push('/order-info-requirement')}
                                        className="bg-primary-color hover:bg-primary-color hover:bg-opacity-85 text-label-text-primary rounded-[6px] h-[45px] font-bold">
                                        Place Order <RiArrowRightLine/>
                                    </Button>
                                </div>

                                <div
                                    className="flex items-center space-x-2 dark:text-label-text-primary text-label-description">
                                    <RiErrorWarningLine className="w-5"/>
                                    <p className="text-centertext-description-color text-base md:text-lg xl:text-xl">
                                        We accept KHQR & Credit / Debit Card
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}