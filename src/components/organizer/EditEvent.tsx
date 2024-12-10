'use client'

import React, { useState } from "react"
import { CalendarIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import Image from "next/image";
import { useRouter} from "next/navigation";

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
                <CardContent className="pt-6">
                    <section className="space-y-6">
                        <p className="uppercase font-semibold">Edit Event</p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <section className="space-y-2">
                                <Label htmlFor="title">Event title <span className="text-red-500">*</span></Label>
                                <Input id="title" placeholder="Enter event title" className="focus:outline-none" required/>
                            </section>

                            <section className="space-y-2">
                                <Label htmlFor="category">Category</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select category"/>
                                    </SelectTrigger>
                                    <SelectContent>
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
                            <Label htmlFor="description">Event Description</Label>
                            <Textarea
                                id="description"
                                placeholder="Enter event description"
                                className="min-h-[100px] focus:outline-none"
                            />
                        </section>

                        <section className="space-y-2">
                            <Label htmlFor="location">Location <span className="text-red-500">*</span></Label>
                            <Input id="location" placeholder="Enter location" className="focus:outline-none" required/>
                        </section>
                        <div className="grid md:grid-cols-2 gap-4">
                            <section className="space-y-2">
                                <Label>Start Date<span className="text-red-500">*</span></Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full justify-between text-left font-normal",
                                                !startDate && "text-muted-foreground"
                                            )}
                                        >
                                            {startDate ? format(startDate, "PPP") : <span>Pick a start date</span>}
                                            <CalendarIcon className="h-4 w-4"/>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={startDate}
                                            onSelect={setStartDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </section>
                            <section className="space-y-2">
                                <Label>End Date <span className="text-red-500">*</span></Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full justify-between text-left font-normal",
                                                !endDate && "text-muted-foreground"
                                            )}
                                        >
                                            {endDate ? format(endDate, "PPP") : <span>Pick an end date</span>}
                                            <CalendarIcon className="h-4 w-4"/>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
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
                                <Label htmlFor="capacity">Day Capacity</Label>
                                <Input id="capacity" type="number" className="focus:outline-none" min="1"/>
                                <p className="text-sm text-muted-foreground">Day Capacity is 1 if you not set.</p>
                            </section>

                            <div className="space-y-4">
                                <section className="space-y-2">
                                    <Label htmlFor="thumbnail">Upload Thumbnail</Label>
                                    <Input
                                        id="thumbnail"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleThumbnailChange}
                                    />
                                    <p className="text-sm text-muted-foreground">
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
            <section className="flex justify-end gap-4">
                <Button onClick={() => router.push("/events/detail-event")} className="bg-primary-color hover:bg-primary-color/90 px-8">Save</Button>
            </section>
        </form>
    )
}

