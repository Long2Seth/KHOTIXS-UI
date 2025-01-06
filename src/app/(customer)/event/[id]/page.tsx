'use client';

import {eventData} from "@/lib/customer/upcomingData";
import {CardComponent} from "@/components/customer/card/CardComponent";
import {useParams} from 'next/navigation';
import React, {useEffect, useState} from "react";
import SkeletonEventByCategory from "@/components/customer/card/SkeletonEventByCategory";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {Calendar} from "lucide-react";
import {format} from "date-fns";
import {Calendar as CalendarComponent} from "@/components/ui/calendar";

export default function EventByCategory() {
    const params = useParams();
    const category = params.id as string;
    const [isLoading, setIsLoading] = useState(true);
    const [date, setDate] = useState<Date>()

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const filteredEvents = eventData.filter(event => event.eventType.toLowerCase() === category.toLowerCase());

    return (
        <>
            {
                isLoading ? <SkeletonEventByCategory/> :
                    <section
                        className="space-y-8 my-10 container mx-auto p-5 sm:w-full dark:bg-khotixs-background-dark bg-khotixs-background-white h-auto">
                        <div className="md:flex items-center justify-between lg:px-[30px]">
                            <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text uppercase  ">
                                {category} Events
                            </h1>
                            <div
                                className="md:flex md:mt-0 lg:flex lg:mt-0 mt-4 grid grid-cols-2 sm:flex-row md:flex-row lg:flex-row md:gap-1 gap-4 lg:gap-4">
                                <Select>
                                    <SelectTrigger
                                        className="w-full h-[40px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                        <SelectValue placeholder="Ticket Type"/>
                                    </SelectTrigger>
                                    <SelectContent
                                        className="w-full sm:w-[350px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text gap-4">
                                        <SelectItem value="all">All</SelectItem>
                                        <SelectItem value="free">Free</SelectItem>
                                        <SelectItem value="vip">VIP</SelectItem>
                                        <SelectItem value="premium">Premium</SelectItem>
                                        <SelectItem value="regular">Regular</SelectItem>
                                    </SelectContent>
                                </Select>

                                <Select>
                                    <SelectTrigger
                                        className="w-full h-[40px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                        <SelectValue placeholder="Price Range"/>
                                    </SelectTrigger>
                                    <SelectContent
                                        className="w-full sm:w-[350px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text gap-4">
                                        <SelectItem value="5">$5</SelectItem>
                                        <SelectItem value="10">$10</SelectItem>
                                        <SelectItem value="15">$15</SelectItem>
                                        <SelectItem value="20">$20</SelectItem>
                                        <SelectItem value="30">$30</SelectItem>
                                        <SelectItem value="40">$40</SelectItem>
                                    </SelectContent>
                                </Select>

                                <section className="col-span-2">
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                className="justify-start text-left font-normal w-full md:max-w-[400px] h-[40px] p-5 border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                                <Calendar className="mr-2 h-4 w-4"/>
                                                {date ? format(date, "PPP") :
                                                    <span className="text-md md:text-lg">Pick a date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent
                                            className="w-auto p-0 bg-gray-100 rounded-[6px] custom-popover-content">
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

                            </div>
                        </div>
                        <section
                            className="container mx-auto w-full bg-khotixs-background-white dark:bg-khotixs-background-dark flex flex-col justify-center items-center h-auto">
                            <section
                                className="h-auto grid gap-2 grid-cols-1 sm:grid-cols-2 sm:w-full md:gap-5 md:grid-cols-2 lg:max-w-full lg:grid-cols-3 justify-center items-center sm:p-0 lg:px-[30px]">
                                {filteredEvents.map((event, index) => (
                                    <CardComponent key={index} event={event}/>
                                ))}
                            </section>
                        </section>
                    </section>
            }
        </>

    )
        ;
}