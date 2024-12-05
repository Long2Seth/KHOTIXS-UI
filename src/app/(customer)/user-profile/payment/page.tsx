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

const events = [
    {
        id: "1",
        thumbnail: "/cher-chhaya.png",
        eventName: "SMILE OF CAMBODIA' RETURNS ",
        paymentDate: "30-Oct-2024, 12:00AM",
        qty: 4,
        amount: 23.00,
    } , {
        id: "2",
        thumbnail: "/cher-chhaya.png",
        eventName: "SMILE OF CAMBODIA' RETURNS TO ANGKOR WAT FOR CULTURAL CELEBRATION",
        paymentDate: "30-Oct-2024, 12:00AM",
        qty: 4,
        amount: 23.00,
    } ,{
        id: "3",
        thumbnail: "/cher-chhaya.png",
        eventName: "SMILE OF CAMBODIA' RETURNS TO ANGKOR WAT FOR CULTURAL CELEBRATION",
        paymentDate: "30-Oct-2024, 12:00AM",
        qty: 4,
        amount: 23.00,
    } ,{
        id: "3",
        thumbnail: "/cher-chhaya.png",
        eventName: "SMILE OF CAMBODIA' RETURNS TO ANGKOR WAT FOR CULTURAL CELEBRATION",
        paymentDate: "30-Oct-2024, 12:00AM",
        qty: 4,
        amount: 23.00,
    } ,{
        id: "4",
        thumbnail: "/cher-chhaya.png",
        eventName: "SMILE OF CAMBODIA' RETURNS TO ANGKOR WAT FOR CULTURAL CELEBRATION",
        paymentDate: "30-Oct-2024, 12:00AM",
        qty: 4,
        amount: 23.00,
    }

]

export default function Payment(){
    return (
        <section className=" w-full container mx-auto mt-7">
            <div className=" w-[1200px] mx-auto h-auto flex justify-center items-center lg:flex md:block mt-2 mb-5">
                    <div className="rounded-lg h-auto py-2 w-[100%] md:w-full lg:w-[92%] flex justify-center lg:justify-between md:justify-center gap-3.5">
                        <Link
                            href="/user-profile/ticket"
                            className=" flex justify-center py-2 items-center md:w-[170px] lg:w-full h-[60px] rounded-lg shadow-sm lg:gap-4"
                        >
                            <div
                                role="alert"
                                className=" dark:bg-green-900 w-[79px] h-[60px] md:w-[120px] md:h-[60px] lg:w-full lg:h-[60px] border-r-2 dark:border-green-700 text-green-900 p-2 rounded-lg flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105"
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
                                className=" dark:bg-green-900 w-[60px] h-[50px] md:w-[120px] md:h-[60px] lg:w-full lg:h-[60px] border-r-2 dark:border-green-700 text-green-900 p-2 rounded-lg flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105"
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
                                className="dark:bg-green-900 w-[79px] h-[60px] md:w-[170px] md:h-[60px] lg:w-full lg:h-[60px] border-r-2  dark:border-green-700 text-green-900 p-2 rounded-lg flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105"
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
                                className=" dark:bg-green-900 w-[79px] h-[60px] md:w-[170px] md:h-[60px] lg:w-full lg:h-[60px] text-green-900 p-2 rounded-lg flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105"
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

            <div className="w-[1200px] mx-auto h-auto">
                <h1 className="text-3xl font-bold text-[#4A0635] mb-6">HISTORY PAYMENT</h1>
            </div>
            <div className="w-[1200px] mx-auto h-auto">
                <Table>
                    <TableHeader className="bg-gray-100">
                        <TableRow>
                            <TableHead className="w-[80px]">ID</TableHead>
                            <TableHead className="w-[100px]">THUMBNAIL</TableHead>
                            <TableHead className="w-[100px]">EVENT NAME</TableHead>
                            <TableHead className="w-[80px]">PAYMENT DATE</TableHead>
                            <TableHead className="w-[60px] text-right">QTY</TableHead>
                            <TableHead className="w-[100px] text-right">AMOUNT</TableHead>
                            <TableHead className="w-[80px] text-center">ACTION</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {events.map((event, index) => (
                            <TableRow key={event.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
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

                                <TableCell className="max-w-[40%]">
                                    <p className="truncate font-medium">{event.eventName}</p>
                                </TableCell>
                                <TableCell className="whitespace-nowrap">{event.paymentDate}</TableCell>
                                <TableCell className="text-right">{event.qty}</TableCell>
                                <TableCell className="text-right text-red-500">
                                    ${event.amount.toFixed(2)}
                                </TableCell>
                                <TableCell className="text-center">
                                        <Button className="h-5 w-5 bg-white">
                                            <MdOutlineMoreVert className="h-4 w-4 text-black"/>
                                        </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="py-5">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive className="rounded-[5px] border-spacing-0.5 border-[#4A5568]">
                                2
                            </PaginationLink>
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
