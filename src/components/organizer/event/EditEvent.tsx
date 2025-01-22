'use client';
import React, {useState, useRef, useEffect} from "react";
import {CalendarIcon} from 'lucide-react';
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {LuUpload} from "react-icons/lu";
import {Label} from "@/components/ui/label";
import {z} from 'zod';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Calendar as CalendarComponent} from "@/components/ui/calendar";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";
import {cn} from "@/lib/utils";
import {format} from "date-fns";
import {useRouter} from "next/navigation";
import Image from "next/image";
import {EventType} from "@/lib/customer/event";
import {LoadingButton} from "@/components/ui/loading-button";

const eventSchema = z.object({
    eventTitle: z.string().min(1, "Event title is required"),
    eventCategoryName: z.string().min(1, "Category is required"),
    location: z.string().min(1, "Location is required"),
    startedDate: z.string().min(1, "Start date is required"),
    endedDate: z.string().min(1, "End date is required"),
    description: z.string().optional(),
    thumbnail: z.string().nullable(),
});

type PropsType = {
    id: string;
}

export function EditEvent({id}: PropsType) {
    const router = useRouter();
    const [startedDate, setStartedDate] = useState<Date | undefined>();
    const [endedDate, setEndedDate] = useState<Date | undefined>();
    const [thumbnail, setThumbnail] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [eventData, setEventData] = useState<EventType | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [loading, setLoading] = useState(false);

    const getdata = async () => {
        await fetch(`/event-ticket/api/v1/events/${id}`)
            .then(response => response.json())
            .then(data => {
                setStartedDate(new Date(data.startedDate));
                setEndedDate(new Date(data.endedDate));
                setThumbnail(data.thumbnail);
                setEventData(data);
                setSelectedCategory(data.eventCategory);
            })
            .catch((error) => {
                    console.error('Error:', error);
                }
            );
    }
    useEffect(() => {
        getdata();
    }, []);

    const handleTimeChange = (
        type: "hour" | "minute",
        value: string,
        dateSetter: React.Dispatch<React.SetStateAction<Date | undefined>>,
        date: Date | undefined
    ) => {
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

    const handleSectionClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            try {
                const response = await fetch('/asset/api/v1/files', {
                    method: 'POST',
                    body: formData,
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setThumbnail(data.uri);
            } catch (error) {
                console.error("Error uploading file:", error);
            }
        }
    };

    const calculateCapacity = (start: Date | undefined, end: Date | undefined): number => {
        if (!start || !end) return 0;
        const diffTime = Math.abs(end.getTime() - start.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const formatStartedDate = startedDate ? format(startedDate, "yyyy-MM-dd'T'HH:mm") : "";
        const formatEndedDate = endedDate ? format(endedDate, "yyyy-MM-dd'T'HH:mm") : "";

        const formData = {
            eventTitle: ((e.target as HTMLFormElement).elements.namedItem('eventTitle') as HTMLInputElement).value,
            eventCategoryName: selectedCategory,
            location: ((e.target as HTMLFormElement).elements.namedItem('location') as HTMLInputElement).value,
            startedDate: formatStartedDate,
            endedDate: formatEndedDate,
            description: ((e.target as HTMLFormElement).elements.namedItem('description') as HTMLTextAreaElement).value,
            thumbnail,
            capacity: calculateCapacity(startedDate, endedDate),
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
            console.log("Validation Errors:", newErrors);
            setLoading(false);
        } else {
            setErrors({});
            try {
                const response = await fetch(`/event-ticket/api/v1/events/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                router.push("/organizer/events");
            } catch (error) {
                console.error("Error submitting form:", error);
            } finally {
                setLoading(false);
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

                        <p className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">Edit
                            Event
                        </p>

                        <section className="grid md:grid-cols-2 gap-4">

                            <section className=" flex flex-col space-y-2 ">
                                <section className="space-y-2">
                                    <Label
                                        className="text-base font-medium text-primary-color-text dark:text-secondary-color-text"
                                        htmlFor="eventTitle">
                                        Event title
                                        <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="eventTitle"
                                        name="eventTitle"
                                        placeholder="Enter event title"
                                        className="p-2 text-lg border-light-border-color rounded-[6px] dark:border placeholder:text-gray-300 dark:border-white dark:text-secondary-color-text dark:bg-khotixs-background-dark"
                                        defaultValue={eventData?.eventTitle || ""}
                                    />
                                    {errors.eventTitle && <p className="text-red-500">{errors.eventTitle}</p>}
                                </section>

                                <section className="space-y-2">
                                    <Label
                                        className="text-base font-medium text-primary-color-text dark:text-secondary-color-text"
                                        htmlFor="eventCategoryName">
                                        Category
                                    </Label>
                                    <Select name="eventCategoryName" value={selectedCategory} onValueChange={setSelectedCategory}>
                                        <SelectTrigger
                                            className=" border border-light-border-color rounded-[6px] text-base md:text-lg ">
                                            <SelectValue placeholder="Select category"/>
                                        </SelectTrigger>
                                        <SelectContent className=" bg-khotixs-background-white rounded-[6px] ">
                                            <SelectItem value="concert">Concert</SelectItem>
                                            <SelectItem value="technology">Technology</SelectItem>
                                            <SelectItem value="conference">Conference</SelectItem>
                                            <SelectItem value="sport">Sport</SelectItem>
                                            <SelectItem value="community">Community</SelectItem>
                                            <SelectItem value="general">General</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.eventCategoryName &&
                                        <p className="text-red-500">{errors.eventCategoryName}</p>}
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
                                        defaultValue={eventData?.location || ""}
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
                                                    !startedDate && "text-muted-foreground"
                                                )}
                                            >
                                                {startedDate ? format(startedDate, "PPP HH:mm") :
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
                                                    selected={startedDate}
                                                    onSelect={setStartedDate}
                                                    initialFocus
                                                />
                                                <div
                                                    className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
                                                    <ScrollArea className="w-64 sm:w-auto">
                                                        <div className="flex sm:flex-col p-2">
                                                            {Array.from({length: 24}, (_, i) => i).reverse().map((hour) => (
                                                                <Button
                                                                    key={hour}
                                                                    size="icon"
                                                                    variant={
                                                                        startedDate && startedDate.getHours() === hour
                                                                            ? "default"
                                                                            : "ghost"
                                                                    }
                                                                    className="sm:w-full shrink-0 aspect-square"
                                                                    onClick={() => handleTimeChange("hour", hour.toString(), setStartedDate, startedDate)}
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
                                                                        startedDate && startedDate.getMinutes() === minute
                                                                            ? "default"
                                                                            : "ghost"
                                                                    }
                                                                    className="sm:w-full shrink-0 aspect-square"
                                                                    onClick={() => handleTimeChange("minute", minute.toString(), setStartedDate, startedDate)}
                                                                >
                                                                    {minute}
                                                                </Button>
                                                            ))}
                                                        </div>
                                                        <ScrollBar orientation="horizontal" className="sm:hidden"/>
                                                    </ScrollArea>
                                                </div>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                    {errors.startedDate && <p className="text-red-500">{errors.startedDate}</p>}
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
                                                    !endedDate && "text-muted-foreground"
                                                )}
                                            >
                                                {endedDate ? format(endedDate, "PPP HH:mm") :
                                                    <span className=" text-light-border-color">Pick an end date</span>}
                                                <CalendarIcon className="h-4 w-4"/>
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0 bg-gray-100 rounded-[6px]">
                                            <div className="sm:flex">
                                                <CalendarComponent
                                                    className="bg-white dark:bg-khotixs-background-dark dark:text-secondary-color-text rounded-[6px]"
                                                    mode="single"
                                                    selected={endedDate}
                                                    onSelect={setEndedDate}
                                                    initialFocus
                                                />
                                                <div
                                                    className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
                                                    <ScrollArea className="w-64 sm:w-auto">
                                                        <div className="flex sm:flex-col p-2">
                                                            {Array.from({length: 24}, (_, i) => i).reverse().map((hour) => (
                                                                <Button
                                                                    key={hour}
                                                                    size="icon"
                                                                    variant={
                                                                        endedDate && endedDate.getHours() === hour
                                                                            ? "default"
                                                                            : "ghost"
                                                                    }
                                                                    className="sm:w-full shrink-0 aspect-square"
                                                                    onClick={() => handleTimeChange("hour", hour.toString(), setEndedDate, endedDate)}
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
                                                                        endedDate && endedDate.getMinutes() === minute
                                                                            ? "default"
                                                                            : "ghost"
                                                                    }
                                                                    className="sm:w-full shrink-0 aspect-square"
                                                                    onClick={() => handleTimeChange("minute", minute.toString(), setEndedDate, endedDate)}
                                                                >
                                                                    {minute}
                                                                </Button>
                                                            ))}
                                                        </div>
                                                        <ScrollBar orientation="horizontal" className="sm:hidden"/>
                                                    </ScrollArea>
                                                </div>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                    {errors.endedDate && <p className="text-red-500">{errors.endedDate}</p>}
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
                                        defaultValue={eventData?.description || ""}
                                    />
                                    {errors.description && <p className="text-red-500">{errors.description}</p>}
                                </section>
                            </section>

                            <section className=" w-full pt-[30px]">
                                <section
                                    className=" w-full h-full border-gray-400 border border-dashed rounded-[6px]"
                                    onClick={handleSectionClick}>
                                    <div className=" w-full h-full flex flex-col justify-center items-center ">
                                        {thumbnail ? (
                                            <Image
                                                unoptimized width={100} height={100} src={thumbnail} alt="Uploaded"
                                                className="h-full w-full object-cover rounded-[6px]"/>
                                        ) : (
                                            <>
                                                <LuUpload className=" h-[50px] w-[50px] text-gray-400"/>
                                                <p className=" text-gray-400">Drop file here or click to upload
                                                    here </p>
                                            </>
                                        )}
                                    </div>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        style={{display: 'none'}}
                                        onChange={handleFileChange}
                                    />
                                </section>
                            </section>
                        </section>

                    </section>


                </CardContent>
            </Card>
            <section className="flex flex-wrap justify-end gap-4 pt-6 ">
                <LoadingButton
                    onClick={() => router.push("/organizer/events")}
                    className="w-24 text-red-500 border border-red-500 rounded-[6px] hover:bg-red-300/10 hover:bg-red-500 hover:text-white"
                    size={"lg"}
                    loading={loading}
                >
                    {!loading && "Cancel"}
                </LoadingButton>
                <LoadingButton
                    type="submit"
                    className="bg-primary-color w-24 rounded-[6px] text-secondary-color-text hover:bg-primary-color/90 dark:text-secondary-color-text"
                    size={"lg"}
                    loading={loading}
                >
                    {!loading && "Save"}
                </LoadingButton>
            </section>
        </form>
    )
}