'use client'
import React, { useState } from "react";
import { Calendar } from 'lucide-react';
import * as XLSX from "xlsx";
import { format } from "date-fns";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { orderData } from "@/lib/organizer/orderData";
import Image from "next/image";
import { Pagination } from "@/components/Pagination";

export default function OrderTableComponent() {
    const [searchData, setSearchData] = useState("");
    const [date, setDate] = useState<Date>();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // Filter payments based on searchData term
    const filterOrderData = orderData.filter(attendance =>
        attendance.eventName.toLowerCase().includes(searchData.toLowerCase()) ||
        attendance.id.toLowerCase().includes(searchData.toLowerCase())
    );

    const totalItems = filterOrderData.length;

    // Export to Excel function
    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(orderData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Payments");
        XLSX.writeFile(wb, "payments.xlsx");
    };

    // Get current items
    const currentItems = filterOrderData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="w-full">
            <CardHeader>
                <div className="flex flex-row justify-between items-start sm:items-center gap-4">
                    <CardTitle className=" p-5 w-[80%]">
                        <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">ORDER DATA</h1>
                        <p className="text-description-color text-sm md:text-base xl:text-lg font-light dark:text-dark-description-color">Real-time insights for data-driven decisions</p>
                    </CardTitle>
                    <Button
                        onClick={exportToExcel}
                        className="text-secondary-color-text rounded-[6px] bg-primary-color hover:bg-primary-color/80 w-auto mt-5"
                    >
                        Export Excel
                    </Button>
                </div>
            </CardHeader>

            <CardContent className="bg-white p-10 rounded-[6px] dark:backdrop-blur dark:bg-opacity-5 space-y-4">
                <div className="flex flex-col lg:flex-row gap-4 mb-6">
                    <Input
                        placeholder="Search"
                        value={searchData}
                        onChange={(e) => setSearchData(e.target.value)}
                        className="border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text"
                    />
                    <div className="flex flex-col sm:flex-row  gap-4">
                        <Select>
                            <SelectTrigger className="w-full sm:max-w-[350px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectValue placeholder="Events" />
                            </SelectTrigger>
                            <SelectContent className="w-full sm:w-[350px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectItem value="queen">The Rise Of The Queen</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="w-full sm:w-[250px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectValue placeholder="Publish" />
                            </SelectTrigger>
                            <SelectContent className="w-full sm:w-[250px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectItem className="dark:hover:text-primary-color-text" value="published">Published</SelectItem>
                                <SelectItem className="dark:hover:text-primary-color-text" value="draft">Draft</SelectItem>
                            </SelectContent>
                        </Select>

                        <Popover>
                        <PopoverTrigger asChild>
                            <Button className="w-full md:max-w-[400px] h-[50px] p-5 border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <Calendar className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span className="text-md md:text-lg">Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-gray-100 rounded-[6px]">
                            <CalendarComponent
                                className="bg-white dark:bg-khotixs-background-dark dark:text-secondary-color-text rounded-[6px]"
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    </div>

                </div>
                <div className=" overflow-x-auto">
                    <div className="inline-block align-middle">
                        <div className="border rounded-[6px]">
                            <Table className="">
                                <TableHeader className="">
                                    <TableRow>
                                        <TableHead className=" min-w-[100px] md:min-w-[130px] xl:min-w-[150px] text-center text-title-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">ID</TableHead>
                                        <TableHead className=" min-w-[300px] md:min-w-[400px] xl:min-w-[500px] pl-20 text-start text-title-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">EVENT NAME</TableHead>
                                        <TableHead className="min-w-[100px] md:min-w-[150px] lg:min-w-[200px] text-title-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">START DATE</TableHead>
                                        <TableHead className="min-w-[100px] md:min-w-[150px] lg:min-w-[200px] text-title-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">END DATE</TableHead>
                                        <TableHead className="min-w-[150px] md:min-w-[200px] xl:min-w-[300px] text-start text-title-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">LOCATION</TableHead>
                                        <TableHead className=" min-w-[70px] md:min-w-[100px] text-center text-title-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">QTY</TableHead>
                                        <TableHead className=" min-w-[100px] lg:min-w-[100px] text-center text-title-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">PRICE</TableHead>
                                        <TableHead className="min-w-[100px] lg:min-w-[100px] text-center text-title-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">TOTAL</TableHead>
                                        <TableHead className="min-w-[150px] lg:min-w-[200px] text-start text-title-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">TICKET TYPE</TableHead>
                                        <TableHead className=" min-w-[150px] lg:min-w-[200px] text-start text-title-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">STATUS</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {currentItems.map((orderData) => (
                                        <TableRow className="hover:bg-gray-100 dark:hover:bg-khotixs-background-dark" key={orderData.id}>
                                            <TableCell className="px-2 lg:w-[200px] text-center text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{orderData.id}</TableCell>
                                            <TableCell className="flex items-center">
                                                <Image className="rounded-[6px]" width={90} height={10} src={orderData.image} alt="image" />
                                                <p className="px-2 lg:w-[500px] text-description-color justify-center text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{orderData.eventName}</p>
                                            </TableCell>
                                            <TableCell className="px-2 lg:min-w-[100px] text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{orderData.startDate}</TableCell>
                                            <TableCell className="px-2 lg:min-w-[100px] text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{orderData.endDate}</TableCell>
                                            <TableCell className="px-2 lg:min-w-[300px] text-start text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{orderData.location}</TableCell>
                                            <TableCell className="px-2 lg:min-w-[100px] text-center text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{orderData.qty}</TableCell>
                                            <TableCell className="px-2 lg:min-w-[100px] text-center font-semibold text-[10px] md:text-sm xl:text-base text-green-600 dark:text-green-600 ">{"$" + orderData.price}</TableCell>
                                            <TableCell className="px-2 lg:min-w-[100px] text-center font-semibold text-green-600 dark:text-green-600 text-[10px] md:text-sm xl:text-base">{"$" + orderData.qty * orderData.price}</TableCell>
                                            <TableCell className="text-start lg:min-w-[120px]">
                                                <Badge className={`text-secondary-color-text text-center text-[10px] justify-center md:text-sm font-light rounded-[6px] px-3 ${orderData.ticketType === 'VIP' ? 'bg-label-vip hover:bg-label-vip/90' : orderData.ticketType === 'PREMIUM' ? 'bg-label-premium hover:bg-label-premium/90' : orderData.ticketType === 'REGULAR' ? 'bg-label-regular hover:bg-label-regular/90' : orderData.ticketType === 'FREE' ? 'bg-label-free hover:bg-label-free/90' : ''}`}>{orderData.ticketType}</Badge>
                                            </TableCell>
                                            <TableCell className="lg:min-w-[120px] text-start text-description-color text-[10px] md:text-sm xl:text-base">
                                                <Badge className={`rounded-[6px] text[10px] md:text-base  justify-center font-normal py-1 ${orderData.status === 'publish' ? 'bg-label-free text-label-text-primary hover:bg-label-free/90' : 'bg-label-paid text-label-text-primary hover:bg-label-paid/90'}`}>{orderData.status === 'publish' ? 'Publish' : 'Unpublish'}</Badge>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
                <Pagination
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                    onItemsPerPageChange={setItemsPerPage}
                />
            </CardContent>
        </div>
    );
}