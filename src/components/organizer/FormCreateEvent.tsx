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

export function CreateEventForm() {
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
        <form
            className=" bg-white rounded-[6px] p-10 dark:bg-khotixs-background-dark dark:border dark:border-dark-border-color ">

            <Card className=" w-full border-0 rounded-[6px] ">

                <CardContent className=" w-full rounded-[6px] border-0 ">

                    <section className="space-y-6">

                        <p className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">Event
                            Info</p>

                        <div className="grid md:grid-cols-2 gap-4">

                            <section className="space-y-2">
                                <Label
                                    className="text-base font-medium text-primary-color-text dark:text-secondary-color-text"
                                    htmlFor="title">
                                    Event title
                                    <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="title"
                                    placeholder="Enter event title"
                                    className="p-2 text-lg border-light-border-color rounded-[6px] dark:border placeholder:text-gray-300 dark:border-white dark:text-secondary-color-text dark:bg-khotixs-background-dark"
                                    required/>
                            </section>

                            <section className="space-y-2">
                                <Label
                                    className="text-base font-medium text-primary-color-text dark:text-secondary-color-text"
                                    htmlFor="category">
                                    Category
                                </Label>
                                <Select>
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
                            </section>
                        </div>

                        <section className="space-y-2">
                            <Label
                                className="text-base font-medium text-primary-color-text dark:text-secondary-color-text"
                                htmlFor="description">
                                Event Description
                            </Label>
                            <Textarea
                                id="description"
                                placeholder="Enter event description"
                                className="min-h-[100px] border border-light-border-color rounded-[6px] text-base md:text-lg placeholder:text-light-border-color focus:outline-none"
                            />
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
                                placeholder="Enter location"
                                className="border border-light-border-color rounded-[6px] text-base md:text-lg placeholder:text-light-border-color focus:outline-none"
                                required/>
                        </section>
                        <div className=" grid md:grid-cols-2 gap-4">

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
                                            {startDate ? format(startDate, "PPP") :
                                                <span className=" text-light-border-color">
                                                    Pick a start date
                                                </span>
                                            }
                                            <CalendarIcon className="h-4 w-4"/>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            className=" bg-khotixs-background-white dark:text-primary-color-text rounded-[6px] "
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
                                            {endDate ? format(endDate, "PPP") :
                                                <span className=" text-light-border-color">Pick an end date</span>}
                                            <CalendarIcon className="h-4 w-4"/>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            className=" bg-khotixs-background-white dark:text-primary-color-text rounded-[6px] "
                                            mode="single"
                                            selected={endDate}
                                            onSelect={setEndDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </section>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <section className="space-y-2">
                                <Label
                                    className="text-base font-medium text-primary-color-text dark:text-secondary-color-text"
                                    htmlFor="capacity">
                                    Day Capacity
                                </Label>
                                <Input
                                    id="capacity"
                                    type="number"
                                    placeholder="0"
                                    className=" border border-light-border-color rounded-[6px] placeholder:text-light-border-color text-base md:text-lg focus:outline-none"
                                    min="1"/>
                                <p className="text-sm text-muted-foreground text-red-500 px-1">Day Capacity is 1 if you
                                    not set.</p>
                            </section>

                            <div className="space-y-4">
                                <section className="space-y-2">
                                    <Label
                                        className="text-base font-medium text-primary-color-text dark:text-secondary-color-text"
                                        htmlFor="thumbnail">
                                        Upload Thumbnail
                                    </Label>
                                    <Input
                                        className=" border border-light-border-color rounded-[6px] text-base md:text-lg focus:outline-none"
                                        id="thumbnail"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleThumbnailChange}
                                    />
                                    <p className="text-sm text-muted-foreground text-red-500 ">
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
                        </div>
                    </section>
                </CardContent>
            </Card>

            {/* action button */}
            <section className="flex justify-end gap-4 p-6 ">
                <Button
                    onClick={() => router.push("/organizer/events")}
                    className="border-red-600 text-red-500 rounded-[6px] hover:text-red-600 hover:bg-red-50 "
                    variant="outline">
                    Cancel
                </Button>
                <Button onClick={() => router.push("/organizer/events")}
                        className="bg-primary-color border border-primary-color rounded-[6px] text-secondary-color-text hover:bg-primary-color/80 ">
                    Save
                </Button>
                <Button
                    onClick={() => router.push("/organizer/events/tickets")}
                    className="bg-primary-color border border-primary-color rounded-[6px] text-secondary-color-text hover:bg-primary-color/80">
                    Save & Continue
                </Button>
            </section>
        </form>
    )
}

