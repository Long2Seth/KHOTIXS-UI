'use client'

import React, {useState} from "react"
import {CalendarIcon} from 'lucide-react'
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {Textarea} from "@/components/ui/textarea"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover"
import {Calendar} from "@/components/ui/calendar"
import {cn} from "@/lib/utils"
import {format} from "date-fns"
import Image from "next/image";
import {useRouter} from "next/navigation";

export function EditEvent() {
    const router = useRouter();
    const [startDate, setStartDate] = useState<Date | undefined>()
    const [endDate, setEndDate] = useState<Date | undefined>()
    const [thumbnail, setThumbnail] = useState<string | null>(null)

    const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setThumbnail(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <form className="space-y-8">
            <Card>
                <CardContent className=" w-full pt-6">
                    <section className="w-full ">
                        <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text uppercase m-5">
                            Edit Event
                        </h1>

                        <section
                            className=" w-full space-y-6 bg-white p-10 rounded-[6px] dark:backdrop-blur dark:bg-opacity-5 ">

                            <section className="grid md:grid-cols-2 gap-4">

                                <section className="space-y-2">
                                    <Label
                                        className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text"
                                        htmlFor="title">
                                        Event title
                                        <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="title"
                                        placeholder="Enter event title"
                                        className=" bg-white border-[1px] text-md md:text-lg border-light-border-color rounded-[6px] placeholder:text-gray-400  text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text"
                                        required/>
                                </section>

                                <section className="space-y-2">
                                    <Label
                                        htmlFor="category"
                                        className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text">
                                        Category
                                    </Label>
                                    <Select>
                                        <SelectTrigger
                                            className=" bg-white border-[1px] text-md md:text-lg border-light-border-color rounded-[6px] placeholder:text-gray-400  text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                            <SelectValue placeholder="Select category"/>
                                        </SelectTrigger>
                                        <SelectContent
                                            className=" bg-white border-[1px] text-md md:text-lg border-light-border-color rounded-[6px] placeholder:text-gray-400  text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                            <SelectItem className=" dark:hover:text-primary-color-text"
                                                        value="concert">Concert</SelectItem>
                                            <SelectItem className=" dark:hover:text-primary-color-text"
                                                        value="conference">Technology</SelectItem>
                                            <SelectItem className=" dark:hover:text-primary-color-text"
                                                        value="exhibition">Conferences</SelectItem>
                                            <SelectItem className=" dark:hover:text-primary-color-text"
                                                        value="exhibition">Sports</SelectItem>
                                            <SelectItem className=" dark:hover:text-primary-color-text"
                                                        value="exhibition">Community</SelectItem>
                                            <SelectItem className=" dark:hover:text-primary-color-text"
                                                        value="exhibition">General</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </section>
                            </section>

                            <section className="space-y-2">
                                <Label
                                    htmlFor="description"
                                    className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text">
                                    Event Description
                                </Label>
                                <Textarea
                                    id="description"
                                    placeholder="Enter event description"
                                    className=" bg-white border-[1px] focus:outline-none text-md md:text-lg border-light-border-color rounded-[6px] placeholder:text-gray-400  text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text"
                                />
                            </section>

                            <section className="space-y-2">
                                <Label
                                    htmlFor="location"
                                    className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text">
                                    Location
                                    <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="location"
                                    placeholder="Enter location"
                                    className=" bg-white border-[1px] text-md md:text-lg border-light-border-color rounded-[6px] placeholder:text-gray-400  text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text"
                                    required/>
                            </section>

                            <section className="grid md:grid-cols-2 gap-4">
                                <section className="space-y-2">
                                    <Label
                                        className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text">
                                        Start Date
                                        <span className="text-red-500">*</span>
                                    </Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full justify-between text-left font-normal h-[50px] p-5 border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text",
                                                    !startDate && "text-muted-foreground"
                                                )}
                                            >
                                                {startDate ? format(startDate, "PPP") : <span>Pick a start date</span>}
                                                <CalendarIcon className="h-4 w-4"/>
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                className="bg-white dark:bg-khotixs-background-dark dark:text-secondary-color-text rounded-[6px] "
                                                mode="single"
                                                selected={startDate}
                                                onSelect={setStartDate}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </section>
                                <section className="space-y-2">
                                    <Label
                                        className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text">
                                        End Date
                                        <span className="text-red-500">*</span>
                                    </Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full justify-between text-left font-normal h-[50px] p-5 border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text",
                                                    !endDate && "text-muted-foreground"
                                                )}
                                            >
                                                {endDate ? format(endDate, "PPP") : <span>Pick an end date</span>}
                                                <CalendarIcon className="h-4 w-4"/>
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                className="bg-white dark:bg-khotixs-background-dark dark:text-secondary-color-text rounded-[6px] "
                                                mode="single"
                                                selected={endDate}
                                                onSelect={setEndDate}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </section>
                            </section>

                            <section className="grid md:grid-cols-2 gap-4">
                                <section className="space-y-2">
                                    <Label
                                        htmlFor="capacity"
                                        className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text">
                                        Day Capacity
                                    </Label>
                                    <Input
                                        id="capacity"
                                        type="number"
                                        className=" bg-white border-[1px] text-md md:text-lg border-light-border-color rounded-[6px] placeholder:text-gray-400  text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text"
                                        min="1"/>
                                    <p className="text-sm text-red-500">Day Capacity is 1 if you not set.</p>
                                </section>

                                <div className="space-y-4">
                                    <section className="space-y-2">
                                        <Label
                                            htmlFor="thumbnail"
                                            className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text">
                                            Upload Thumbnail
                                        </Label>
                                        <Input
                                            className=" bg-white border-[1px] text-md md:text-lg border-light-border-color rounded-[6px] placeholder:text-gray-400  text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text"
                                            id="thumbnail"
                                            type="file"
                                            accept="image/*"
                                            onChange={handleThumbnailChange}
                                        />
                                        <p className="text-sm text-red-500">
                                            Thumbnails are useful for your event view when you post it!
                                        </p>
                                    </section>

                                    {thumbnail && (
                                        <section className="space-y-2">
                                            <Label>Thumbnail Preview</Label>
                                            <div className="rounded-lg overflow-hidden border">
                                                <Image
                                                    width={400}
                                                    height={200}
                                                    src={thumbnail}
                                                    alt="Thumbnail preview"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </section>
                                    )}
                                </div>
                            </section>

                            {/* action button */}
                            <section className="flex justify-end gap-4 rounded-[6px] text-secondary-color-text">
                                <Button onClick={() => router.push("/events/detail-event")}
                                        className="bg-primary-color rounded-[6px] my-5 hover:bg-primary-color/90 px-8">Save</Button>
                            </section>

                        </section>
                    </section>

                </CardContent>


            </Card>

        </form>
    )
}

