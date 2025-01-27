import React from 'react';
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CalendarIcon } from 'lucide-react';
import { format } from "date-fns";
import { cn } from "@/lib/types/utils";
import {Label} from "@/components/ui/label";

type DatePickerProps = {
    label: string;
    date: Date | undefined;
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
    error?: string;
    required?: boolean;
};

export const DatePickerComponent: React.FC<DatePickerProps> = ({ label, date, setDate, error, required = false }) => {
    const handleTimeChange = (type: "hour" | "minute", value: string, dateSetter: React.Dispatch<React.SetStateAction<Date | undefined>>, date: Date | undefined) => {
        if (date) {
            const newDate = new Date(date);
            if (type === "hour") {
                newDate.setHours(parseInt(value));
            } else if (type === "minute") {
                newDate.setMinutes(parseInt(value));
            }
            dateSetter(newDate);
        }
    };

    return (
        <section className="space-y-2">
            <Label className="text-base font-medium text-primary-color-text dark:text-secondary-color-text">
                {label}
                {required && <span className="text-red-500">*</span>}
            </Label>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant={"outline"} className={cn("w-full border border-light-border-color rounded-[6px] text-base md:text-lg py-[22px] justify-between text-left font-normal", !date && "text-muted-foreground")}>
                        {date ? format(date, "PPP HH:mm") : <span className=" text-light-border-color">Pick a date</span>}
                        <CalendarIcon className="h-4 w-4" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-gray-100 rounded-[6px]">
                    <div className="sm:flex">
                        <CalendarComponent className="bg-white dark:bg-khotixs-background-dark dark:text-secondary-color-text rounded-[6px]" mode="single" selected={date} onSelect={setDate} initialFocus />
                        <div className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
                            <ScrollArea className="w-64 sm:w-auto">
                                <div className="flex sm:flex-col p-2">
                                    {Array.from({ length: 24 }, (_, i) => i).reverse().map((hour) => (
                                        <Button key={hour} size="icon" variant={date && date.getHours() === hour ? "default" : "ghost"} className="sm:w-full shrink-0 aspect-square" onClick={() => handleTimeChange("hour", hour.toString(), setDate, date)}>
                                            {hour}
                                        </Button>
                                    ))}
                                </div>
                                <ScrollBar orientation="horizontal" className="sm:hidden" />
                            </ScrollArea>
                            <ScrollArea className="w-64 sm:w-auto">
                                <div className="flex sm:flex-col p-2">
                                    {Array.from({ length: 12 }, (_, i) => i * 5).map((minute) => (
                                        <Button key={minute} size="icon" variant={date && date.getMinutes() === minute ? "default" : "ghost"} className="sm:w-full shrink-0 aspect-square" onClick={() => handleTimeChange("minute", minute.toString(), setDate, date)}>
                                            {minute}
                                        </Button>
                                    ))}
                                </div>
                                <ScrollBar orientation="horizontal" className="sm:hidden" />
                            </ScrollArea>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
            {error && <p className="text-red-500">{error}</p>}
        </section>
    );
};