"use client";
import Link from "next/link";
import { GiNotebook } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HiOutlineUserRemove } from "react-icons/hi";
import { MdOutlineFileDownload, MdOutlineMoreVert } from "react-icons/md";
import { PiWarningCircleLight } from "react-icons/pi";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {usePathname} from "next/navigation";
import {Settings} from "lucide-react";
import {cn} from "@/lib/utils";
import {IoEyeOutline} from "react-icons/io5";

// List All Menu have 4 tabs
interface NavItem {
    label: string
    icon: React.ReactNode
    href: string
}
export function NavMenu() {
    const pathname = usePathname()

    const navItems: NavItem[] = [
        {
            label: "TICKETS",
            icon: <GiNotebook className="h-[32px] w-[32px]" />,
            href: "/user-profile/ticket",
        },
        {
            label: "PAYMENT",
            icon: <RiSecurePaymentLine className="h-[32px] w-[32px]" />,
            href: "/user-profile/payment",
        },
        {
            label: "PROFILE",
            icon: <CgProfile className="h-[32px] w-[32px]" />,
            href: "/user-profile/profile",
        },
        {
            label: "SETTING",
            icon: <Settings className="h-[32px] w-[32px]" />,
            href: "/user-profile/settings",
        },
    ]

    return (
        <div className="flex justify-center items-start w-full">
            <nav className="w-full max-w-[1200px]">
                <ul className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <li key={item.href} className="bg-khotixs-background-white dark:bg-khotixs-background-dark">
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "flex flex-col items-center text-[18px] justify-center p-4 transition duration-300 ease-in-out transform hover:scale-105",
                                        isActive && "text-primary"
                                    )}
                                >
                                    {item.icon}
                                    <span className="mt-2 text-[18px] font-medium">{item.label}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>

    )
}

// Mock data for the events
const events = [
    {
        id: 1,
        thumbnail: '/cher-chhaya.png',
        eventName: 'Summer Music Festival',
        paymentDate: '2023-07-15',
        qty: 2,
        amount: 150.00
    },
    {
        id: 2,
        thumbnail: '/CSTAD-LOGO.png',
        eventName: 'Tech Conference 2023',
        paymentDate: '2023-08-01',
        qty: 1,
        amount: 299.99
    },
    {
        id: 3,
        thumbnail: '/khotixs_logo.png',
        eventName: 'Summer Music Festival',
        paymentDate: '2023-07-15',
        qty: 2,
        amount: 150.00
    },
    {
        id: 4,
        thumbnail: '/CSTAD-LOGO.png',
        eventName: 'CAMBODIA’S PREMIER CULINARY AND HOSPITALITY EXPO, CAMFOOD & CAMHOTEL 2024',
        paymentDate: '2023-07-15',
        qty: 2,
        amount: 150.00
    },
    {
        id: 5,
        thumbnail: '/khotixs_logo.png',
        eventName: 'Tech Conference 2023',
        paymentDate: '2023-08-01',
        qty: 1,
        amount: 299.99
    },
    // Add more events as needed
];

function ActionItem({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick: () => void }) {
    return (
        <div
            className="flex items-center rounded-md hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors"
            onClick={onClick}>
            <div className="p-2">{icon}</div>
            <p>{label}</p>
        </div>
    );
}

export default function Payment() {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);

    const handleDeleteConfirm = () => {
        // Add your delete logic here
    };

    return (
        <section className="container mx-auto mt-7 px-4 sm:px-6 lg:px-8">

            {/*List all tab have 4*/}
            <NavMenu />

            {/*List all history payment*/}

            <div className="w-full mx-auto h-auto flex justify-center items-center py-4">
                <div className="w-full max-w-[1200px] ">
                    <h1 className=" text-3xl font-bold text-[#4A0635] mb-6">HISTORY
                        PAYMENT</h1>
                    <div className="w-full mx-auto h-auto flex justify-center items-center rounded-lg border bg-label-text-primary">
                        <Table className="w-full max-w-[1200px] p-2 ">
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
                                                src={event.thumbnail || ''}
                                                alt={event.eventName}
                                                width={60}
                                                height={40}
                                                className="rounded-md object-cover"
                                            />
                                        </TableCell>
                                        <TableCell className="max-w-[200px]">
                                            <p className="truncate font-medium ">{event.eventName}</p>
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap">{event.paymentDate}</TableCell>
                                        <TableCell className="text-right">{event.qty}</TableCell>
                                        <TableCell className="text-right text-red-500">
                                            ${event.amount.toFixed(2)}
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            className="bg-transparent dark:bg-transparent hover:bg-transparent  text-label-text-secondary dark:text-secondary-color-text"><MdOutlineMoreVert/></Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-64 p-0">
                                                        <div
                                                            className="p-4 space-y-2 transition-all duration-300 ease-in-out hover:space-y-4">
                                                            <h4 className="font-medium text-[16px] leading-none">Action</h4>
                                                            <div
                                                                className="space-y-1 transition-all duration-300 ease-in-out group-hover:space-y-2">
                                                                <ActionItem icon={<IoEyeOutline/>} label="View"
                                                                            onClick={() => setIsOpen(true)}/>
                                                                <ActionItem icon={<MdOutlineFileDownload/>}
                                                                            label="Download"
                                                                            onClick={() => setIsOpen(true)}/>
                                                                <ActionItem icon={<HiOutlineUserRemove/>} label="Remove"
                                                                            onClick={() => setIsOpen(true)}/>
                                                            </div>
                                                        </div>
                                                    </PopoverContent>
                                                </Popover>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>

            </div>


            <div className="mt-6 flex justify-center">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#"/>
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
                            <PaginationEllipsis/>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#"/>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>

            {/*List more actions here*/}
            <Dialog open={isOpen} onOpenChange={onClose}>
                <DialogTrigger>
                    <DialogContent>
                        <div className="flex flex-col items-center">
                            <div className="flex justify-center items-center w-full">
                                <PiWarningCircleLight className="w-[80px] h-[80px] text-red-600"/>
                            </div>
                            <div className="flex justify-center items-center w-full text-[24px] p-3">
                                Are you sure want to delete this item?
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-4">
                            <Button
                                className="w-full bg-white dark:text-secondary-color-text dark:bg-khotixs-background-dark hover:bg-slate-200 dark:border-[2px] dark:bg-none text-primary-color-text border-solid border-[2px]"
                                onClick={onClose}
                            >
                                Cancel
                            </Button>
                            <Button
                                className="w-full bg-secondary-color hover:bg-red-900 dark:text-secondary-color-text"
                                onClick={() => {
                                    handleDeleteConfirm();
                                    onClose();
                                }}
                            >
                                Confirm
                            </Button>
                        </div>
                    </DialogContent>
                </DialogTrigger>
            </Dialog>

        </section>
    );
}