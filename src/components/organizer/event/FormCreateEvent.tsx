'use client';
import React, { useState, useRef } from "react";
import { CalendarIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LuUpload } from "react-icons/lu";
import { Label } from "@/components/ui/label";
import { z } from 'zod';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Define the zod schema
const eventSchema = z.object({
    title: z.string().min(1, "Event title is required"),
    category: z.string().min(1, "Category is required"),
    location: z.string().min(1, "Location is required"),
    startDate: z.date().nullable().refine(date => date !== null, "Start date is required"),
    endDate: z.date().nullable().refine(date => date !== null, "End date is required"),
    capacity: z.number().min(1, "Day capacity must be at least 1"),
    description: z.string().optional(),
    imageUrl: z.string().nullable(),
});

export function CreateEventForm() {
    const router = useRouter();
    const [startDate, setStartDate] = useState<Date | undefined>();
    const [endDate, setEndDate] = useState<Date | undefined>();
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [action, setAction] = useState<string>("");

    const handleTimeChange = (
        type: "hour" | "minute" | "ampm",
        value: string,
        dateSetter: React.Dispatch<React.SetStateAction<Date | undefined>>,
        date: Date | undefined
    ) => {
        if (date) {
            const newDate = new Date(date);
            if (type === "hour") {
                newDate.setHours(
                    (parseInt(value) % 12) + (newDate.getHours() >= 12 ? 12 : 0)
                );
            } else if (type === "minute") {
                newDate.setMinutes(parseInt(value));
            } else if (type === "ampm") {
                const currentHours = newDate.getHours();
                newDate.setHours(
                    value === "PM" ? currentHours + 12 : currentHours - 12
                );
            }
            dateSetter(newDate);
        }
    };

    const handleSectionClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = {
            title: ((e.target as HTMLFormElement).elements.namedItem('title') as HTMLInputElement).value,
            category: ((e.target as HTMLFormElement).elements.namedItem('category') as HTMLSelectElement).value,
            location: ((e.target as HTMLFormElement).elements.namedItem('location') as HTMLInputElement).value,
            startDate,
            endDate,
            capacity: parseInt(((e.target as HTMLFormElement).elements.namedItem('capacity') as HTMLInputElement).value),
            description: ((e.target as HTMLFormElement).elements.namedItem('description') as HTMLTextAreaElement).value,
            imageUrl,
        };

        const result = eventSchema.safeParse(formData);
        if (!result.success) {
            const newErrors: Record<string, string> = {};
            result.error.errors.forEach(error => {
                if (error.path.length > 0) {
                    newErrors[error.path[0] as string] = error.message;
                }
            });
            setErrors(newErrors);
        } else {
            setErrors({});
            // Handle form submission
            if (action === "save") {
                router.push("/organizer/events");
            } else if (action === "saveAndContinue") {
                router.push("/organizer/events/tickets");
            }
        }
    };
    return (
        <form
            onSubmit={handleSubmit}
            className=" bg-white rounded-[6px] p-10 dark:bg-khotixs-background-dark dark:border dark:border-dark-border-color mx-5 lg:mx-10">

            <Card className=" w-full rounded-[6px]  ">

                <CardContent className=" w-full rounded-[6px]">

                    <section className="space-y-6">

                        <p className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">Event
                            Info</p>

                        <section className="grid md:grid-cols-2 gap-4">

                            <section className=" flex flex-col space-y-2 ">
                                <section className="space-y-2">
                                    <Label
                                        className="text-base font-medium text-primary-color-text dark:text-secondary-color-text"
                                        htmlFor="title">
                                        Event title
                                        <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="title"
                                        name="title"
                                        placeholder="Enter event title"
                                        className="p-2 text-lg border-light-border-color rounded-[6px] dark:border placeholder:text-gray-300 dark:border-white dark:text-secondary-color-text dark:bg-khotixs-background-dark"
                                        />
                                    {errors.title && <p className="text-red-500">{errors.title}</p>}
                                </section>

                                <section className="space-y-2">
                                    <Label
                                        className="text-base font-medium text-primary-color-text dark:text-secondary-color-text"
                                        htmlFor="category">
                                        Category
                                    </Label>
                                    <Select name="category">
                                        <SelectTrigger
                                            className=" border border-light-border-color rounded-[6px] text-base md:text-lg ">
                                            <SelectValue placeholder="Select category"/>
                                        </SelectTrigger>
                                        <SelectContent className=" bg-khotixs-background-white rounded-[6px] ">
                                            <SelectItem value="concert">Concert</SelectItem>
                                            <SelectItem value="conference">Technology</SelectItem>
                                            <SelectItem value="exhibition">Conferences</SelectItem>
                                            <SelectItem value="exhibition">Sports</SelectItem>
                                            <SelectItem value="exhibition">Community</SelectItem>
                                            <SelectItem value="exhibition">General</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.category && <p className="text-red-500">{errors.category}</p>}
                                </section>

                                <section className="space-y-2">
                                    <Label
                                        className="text-base font-medium text-primary-color-text dark:text-secondary-color-text"
                                        htmlFor="location">
                                        Location
                                        <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="location"
                                        name="location"
                                        placeholder="Enter location"
                                        className="border border-light-border-color rounded-[6px] text-base md:text-lg placeholder:text-light-border-color focus:outline-none"
                                        />
                                    {errors.location && <p className="text-red-500">{errors.location}</p>}
                                </section>

                                <section className="space-y-2">
                                    <Label
                                        className="text-base font-medium text-primary-color-text dark:text-secondary-color-text">
                                        Start Date
                                        <span className="text-red-500">*</span>
                                    </Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full border border-light-border-color rounded-[6px] text-base md:text-lg py-[22px] justify-between text-left font-normal",
                                                    !startDate && "text-muted-foreground"
                                                )}
                                            >
                                                {startDate ? format(startDate, "PPP hh:mm aa") :
                                                    <span className=" text-light-border-color">Pick a start date</span>
                                                }
                                                <CalendarIcon className="h-4 w-4"/>
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0 bg-gray-100 rounded-[6px]">
                                            <div className="sm:flex">
                                                <CalendarComponent
                                                    className="bg-white dark:bg-khotixs-background-dark dark:text-secondary-color-text rounded-[6px]"
                                                    mode="single"
                                                    selected={startDate}
                                                    onSelect={setStartDate}
                                                    initialFocus
                                                />
                                                <div
                                                    className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
                                                    <ScrollArea className="w-64 sm:w-auto">
                                                        <div className="flex sm:flex-col p-2">
                                                            {Array.from({length: 12}, (_, i) => i + 1).reverse().map((hour) => (
                                                                <Button
                                                                    key={hour}
                                                                    size="icon"
                                                                    variant={
                                                                        startDate && startDate.getHours() % 12 === hour % 12
                                                                            ? "default"
                                                                            : "ghost"
                                                                    }
                                                                    className="sm:w-full shrink-0 aspect-square"
                                                                    onClick={() => handleTimeChange("hour", hour.toString(), setStartDate, startDate)}
                                                                >
                                                                    {hour}
                                                                </Button>
                                                            ))}
                                                        </div>
                                                        <ScrollBar orientation="horizontal" className="sm:hidden"/>
                                                    </ScrollArea>
                                                    <ScrollArea className="w-64 sm:w-auto">
                                                        <div className="flex sm:flex-col p-2">
                                                            {Array.from({length: 12}, (_, i) => i * 5).map((minute) => (
                                                                <Button
                                                                    key={minute}
                                                                    size="icon"
                                                                    variant={
                                                                        startDate && startDate.getMinutes() === minute
                                                                            ? "default"
                                                                            : "ghost"
                                                                    }
                                                                    className="sm:w-full shrink-0 aspect-square"
                                                                    onClick={() => handleTimeChange("minute", minute.toString(), setStartDate, startDate)}
                                                                >
                                                                    {minute}
                                                                </Button>
                                                            ))}
                                                        </div>
                                                        <ScrollBar orientation="horizontal" className="sm:hidden"/>
                                                    </ScrollArea>
                                                    <ScrollArea className="">
                                                        <div className="flex sm:flex-col p-2">
                                                            {["AM", "PM"].map((ampm) => (
                                                                <Button
                                                                    key={ampm}
                                                                    size="icon"
                                                                    variant={
                                                                        startDate &&
                                                                        ((ampm === "AM" && startDate.getHours() < 12) ||
                                                                            (ampm === "PM" && startDate.getHours() >= 12))
                                                                            ? "default"
                                                                            : "ghost"
                                                                    }
                                                                    className="sm:w-full shrink-0 aspect-square"
                                                                    onClick={() => handleTimeChange("ampm", ampm, setStartDate, startDate)}
                                                                >
                                                                    {ampm}
                                                                </Button>
                                                            ))}
                                                        </div>
                                                    </ScrollArea>
                                                </div>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                    {errors.startDate && <p className="text-red-500">{errors.startDate}</p>}
                                </section>

                                <section className="space-y-2">
                                    <Label
                                        className="text-base font-medium text-primary-color-text dark:text-secondary-color-text">
                                        End Date
                                        <span className="text-red-500">*</span>
                                    </Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full border border-light-border-color placeholder:text-light-border-color rounded-[6px] text-base md:text-lg py-[22px] justify-between text-left font-normal",
                                                    !endDate && "text-muted-foreground"
                                                )}
                                            >
                                                {endDate ? format(endDate, "PPP hh:mm aa") :
                                                    <span className=" text-light-border-color">Pick an end date</span>}
                                                <CalendarIcon className="h-4 w-4"/>
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0 bg-gray-100 rounded-[6px]">
                                            <div className="sm:flex">
                                                <CalendarComponent
                                                    className="bg-white dark:bg-khotixs-background-dark dark:text-secondary-color-text rounded-[6px]"
                                                    mode="single"
                                                    selected={endDate}
                                                    onSelect={setEndDate}
                                                    initialFocus
                                                />
                                                <div
                                                    className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
                                                    <ScrollArea className="w-64 sm:w-auto">
                                                        <div className="flex sm:flex-col p-2">
                                                            {Array.from({length: 12}, (_, i) => i + 1).reverse().map((hour) => (
                                                                <Button
                                                                    key={hour}
                                                                    size="icon"
                                                                    variant={
                                                                        endDate && endDate.getHours() % 12 === hour % 12
                                                                            ? "default"
                                                                            : "ghost"
                                                                    }
                                                                    className="sm:w-full shrink-0 aspect-square"
                                                                    onClick={() => handleTimeChange("hour", hour.toString(), setEndDate, endDate)}
                                                                >
                                                                    {hour}
                                                                </Button>
                                                            ))}
                                                        </div>
                                                        <ScrollBar orientation="horizontal" className="sm:hidden"/>
                                                    </ScrollArea>
                                                    <ScrollArea className="w-64 sm:w-auto">
                                                        <div className="flex sm:flex-col p-2">
                                                            {Array.from({length: 12}, (_, i) => i * 5).map((minute) => (
                                                                <Button
                                                                    key={minute}
                                                                    size="icon"
                                                                    variant={
                                                                        endDate && endDate.getMinutes() === minute
                                                                            ? "default"
                                                                            : "ghost"
                                                                    }
                                                                    className="sm:w-full shrink-0 aspect-square"
                                                                    onClick={() => handleTimeChange("minute", minute.toString(), setEndDate, endDate)}
                                                                >
                                                                    {minute}
                                                                </Button>
                                                            ))}
                                                        </div>
                                                        <ScrollBar orientation="horizontal" className="sm:hidden"/>
                                                    </ScrollArea>
                                                    <ScrollArea className="">
                                                        <div className="flex sm:flex-col p-2">
                                                            {["AM", "PM"].map((ampm) => (
                                                                <Button
                                                                    key={ampm}
                                                                    size="icon"
                                                                    variant={
                                                                        endDate &&
                                                                        ((ampm === "AM" && endDate.getHours() < 12) ||
                                                                            (ampm === "PM" && endDate.getHours() >= 12))
                                                                            ? "default"
                                                                            : "ghost"
                                                                    }
                                                                    className="sm:w-full shrink-0 aspect-square"
                                                                    onClick={() => handleTimeChange("ampm", ampm, setEndDate, endDate)}
                                                                >
                                                                    {ampm}
                                                                </Button>
                                                            ))}
                                                        </div>
                                                    </ScrollArea>
                                                </div>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                    {errors.endDate && <p className="text-red-500">{errors.endDate}</p>}
                                </section>

                                <section className="space-y-2">
                                    <Label
                                        className="text-base font-medium text-primary-color-text dark:text-secondary-color-text"
                                        htmlFor="capacity">
                                        Day Capacity
                                    </Label>
                                    <Input
                                        id="capacity"
                                        name="capacity"
                                        type="number"
                                        placeholder="0"
                                        className=" border border-light-border-color rounded-[6px] placeholder:text-light-border-color text-base md:text-lg focus:outline-none"
                                        min="1"/>
                                    {errors.capacity && <p className="text-red-500">{errors.capacity}</p>}

                                </section>

                                <section className="space-y-2">
                                    <Label
                                        className="text-base font-medium text-primary-color-text dark:text-secondary-color-text"
                                        htmlFor="description">
                                        Event Description
                                    </Label>
                                    <Textarea
                                        id="description"
                                        name="description"
                                        placeholder="Enter event description"
                                        className="min-h-[100px] border border-light-border-color rounded-[6px] text-base md:text-lg placeholder:text-light-border-color focus:outline-none"
                                    />
                                    {errors.description && <p className="text-red-500">{errors.description}</p>}
                                </section>
                            </section>

                            <section className=" w-full pt-[30px]">
                                <section className=" w-full h-[640px] border-gray-400 border border-dashed rounded-[6px]" onClick={handleSectionClick}>
                                    <div className=" w-full h-full flex flex-col justify-center items-center ">
                                        {imageUrl ? (
                                            <Image
                                                unoptimized width={100} height={100} src={imageUrl} alt="Uploaded" className="h-full w-full object-cover rounded-none" />
                                        ) : (
                                            <>
                                                <LuUpload className=" h-[50px] w-[50px] text-gray-400"/>
                                                <p className=" text-gray-400">Drop file here or click to upload here </p>
                                            </>
                                        )}
                                    </div>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        style={{ display: 'none' }}
                                        onChange={handleFileChange}
                                    />
                                </section>
                            </section>
                        </section>

                    </section>


                </CardContent>
            </Card>

            {/* action button */}
            <section className="flex flex-wrap justify-end gap-4 pt-6 ">
                <Button
                    onClick={() => router.push("/organizer/events")}
                    className="border-red-600 text-red-500 rounded-[6px] hover:text-red-600 hover:bg-red-50 "
                    variant="outline">
                    Cancel
                </Button>
                <Button type="submit"
                        onClick={() => setAction("save")}
                        className="bg-primary-color border border-primary-color rounded-[6px] text-secondary-color-text hover:bg-primary-color/80 ">
                    Save
                </Button>
                <Button
                    type="submit"
                    onClick={() => setAction("saveAndContinue")}
                    className="bg-primary-color border border-primary-color rounded-[6px] text-secondary-color-text hover:bg-primary-color/80">
                    Save & Continue
                </Button>
            </section>
        </form>
    )
}