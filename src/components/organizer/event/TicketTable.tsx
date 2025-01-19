'use client'
import { useState, useMemo, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { RiStarFill } from "react-icons/ri";
import { PiEye } from "react-icons/pi";
import { PiEyeSlash } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { EventType, Ticket } from "@/lib/customer/event";
import TicketActionComponent from "@/components/organizer/event/TicketActionComponent";
import Image from "next/image";
import { Pagination } from "@/components/ui/Pagination";

type PropType = {
    id: string;
}

export default function TicketTable({ id }: PropType) {
    const router = useRouter();
    const [eventData, setEventData] = useState<EventType | null>(null);
    const [ticketData, setTicketData] = useState<Ticket[] | null>(null);

    console.log("  GET ID   ", id);
    const getData = async () => {
        try {
            const response = await fetch(`/event-ticket/api/v1/events/organizer/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data: EventType = await response.json();
            setEventData(data);
            setTicketData(data.tickets);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    useEffect(() => {
        getData();
    }, [id]);

    console.log(" EVENT DATA ", eventData);

    const [search, setSearch] = useState('');
    const [ticketType, setTicketType] = useState('all');
    const [publishStatus, setPublishStatus] = useState('all');
    const [displayStatus, setDisplayStatus] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const filteredTickets = ticketData?.filter((ticket: Ticket) => {
        return (
            (ticketType === 'all' || ticket.type.toLowerCase() === ticketType) &&
            (publishStatus === 'all' || (publishStatus === 'published' && ticket.isPublish) || (publishStatus === 'unpublished' && !ticket.isPublish)) &&
            (displayStatus === 'all' || (displayStatus === 'visible' && ticket.isDisplay) || (displayStatus === 'hidden' && !ticket.isDisplay)) &&
            (ticket.ticketTitle.toLowerCase().includes(search.toLowerCase()))
        );
    }) || [];

    const paginatedTickets = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredTickets.slice(startIndex, endIndex);
    }, [filteredTickets, currentPage, itemsPerPage]);

    return (
        <section className="space-y-4">
            <h2 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">TICKETS</h2>

            <section className="bg-white p-10 rounded-[6px] dark:bg-white dark:backdrop-blur dark:bg-opacity-5 space-y-4">
                <div className="lg:flex items-center grid grid-cols-2 gap-4">
                    <Input
                        className="w-full border border-light-border-color rounded-[6px] placeholder:text-light-border-color dark:border-label-text-primary max-w-full bg-transparent"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <Select value={ticketType} onValueChange={setTicketType}>
                        <SelectTrigger className="w-[200px] border border-light-border-color rounded-[6px] dark:border-label-text-primary">
                            <SelectValue placeholder="Ticket Type" />
                        </SelectTrigger>
                        <SelectContent className="bg-khotixs-background-white rounded-[6px] border border-light-border-color dark:text-secondary-color-text dark:bg-khotixs-background-dark">
                            <SelectItem className="dark:hover:text-primary-color-text" value="all">All Types</SelectItem>
                            <SelectItem className="dark:hover:text-primary-color-text" value="vip">VIP</SelectItem>
                            <SelectItem className="dark:hover:text-primary-color-text" value="premium">Premium</SelectItem>
                            <SelectItem className="dark:hover:text-primary-color-text" value="regular">Regular</SelectItem>
                            <SelectItem value="free" className="dark:hover:text-primary-color-text">Free</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select value={publishStatus} onValueChange={setPublishStatus}>
                        <SelectTrigger className="w-[200px] border border-light-border-color rounded-[6px] dark:border-label-text-primary">
                            <SelectValue placeholder="Publish" />
                        </SelectTrigger>
                        <SelectContent className="bg-khotixs-background-white rounded-[6px] border border-light-border-color dark:text-secondary-color-text dark:bg-khotixs-background-dark">
                            <SelectItem className="dark:hover:text-primary-color-text" value="all">All Status</SelectItem>
                            <SelectItem className="dark:hover:text-primary-color-text" value="published">Published</SelectItem>
                            <SelectItem className="dark:hover:text-primary-color-text" value="unpublished">Unpublished</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select value={displayStatus} onValueChange={setDisplayStatus}>
                        <SelectTrigger className="w-[200px] border border-light-border-color rounded-[6px] dark:border-label-text-primary">
                            <SelectValue placeholder="Display" />
                        </SelectTrigger>
                        <SelectContent className="bg-khotixs-background-white rounded-[6px] border border-light-border-color dark:text-secondary-color-text dark:bg-khotixs-background-dark">
                            <SelectItem className="dark:hover:text-primary-color-text" value="all">All Display</SelectItem>
                            <SelectItem className="dark:hover:text-primary-color-text" value="visible">Visible</SelectItem>
                            <SelectItem className="dark:hover:text-primary-color-text" value="hidden">Hidden</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button
                        onClick={() => router.push(`/organizer/events/tickets/${id}`)}
                        className="bg-primary-color text-secondary-color-text rounded-[6px] hover:bg-primary-color/90 dark:text-secondary-color-text">
                        New Ticket
                    </Button>
                </div>

                <div className="border rounded-[6px] border-light-border-color">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>TICKET NAME</TableHead>
                                <TableHead>TICKET TYPE</TableHead>
                                <TableHead>PUBLISH</TableHead>
                                <TableHead>DISPLAY</TableHead>
                                <TableHead>SOLD</TableHead>
                                <TableHead>REVENUE</TableHead>
                                <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {paginatedTickets.length > 0 ? (
                                paginatedTickets.map((ticket: Ticket) => (
                                    <TableRow key={ticket.id}>
                                        <TableCell>{ticket.ticketTitle}</TableCell>
                                        <TableCell className={`text-sm md:text-md xl:text-lg`}>
                                            <Badge className={`text-[10px] md:text-sm xl:text-base bg-label-${ticket.type.toLowerCase()} hover:bg-label-${ticket.type.toLowerCase()}/90 rounded-[6px] text-white`}>
                                                {ticket.type}
                                                {ticket.type === 'VIP' && <RiStarFill className="h-2.5 w-2.5" />}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Badge className={`text-[10px] md:text-sm xl:text-base ${ticket.isPublish ? 'bg-blue-500' : 'bg-red-500'} rounded-[6px] text-white`}>
                                                {ticket.isPublish ? 'Published' : 'Unpublished'}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            {ticket.isDisplay ? <PiEye className="h-5 w-5 text-muted-foreground" /> : <PiEyeSlash className="h-5 w-5 text-muted-foreground" />}
                                        </TableCell>
                                        <TableCell>{ticket.capacity}</TableCell>
                                        <TableCell className="text-green-600 font-bold text-lg">${ticket.price}</TableCell>
                                        <TableCell>
                                            <TicketActionComponent id={ticket.id} isPublish={ticket.isPublish} isDisplay={ticket.isDisplay} />
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={7}
                                        className="h-20 text-center text-lg md:text-2xl xl:text-4xl"
                                    >
                                        <div className="flex w-full justify-center items-center">
                                            <Image src="/no-data.png" alt="noData" width={50} height={50} />
                                            <span>No results.</span>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <Pagination
                    totalItems={filteredTickets.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                    onItemsPerPageChange={setItemsPerPage}
                />
            </section>
        </section>
    );
}