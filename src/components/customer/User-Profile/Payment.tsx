"use client";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {HiOutlineUserRemove} from "react-icons/hi";
import {MdOutlineFileDownload, MdOutlineMoreVert} from "react-icons/md";
import {PiWarningCircleLight} from "react-icons/pi";
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
import React, {useState} from "react";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";
import {IoEyeOutline} from "react-icons/io5";
import {Input} from "@/components/ui/input";


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

function ActionItem({icon, label, onClick, className}: { icon: React.ReactNode; label: string; onClick: () => void; className?: string }) {
    return (
        <div
            className={`flex items-center rounded-[6px] hover:border-gray-700 ${className}`}
            onClick={onClick}>
            <div className="p-2">{icon}</div>
            <p>{label}</p>
        </div>
    );
}

export default function Payment() {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);

    const [searchData, setSearchData] = useState("")

    const handleDeleteConfirm = () => {
        // Add your delete logic here
    };

    return (
        <section className="container mx-auto mt-7 px-4 sm:px-6 lg:px-8">

            {/*List all tab have 4*/}
            {/*<NavbarMenuComponent/>*/}

            {/*List all history payment*/}

            <div className="w-full mx-auto h-auto flex justify-center items-center py-4">
                <div className="w-full max-w-[1200px] ">
                    <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text mb-6">HISTORY
                        PAYMENT</h1>

                    <div className=" bg-white dark:backdrop-blur dark:bg-opacity-5 p-5">
                        <div className="flex flex-col sm:flex-row gap-4 mb-6 ">
                            <Input
                                placeholder="Search"
                                value={searchData}
                                onChange={(e) => setSearchData(e.target.value)}
                                className="border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text"
                            />

                        </div>
                        <div
                            className="w-full mx-auto h-auto flex justify-center items-center rounded-[6px] border dark:bg-khotixs-background-dark bg-label-text-primary">
                            <Table className="w-full max-w-[1200px] p-2 ">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className=" px-2 py-5  w-[80px] text-center">ID</TableHead>
                                        <TableHead className=" px-2 py-5  w-[100px]">THUMBNAIL</TableHead>
                                        <TableHead className="px-2 py-5  w-[200px]">EVENT NAME</TableHead>
                                        <TableHead className="px-2 py-5  w-[120px]">PAYMENT DATE</TableHead>
                                        <TableHead className=" px-2 py-5  w-[60px] text-right">QTY</TableHead>
                                        <TableHead className=" px-2 py-5  w-[100px] text-right">AMOUNT</TableHead>
                                        <TableHead className="px-2 py-5  w-[80px] text-center">ACTION</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {events.map((event) => (
                                        <TableRow
                                            className=" hover:bg-khotixs-background-white dark:hover:bg-khotixs-background-dark "
                                            key={event.id}>
                                            <TableCell className="font-medium text-center">{event.id}</TableCell>
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
                                            <TableCell className="text-right text-red-500 font-bold dark:text-red-500">
                                                ${event.amount.toFixed(2)}
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                                    <Popover>
                                                        <PopoverTrigger asChild>
                                                            <Button
                                                                className="bg-transparent dark:bg-transparent hover:bg-transparent  text-label-text-secondary dark:text-secondary-color-text"><MdOutlineMoreVert/></Button>
                                                        </PopoverTrigger>
                                                        <PopoverContent className="w-auto">
                                                            <div
                                                                className="p-4 space-y-2 transition-all duration-300 ease-in-out hover:space-y-4">
                                                                <div
                                                                    className="transition-all duration-300 ease-in-out">
                                                                    <ActionItem
                                                                        className=" text-label-free hover:bg-gray-200 rounded-[6px] pr-5"
                                                                        icon={<IoEyeOutline/>}
                                                                        label="View"
                                                                        onClick={() => setIsOpen(true)}/>
                                                                    <ActionItem
                                                                        className=" text-label-free rounded hover:bg-gray-200 pr-5" icon={<MdOutlineFileDownload/>}
                                                                                label="Download"
                                                                                onClick={() => setIsOpen(true)}/>
                                                                    <ActionItem
                                                                        className=" text-red-500 rounded-[6px] hover:bg-gray-200 pr-5" icon={<HiOutlineUserRemove/>}
                                                                                label="Remove"
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

            </div>


            <div className="mt-6 flex justify-center ">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#"/>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive
                                            className="dark:bg-khotixs-background-dark">2</PaginationLink>
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
                    <DialogContent className=" rounded-[6px] bg-white dark:backdrop-blur dark:bg-opacity-5">
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
                                className="w-full rounded-[6px] border border-red-600 text-red-500 "
                                onClick={onClose}
                            >
                                Cancel
                            </Button>
                            <Button
                                className="w-full text-secondary-color-text bg-primary-color hover:bg-primary-color rounded-[6px] "
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
