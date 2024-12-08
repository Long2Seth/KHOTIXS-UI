"use client";
import Link from "next/link";
import { GiNotebook } from "react-icons/gi"
import { RiSecurePaymentLine } from "react-icons/ri"
import { CgProfile } from "react-icons/cg"
import { IoSettingsOutline } from "react-icons/io5"
import { Button } from "@/components/ui/button"
import Image from "next/image"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { MdOutlineMoreVert } from "react-icons/md";

// Mock data for the events
const events = [
    { id: 1, thumbnail: '/cher-chhaya.png', eventName: 'Summer Music Festival', paymentDate: '2023-07-15', qty: 2, amount: 150.00 },
    { id: 2, thumbnail: '/CSTAD-LOGO.png', eventName: 'Tech Conference 2023', paymentDate: '2023-08-01', qty: 1, amount: 299.99 },
    { id: 1, thumbnail: '/globe.svg', eventName: 'Summer Music Festival', paymentDate: '2023-07-15', qty: 2, amount: 150.00 },
    { id: 1, thumbnail: '/cher-chhaya.png', eventName: 'Summer Music Festival', paymentDate: '2023-07-15', qty: 2, amount: 150.00 },
    { id: 1, thumbnail: '/CSTAD-LOGO.png', eventName: 'Summer Music Festival', paymentDate: '2023-07-15', qty: 2, amount: 150.00 },
    { id: 2, thumbnail: '/khotixs_logo.png', eventName: 'Tech Conference 2023', paymentDate: '2023-08-01', qty: 1, amount: 299.99 },
    // Add more events as needed
]

export default function Payment(){
    return (
        <section className="container mt-7">
            <div className=" w-[1200px] mx-auto h-auto flex justify-center items-center lg:flex md:block mb-5">
                <div className="rounded-lg h-auto py-2 w-[100%] md:w-full lg:w-[92%] flex justify-center lg:justify-between md:justify-center gap-3.5">
                    <Link
                        href="/user-profile/ticket"
                        className=" flex justify-center py-2 items-center md:w-[170px] lg:w-full h-[60px] rounded-lg shadow-sm lg:gap-4"
                    >
                        <div
                            role="alert"
                            className="  w-[79px] h-[60px] md:w-[120px] md:h-[60px] lg:w-full lg:h-[60px] border-r-2 p-2 rounded-lg flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            <div className="flex flex-col my-2 items-center justify-center">
                                <div className="mb-2">
                                    <GiNotebook className="text-3xl text-label-text-description" />
                                </div>
                                <div className="text-[16px] text-label-text-description">
                                    TICKETS
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link
                        href="/user-profile/payment"
                        className="flex justify-center items-center md:w-[120px] lg:w-full h-[60px] rounded-lg border-1 shadow-sm gap-4"
                    >
                        <div
                            role="alert"
                            className=" w-[60px] h-[50px] md:w-[120px] md:h-[60px] lg:w-full lg:h-[60px] border-r-2 p-2 rounded-lg flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            <div className="flex flex-col items-center justify-center">
                                <div className="mb-2">
                                    <RiSecurePaymentLine className="text-3xl text-label-text-description" />
                                </div>
                                <div className="text-[16px] text-label-text-description">
                                    PAYMENT
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link
                        href=" /user-profile/profile"
                        className=" flex justify-center items-center md:w-auto lg:w-full h-[60px] rounded-lg border-1 shadow-sm gap-4"
                    >
                        <div
                            role="alert"
                            className=" w-[79px] h-[60px] md:w-[170px] md:h-[60px] lg:w-full lg:h-[60px] border-r-2 p-2 rounded-lg flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            <div className="flex flex-col items-center justify-center">
                                <div className="mb-2">
                                    <CgProfile className="text-3xl text-label-text-description" />
                                </div>
                                <div className="text-[16px] text-label-text-description">
                                    PROFILE
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link
                        href=" /user-profile/setting"
                        className=" flex justify-center items-center md:w-auto lg:w-full h-[60px] rounded-lg border-1 shadow-sm gap-4"
                    >
                        <div
                            role="alert"
                            className=" w-[79px] h-[60px] md:w-[170px] md:h-[60px] lg:w-full lg:h-[60px] p-2 rounded-lg flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            <div className="flex flex-col items-center justify-center">
                                <div className="mb-2">
                                    <IoSettingsOutline className="text-3xl text-label-text-description" />
                                </div>
                                <div className="text-[16px] text-label-text-description">
                                    SETTING
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="w-[1115px] mx-auto h-auto">
                <h1 className="text-3xl font-bold text-[#4A0635] mb-6">HISTORY PAYMENT</h1>
            </div>

            <div className="w-[1115px] mx-auto h-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[80px]">ID</TableHead>
                            <TableHead className="w-[100px]">THUMBNAIL</TableHead>
                            <TableHead className="w-[200px]">EVENT NAME</TableHead>
                            <TableHead className="w-[120px]">PAYMENT DATE</TableHead>
                            <TableHead className="w-[60px] text-right">QTY</TableHead>
                            <TableHead className="w-[100px] text-right">AMOUNT</TableHead>
                            <TableHead className="w-[80px] text-center">ACTION</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {events.map((event) => (
                            <TableRow key={event.id}>
                                <TableCell className="font-medium">{event.id}</TableCell>
                                <TableCell>
                                    <Image
                                        src={event.thumbnail || '/fallback-image.png'}
                                        alt={event.eventName}
                                        width={60}
                                        height={40}
                                        className="rounded-md object-cover"
                                    />
                                </TableCell>
                                <TableCell className="max-w-[200px]">
                                    <p className="truncate font-medium">{event.eventName}</p>
                                </TableCell>
                                <TableCell className="whitespace-nowrap">{event.paymentDate}</TableCell>
                                <TableCell className="text-right">{event.qty}</TableCell>
                                <TableCell className="text-right text-red-500">
                                    ${event.amount.toFixed(2)}
                                </TableCell>
                                <TableCell className="text-center">
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <MdOutlineMoreVert className="h-5 w-5" />
                                        <span className="sr-only">More options</span>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <div className="mt-6 flex justify-center">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>

</section>
    )
}
