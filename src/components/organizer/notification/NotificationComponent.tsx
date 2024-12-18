'use client';
import React, {useState} from "react";
import {Calendar} from 'lucide-react';
import {format} from "date-fns";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Calendar as CalendarComponent} from "@/components/ui/calendar";
import {Pagination} from "@/components/Pagination";
import {NotificationData} from "@/lib/organizer/NotificationData";

// const categories = ["Sport", "Technology", "Music", "Art"];

export default function EventComponent() {
    const [searchData, setSearchData] = useState("");
    const [date, setDate] = useState<Date>();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    // const [category, setCategory] = useState("all");
    const [status, setStatus] = useState("all");

    // Filter events based on search term, category, location, and status
    const filteredData = NotificationData.filter(notification => {
        return (
            // (category === "all" || notification.eventType.toLowerCase() === category.toLowerCase()) &&
            (status === "all" || notification.status === status) &&
            notification.eventName.toLowerCase().includes(searchData.toLowerCase())
        );
    });


    const totalItems = filteredData.length;

    // Get current items for pagination
    const currentItems = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Handle page change
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    // Handle items per page change
    const handleItemsPerPageChange = (items: number) => {
        setItemsPerPage(items);
        setCurrentPage(1); // Reset to first page
    };

    return (
        <section className="w-full border-primary-color ">
            <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ">
                    <CardTitle>
                        <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text ">NOTIFICATION
                        </h1>
                    </CardTitle>
                </div>
            </CardHeader>

            <CardContent className="bg-white p-10 rounded-[6px] dark:backdrop-blur dark:bg-opacity-5 space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <Input
                        placeholder="Search by event name"
                        value={searchData}
                        onChange={(e) => setSearchData(e.target.value)}
                        className="border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text"
                    />
                    <div className="flex flex-col sm:flex-row gap-4">
                        {/*<Select onValueChange={setCategory}>*/}
                        {/*    <SelectTrigger*/}
                        {/*        className={`min-w-[200px] max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text ${category === "all" ? "text-gray-400" : "text-black"}`}>*/}
                        {/*        <SelectValue placeholder="Category"/>*/}
                        {/*    </SelectTrigger>*/}
                        {/*    <SelectContent*/}
                        {/*        className="min-w-[200px] max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">*/}
                        {/*        <SelectItem value="all">ALL</SelectItem>*/}
                        {/*        {categories.map(category => (*/}
                        {/*            <SelectItem key={category.toLowerCase()}*/}
                        {/*                        value={category.toLowerCase()}>{category}</SelectItem>*/}
                        {/*        ))}*/}
                        {/*    </SelectContent>*/}
                        {/*</Select>*/}

                        <Select onValueChange={setStatus}>
                            <SelectTrigger
                                className={`px-3 min-w-[150px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text ${status === "all" ? "text-gray-400" : "text-black"}`}>
                                <SelectValue placeholder="Ticket Type"/>
                            </SelectTrigger>
                            <SelectContent
                                className="min-w-[150px] max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectItem value="all">ALL</SelectItem>
                                <SelectItem value="enable">VIP</SelectItem>
                                <SelectItem value="disable">PREMIUM</SelectItem>
                                <SelectItem value="enable">REGULAR</SelectItem>
                                <SelectItem value="disable">FREE</SelectItem>
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
                </div>
                <div className="w-full ">
                    <div className="w-full ">
                        <div className=" ">
                            {currentItems.map((notification) => (
                                <Card key={notification.id} className="mb-4 relative border-b-2 border-gray-200 hover:bg-gray-100 dark:hover:bg-khotixs-background-dark">
                                    <div className="flex items-center p-4 justify-between">
                                        <div className="flex w-full gap-2">
                                            <div
                                                style={{
                                                    backgroundImage: `url(${notification.userImage})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    width: '60px',
                                                    height: '60px',
                                                    borderRadius: '6px'
                                                }}
                                            />
                                            <div className="flex flex-col ">
                                                <div className="flex">
                                                    <p className="text-lg font-bold">
                                                        {notification.userName} has ordered {notification.eventName}
                                                    </p>
                                                    <p
                                                        className={`text-lg ml-10 px-2 rounded-[6px] text-secondary-color-text ${
                                                            notification.eventType === "VIP"
                                                                ? "bg-label-vip"
                                                                : notification.eventType === "PREMIUM"
                                                                    ? "bg-label-premium"
                                                                    : notification.eventType === "REGULAR"
                                                                        ? "bg-label-regular"
                                                                        : "bg-label-free"
                                                        }`}
                                                    >
                                                        {notification.eventType}
                                                    </p>
                                                </div>

                                                <p>{notification.date}</p>
                                            </div>
                                        </div>
                                        <div className="text-start w-[150px]">
                                            <p className="text-lg">
                                                Ticket : <span
                                                className="text-red-500">{notification.qty}</span> {notification.qty === 1 ? 'item' : 'items'}
                                            </p>
                                            <p className="text-lg font-bold text-label-free">
                                                +${notification.price * notification.qty}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
                <Pagination
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                    onItemsPerPageChange={handleItemsPerPageChange}
                />
            </CardContent>
        </section>
    );
}