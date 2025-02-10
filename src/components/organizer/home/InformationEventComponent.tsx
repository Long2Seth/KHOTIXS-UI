'use client';
import React, { useEffect, useState } from "react";
import { Calendar } from 'lucide-react';
import { format, addDays, isWithinInterval } from "date-fns";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Pagination } from "@/components/ui/Pagination";
import { EventType } from "@/lib/types/customer/Event";
import { Badge } from "@/components/ui/badge";
import { useGetAllEventUpcomingQuery } from "@/redux/feature/organizer/Event";

export default function InformationEventComponent() {
    const [searchData, setSearchData] = useState("");
    const [date, setDate] = useState<Date>();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const { data: events = [], isLoading, isError } = useGetAllEventUpcomingQuery();

    const filteredEvents = events.filter((event: EventType) =>
        isWithinInterval(new Date(event.startedDate), { start: new Date(), end: addDays(new Date(), 7) })
    );

    const filterOrderData = filteredEvents.filter(attendance =>
        attendance.eventTitle.toLowerCase().includes(searchData.toLowerCase()) ||
        attendance.id.toLowerCase().includes(searchData.toLowerCase())
    );

    const totalItems = filterOrderData.length;

    const currentItems = filterOrderData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // if (isLoading) {
    //     return <div className={` w-full flex justify-center`}>Loading...</div>;
    // }

    if (isError) {
        return <div className={` w-full flex justify-center `}>Failed to fetch events</div>;
    }

    return (
        <section className="w-full border-primary-color overflow-x-hidden">
            <CardHeader>
                <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 my-5 ">
                    <CardTitle>
                        <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text my-2">UPCOMING EVENTS</h1>
                    </CardTitle>
                </section>
            </CardHeader>

            <CardContent className="bg-white p-10 rounded-[6px] dark:backdrop-blur dark:bg-opacity-5 space-y-4">
                <section className="flex flex-col sm:flex-row gap-4 mb-6">
                    <Input
                        placeholder="Search"
                        value={searchData}
                        onChange={(e) => setSearchData(e.target.value)}
                        className="border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text"
                    />
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Select>
                            <SelectTrigger
                                className="min-w-[200px] max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectValue placeholder="Events"/>
                            </SelectTrigger>
                            <SelectContent
                                className="min-w-[200px] max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectItem value="queen">The Rise Of The Queen</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger
                                className="max-w-[250px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectValue placeholder="Publish"/>
                            </SelectTrigger>
                            <SelectContent
                                className="min-w-[200px] max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectItem className="dark:hover:text-primary-color-text" value="published">Published</SelectItem>
                                <SelectItem className="dark:hover:text-primary-color-text" value="draft">Draft</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                className="max-w-[400px] h-[50px] p-5 border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <Calendar className="mr-2 h-4 w-4"/>
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
                </section>
                <section className="w-full overflow-x-auto ">
                    <div className=" w-auto inline-block align-middle">
                        <div className=" w-full border rounded-[6px]">
                            <Table className="w-full">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="px-2 py-3 min-w-[100px] lg:min-w-[150px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">NO</TableHead>
                                        <TableHead className="px-2 py-3 min-w-[200px] lg:min-w-[500px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">EVENT NAME</TableHead>
                                        <TableHead className="px-2 py-3 min-w-[350px] lg:min-w-[400px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">STARTED DATE</TableHead>
                                        <TableHead className="px-2 py-3 min-w-[350px] lg:min-w-[400px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">ENDED DATE</TableHead>
                                        <TableHead className="px-2 py-3 min-w-[200px] lg:min-w-[300px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">CATEGORY</TableHead>
                                        <TableHead className="px-2 py-3 min-w-[200px] lg:min-w-[300px] text-start text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">LOCATION</TableHead>
                                        {/*<TableHead className="px-2 py-3 min-w-[100px] text-start text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">STATUS</TableHead>*/}
                                    </TableRow>
                                </TableHeader>
                            </Table>
                            <Accordion type="single" collapsible className="w-full ">
                                {currentItems.map((eventData, eventIndex) => (
                                    <AccordionItem key={eventData.id} value={eventData.id}>
                                        <AccordionTrigger>
                                            <Table className=" h-full ">
                                                <TableBody>
                                                    <TableRow className="hover:bg-gray-100 dark:hover:bg-khotixs-background-dark">
                                                        <TableHead className="px-2 py-3 min-w-[100px] lg:min-w-[150px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">{eventIndex + 1}</TableHead>
                                                        <TableCell className="px-2 py-3 min-w-[200px] lg:min-w-[500px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">{eventData.eventTitle}</TableCell>
                                                        <TableCell className="px-2 py-3 min-w-[350px] lg:min-w-[400px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">
                                                            {`${format(new Date(eventData.startedDate), "dd MMMM yyyy  hh:mm a")}`}
                                                        </TableCell>
                                                        <TableCell className="px-2 py-3 min-w-[350px] lg:min-w-[400px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">
                                                            {`${format(new Date(eventData.endedDate), "dd MMMM yyyy  hh:mm a")}`}
                                                        </TableCell>
                                                        <TableCell className="px-2 py-3 min-w-[200px] lg:min-w-[300px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">{eventData.eventCategory }</TableCell>
                                                        <TableCell className="px-2 py-3 min-w-[200px] lg:min-w-[300px] text-start text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{eventData.location}</TableCell>
                                                        {/*<TableCell className="px-2 py-3 min-w-[100px] text-start text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">*/}
                                                        {/*    <Badge*/}
                                                        {/*        className={`rounded-[6px] text[10px] md:text-base justify-center font-normal ${eventData.isPublish ? 'bg-label-free text-label-text-primary hover:bg-label-free/90' : 'bg-label-paid text-label-text-primary hover:bg-label-paid/90'}`}*/}
                                                        {/*    >*/}
                                                        {/*        {eventData.isPublish ? 'Enable' : 'Disable'}*/}
                                                        {/*    </Badge>*/}
                                                        {/*</TableCell>*/}
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <Table className="w-auto bg-khotixs-background-white dark:bg-khotixs-background-dark/80 ">
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead className="px-2 py-3 min-w-[100px] lg:min-w-[150px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">NO</TableHead>
                                                        <TableHead className="px-2 py-3 min-w-[200px] lg:min-w-[500px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">TICKET NAME </TableHead>
                                                        <TableHead className="px-2 py-3 min-w-[350px] lg:min-w-[400px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">TICKET TYPE</TableHead>
                                                        <TableHead className="px-2 py-3 min-w-[350px] lg:min-w-[400px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">PRICE</TableHead>
                                                        <TableHead className="px-2 py-3 min-w-[200px] lg:min-w-[300px] text-start text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">QTY</TableHead>
                                                        <TableHead className="px-2 py-3 min-w-[100px] text-start text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">TOTAL</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {eventData.tickets.map((ticket, ticketIndex) => (
                                                        <TableRow key={ticket.id} className="hover:bg-gray-100 dark:hover:bg-khotixs-background-dark">
                                                            <TableCell className="px-2 py-3 min-w-[100px] lg:min-w-[150px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">{ticketIndex + 1}</TableCell>
                                                            <TableCell className="px-2 py-3 min-w-[200px] lg:min-w-[500px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">{ticket.ticketTitle}</TableCell>
                                                            <TableCell className="px-2 py-3 min-w-[350px] lg:min-w-[400px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text "><Badge
                                                                className={`text-secondary-color-text text-start text-[10px] justify-center md:text-sm font-light rounded-[6px] min-w-[60px] ${
                                                                    ticket.type === "VIP"
                                                                        ? "bg-label-vip hover:bg-label-vip/90"
                                                                        : ticket.type === "PREMIUM"
                                                                            ? "bg-label-premium hover:bg-label-premium/90"
                                                                            : ticket.type === "REGULAR"
                                                                                ? "bg-label-regular hover:bg-label-regular/90"
                                                                                : ticket.type === "FREE"
                                                                                    ? "bg-label-free hover:bg-label-free/90"
                                                                                    : ""
                                                                }`}
                                                            >
                                                                {ticket.type}
                                                            </Badge></TableCell>
                                                            <TableCell className="px-2 py-3 min-w-[200px] lg:min-w-[300px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">{"$" + parseFloat(String(ticket.price)).toFixed(2)}</TableCell>
                                                            <TableCell className="px-2 py-3 min-w-[200px] lg:min-w-[300px] text-start text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{ticket.capacity}</TableCell>
                                                            <TableCell className="px-2 py-3 min-w-[100px] text-start text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{"$" + (parseFloat(String(ticket.price)) * ticket.capacity).toFixed(2)}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>
                <Pagination
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                    onItemsPerPageChange={setItemsPerPage}
                />
            </CardContent>
        </section>
    );
}