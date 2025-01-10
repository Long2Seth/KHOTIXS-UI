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
import {Pagination} from "@/components/ui/Pagination";
import {ActionEventComponent} from "@/components/organizer/event/ActionEventComponent";
import {AllEventData} from "@/lib/organizer/Event";
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
            <CardHeader className=" my-5">
                <div className="flex flex-row justify-between items-start sm:items-center gap-4 ">
                    <CardTitle className=" w-[80%]">
                        <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text ">INFORMATION
                            EVENT
                        </h1>
                    </CardTitle>
                    <Button
                        onClick={() => route.push("/organizer/events/create")}
                        className="text-secondary-color-text rounded-[6px] bg-primary-color hover:bg-primary-color/80 w-auto"
                    >
                        Create event
                    </Button>
                </div>
            </CardHeader>

            <CardContent className="bg-white p-10 rounded-[6px] dark:backdrop-blur dark:bg-opacity-5 space-y-4">
                <section className="flex flex-col lg:flex-row gap-4 mb-6">
                    <Input
                        placeholder="Search by event name"
                        value={searchData}
                        onChange={(e) => setSearchData(e.target.value)}
                        className="border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text"
                    />

                    <div className=" grid grid-cols-2 sm:flex sm:flex-row gap-4">

                        <Select onValueChange={setCategory}>
                            <SelectTrigger
                                className={` max-w-[250px] md:min-w-[200px] md:max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text ${category === "all" ? "text-gray-400" : "text-black"}`}>
                                <SelectValue placeholder="Category"/>
                            </SelectTrigger>
                            <SelectContent
                                className="max-w-[250px] md:min-w-[200px] md:max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectItem value="all">All</SelectItem>
                                {AllEventData.map(category => (
                                    <SelectItem key={category.category.toLowerCase()}
                                                value={category.category.toLowerCase()}>{category.category}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select onValueChange={setLocation}>
                            <SelectTrigger
                                className={`max-w-[250px] md:min-w-[200px] md:max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text ${location === "all" ? "text-gray-400" : "text-black"}`}>
                                <SelectValue placeholder="Location"/>
                            </SelectTrigger>
                            <SelectContent
                                className="max-w-[250px] md:min-w-[200px] md:max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text">
                                <SelectItem value="all">All</SelectItem>
                                {AllEventData.map(location => (
                                    <SelectItem key={location.location.toLowerCase()}
                                                value={location.location.toLowerCase()}>{location.location}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select onValueChange={setStatus}>
                            <SelectTrigger
                                className={`hidden sm:flex px-3 max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text ${status === "all" ? "text-gray-400" : "text-black"}`}>
                                <SelectValue placeholder="Status"/>
                            </SelectTrigger>
                            <SelectContent
                                className="min-w-[220px] max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="enable">Enable</SelectItem>
                                <SelectItem className=" text-red-500 " value="disable">Disable</SelectItem>
                                <SelectItem value="upcoming">Upcoming</SelectItem>
                                <SelectItem className=" text-red-500 " value="finished">Finished</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                className={`max-w-[600px] h-[40px] lg:h-[50px] p-5 border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text ${date ? "text-black" : "text-gray-400"} `}>
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
                            <Table className="w-full border-none">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className=" min-w-[70px] md:min-w-[100px] lg:min-w-[150px] text-center ">ID</TableHead>
                                        <TableHead className="min-w-[250px] md:min-w-[350px] lg:min-w-[500px] pl-20 text-start ">EVENT NAME</TableHead>
                                        <TableHead className=" min-w-[100px] md:min-w-[150px] lg:min-w-[200px] text-start ">CATEGORY</TableHead>
                                        <TableHead className="min-w-[100px] md:min-w-[150px] lg:min-w-[200px] ">START DATE</TableHead>
                                        <TableHead className="min-w-[100px] md:min-w-[150px] lg:min-w-[200px] ">END DATE</TableHead>
                                        <TableHead className="min-w-[100px] md:min-w-[200px] lg:min-w-[300px] text-start ">LOCATION</TableHead>
                                        <TableHead className="min-w-[100px] md:min-w-[150px] lg:min-w-[200px] text-center ">STATUS</TableHead>
                                        <TableHead className=" min-w-20"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className=" border-none">
                                    {currentItems.map((orderData) => (
                                        <TableRow key={orderData.id} className="hover:bg-gray-100 dark:hover:bg-khotixs-background-dark border-none ">
                                            <TableCell className=" py-3 min-w-[70px] md:min-w-[100px] lg:min-w-[150px] text-center border-none ">{orderData.id}</TableCell>
                                            <TableCell className="flex h-[50px] items-center text-center  min-w-[250px] md:min-w-[350px] lg:min-w-[500px]">
                                                <Image className="rounded-[6px]" width={65} height={60} src={orderData.image} alt="image"/>
                                                <p className=" px-2 text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{orderData.eventName}</p>
                                            </TableCell>
                                            <TableCell className=" min-w-[100px] md:min-w-[150px] lg:min-w-[200px] text-start ">{orderData.category}</TableCell>
                                            <TableCell className="min-w-[100px] md:min-w-[150px] lg:min-w-[200px] text-start ">{orderData.startDate}</TableCell>
                                            <TableCell className="min-w-[100px] md:min-w-[150px] lg:min-w-[200px] text-start ">{orderData.endDate}</TableCell>
                                            <TableCell className="min-w-[100px] md:min-w-[200px] lg:min-w-[300px] text-start ">{orderData.location}</TableCell>
                                            <TableCell className=" z-50 min-w-[100px] md:min-w-[150px] lg:min-w-[200px] text-center text-description-color text-[10px] md:text-sm xl:text-base">
                                                <Badge className={`rounded-[6px] w-[100px] text[10px] md:text-base justify-center font-normal ${
                                                    orderData.status === 'enable'
                                                        ? 'bg-label-regular text-label-text-primary hover:bg-label-regular/80'
                                                        : orderData.status === 'disable'
                                                            ? 'bg-label-description text-label-text-primary hover:bg-label-description/80'
                                                            : orderData.status === 'upcoming'
                                                                ? 'bg-label-free text-label-text-primary hover:bg-label-free/80'
                                                                : 'bg-label-paid text-label-text-primary hover:bg-label-finished/80'
                                                }`}>
                                                    {orderData.status === 'enable'
                                                        ? 'Enable'
                                                        : orderData.status === 'disable'
                                                            ? 'Disable'
                                                            : orderData.status === 'upcoming'
                                                                ? 'Upcoming'
                                                                : 'Finished'}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className=" min-w-20">
                                                <ActionEventComponent/>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

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