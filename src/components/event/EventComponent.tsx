'use client';
import React, {useState} from "react";
import {Calendar} from 'lucide-react';
import {format} from "date-fns";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Calendar as CalendarComponent} from "@/components/ui/calendar";
import {Badge} from "@/components/ui/badge";
import Image from "next/image";
import {Pagination} from "@/components/Pagination";
import {ActionEventComponent} from "@/components/event/ActionEventComponent";
import {AllEventData} from "@/lib/organizer/Event";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {useRouter} from "next/navigation";


export default function EventComponent() {
    const [searchData, setSearchData] = useState("");
    const [date, setDate] = useState<Date>();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [category, setCategory] = useState("all");
    const [location, setLocation] = useState("all");
    const [status, setStatus] = useState("all");
    const route = useRouter();

    // Filter events based on search term, category, location, and status
    const filteredData = AllEventData.filter(event => {
        return (
            (category === "all" || event.category.toLowerCase() === category.toLowerCase()) &&
            (location === "all" || event.location.toLowerCase() === location.toLowerCase()) &&
            (status === "all" || event.status.toLowerCase() === status.toLowerCase()) &&
            event.eventName.toLowerCase().includes(searchData.toLowerCase())
        );
    });

    const totalItems = filteredData.length;

    // Get current items for pagination
    const currentItems = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <section className="w-full border-primary-color ">
            <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ">
                    <CardTitle>
                        <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text ">INFORMATION
                            EVENT
                        </h1>
                    </CardTitle>
                    <Button
                        onClick={() => route.push("/organizer/events/create")}
                        className="text-secondary-color-text rounded-[6px] bg-primary-color hover:bg-primary-color/80 w-full sm:w-auto"
                    >
                        Create event
                    </Button>
                </div>
            </CardHeader>

            <CardContent className="bg-white p-10 rounded-[6px] dark:backdrop-blur dark:bg-opacity-5 space-y-4">
                <section className="flex flex-col sm:flex-row gap-4 mb-6">
                    <Input
                        placeholder="Search by event name"
                        value={searchData}
                        onChange={(e) => setSearchData(e.target.value)}
                        className="border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text"
                    />
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Select onValueChange={setCategory}>
                            <SelectTrigger
                                className={`min-w-[200px] max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text ${category === "all" ? "text-gray-400" : "text-black"}`}>
                                <SelectValue placeholder="Category"/>
                            </SelectTrigger>
                            <SelectContent
                                className="min-w-[200px] max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectItem value="all">ALL</SelectItem>
                                {AllEventData.map(category => (
                                    <SelectItem key={category.category.toLowerCase()}
                                                value={category.category.toLowerCase()}>{category.category}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select onValueChange={setLocation}>
                            <SelectTrigger
                                className={`min-w-[200px] max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text ${location === "all" ? "text-gray-400" : "text-black"}`}>
                                <SelectValue placeholder="Location"/>
                            </SelectTrigger>
                            <SelectContent
                                className="min-w-[200px] max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text">
                                <SelectItem value="all">ALL</SelectItem>
                                {AllEventData.map(location => (
                                    <SelectItem key={location.location.toLowerCase()}
                                                value={location.location.toLowerCase()}>{location.location}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select onValueChange={setStatus}>
                            <SelectTrigger
                                className={`px-3 max-w-[250px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text ${status === "all" ? "text-gray-400" : "text-black"}`}>
                                <SelectValue placeholder="Status"/>
                            </SelectTrigger>
                            <SelectContent
                                className="min-w-[200px] max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectItem value="all">ALL</SelectItem>
                                <SelectItem value="enable">Enable</SelectItem>
                                <SelectItem className=" text-red-500 " value="disable">Disable</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                className={`max-w-[400px] h-[50px] p-5 border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text ${date ? "text-black" : "text-gray-400"} `}>
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

                <section className=" overflow-x-auto">
                    <div className="inline-block align-middle">
                        <div className=" border rounded-[6px]">
                            <Table className="w-full">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className=" lg:min-w-[150px] text-center ">ID</TableHead>
                                        {/*<TableHead className=" lg:min-w-[200px] text-start ">CREATE BY</TableHead>*/}
                                        <TableHead className=" lg:min-w-[500px] pl-20 text-start ">EVENT
                                            NAME</TableHead>
                                        <TableHead className=" lg:min-w-[200px] text-start ">CATEGORY</TableHead>

                                        <TableHead className=" lg:min-w-[200px] ">START DATE</TableHead>
                                        <TableHead className=" lg:min-w-[200px] ">END DATE</TableHead>
                                        <TableHead className=" lg:min-w-[300px] text-start ">LOCATION</TableHead>
                                        <TableHead className=" lg:min-w-[200px] text-start ">STATUS</TableHead>
                                        <TableHead className=" min-w-20"></TableHead>
                                    </TableRow>
                                </TableHeader>
                            </Table>
                            <Accordion type="single" collapsible className="w-full ">
                                {currentItems.map((orderData) => (
                                    <AccordionItem key={orderData.id} value={orderData.id}>
                                        <AccordionTrigger>
                                            <Table className=" w-full ">
                                                <TableBody>
                                                    <TableRow
                                                        className="hover:bg-gray-100 dark:hover:bg-khotixs-background-dark">
                                                        <TableCell
                                                            className=" lg:min-w-[150px] text-center ">{orderData.id}</TableCell>
                                                        {/*<TableCell*/}
                                                        {/*    className=" lg.w-[200px] text-start ">{orderData.createBy}</TableCell>*/}
                                                        <TableCell className="flex items-center lg:min-w-[500px]">
                                                            <Image className="rounded-[6px]" width={90} height={10}
                                                                   src={orderData.image} alt="image"/>
                                                            <p className=" px-2  text-description-color justify-center text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{orderData.eventName}</p>
                                                        </TableCell>
                                                        <TableCell
                                                            className=" lg:min-w-[200px] text-start ">{orderData.category}</TableCell>
                                                        <TableCell
                                                            className=" lg:min-w-[200px] text-start ">{orderData.startDate}</TableCell>
                                                        <TableCell
                                                            className=" lg:min-w-[200px] text-start ">{orderData.endDate}</TableCell>
                                                        <TableCell
                                                            className=" lg:min-w-[300px] text-start ">{orderData.location}</TableCell>
                                                        <TableCell
                                                            className="min-w-[200px] text-start text-description-color text-[10px] md:text-sm xl:text-base">
                                                            <Badge
                                                                className={`rounded-[6px] text[10px] md:text-base justify-center font-normal ${orderData.status === 'enable' ? 'bg-label-free text-label-text-primary hover:bg-label-free/90' : 'bg-label-paid text-label-text-primary hover:bg-label-paid/90'}`}>{orderData.status === 'enable' ? 'Enable' : 'Disable'}</Badge>
                                                        </TableCell>
                                                        <TableCell className=" min-w-20">
                                                            <ActionEventComponent/>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>

                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <Table className="">
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead
                                                            className="px-2 py-5 min-w-[200px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">TICKET
                                                            ID</TableHead>
                                                        <TableHead
                                                            className="px-2 py-5 min-w-[600px] pl-20 text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">TICKET
                                                            NAME </TableHead>
                                                        <TableHead
                                                            className="px-2 py-5 min-w-[320px] text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">TICKET
                                                            TYPE</TableHead>
                                                        <TableHead
                                                            className="px-2 py-5 lg:w-[400px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">PRICE</TableHead>
                                                        <TableHead
                                                            className="px-2 py-5 lg:w-[100px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">QTY</TableHead>
                                                        <TableHead
                                                            className="px-2 py-5 lg:w-[100px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">TOTAL</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {orderData.tickets.map((ticket) => (
                                                        <TableRow key={ticket.id}
                                                                  className="hover:bg-gray-100 dark:hover:bg-khotixs-background-dark">
                                                            <TableCell
                                                                className="px-2 text-start text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{ticket.id}</TableCell>
                                                            <TableCell
                                                                className="px-2 text-start text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{ticket.ticketName}</TableCell>
                                                            <TableCell
                                                                className="px-2 text-start text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{ticket.ticketType}</TableCell>
                                                            <TableCell
                                                                className="px-2 text-start text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{"$" + ticket.price}</TableCell>
                                                            <TableCell
                                                                className="px-2 py-5 lg:w-[100px] text-start text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{ticket.quantity}</TableCell>
                                                            <TableCell
                                                                className="px-2 py-5 lg:w-[100px] text-start text-green-600 font-semibold text-[10px] md:text-sm xl:text-base">{"$" + (ticket.price * ticket.quantity)}</TableCell>
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