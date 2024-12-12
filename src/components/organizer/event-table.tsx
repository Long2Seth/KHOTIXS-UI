"use client"

import { MoreVertical } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { events } from "@/lib/organizer/eventData";
import { useRouter} from "next/navigation";

export function EventsTable() {

    const router = useRouter();

    return (
        <div className="space-y-4 py-2">
            <h1 className="text-3xl font-bold py-5 text-[#5F0F40] dark:text-secondary-color-text">EVENTS MANAGEMENT</h1>
            <div className="flex items-center gap-4 ">
                <Input className="max-w-sm bg-khotixs-background-white text-primary-color-text" placeholder="Search" />
                <Select>
                    <SelectTrigger className="w-[180px] bg-khotixs-background-white text-primary-color-text">
                        <SelectValue placeholder="Categories" />
                    </SelectTrigger>
                    <SelectContent className="bg-khotixs-background-white text-primary-color-text">
                        <SelectItem value="concert">Concert</SelectItem>
                        <SelectItem value="general">General</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[180px] text-primary-color-text bg-khotixs-background-white">
                        <SelectValue placeholder="Publish" />
                    </SelectTrigger>
                    <SelectContent className="bg-khotixs-background-white text-primary-color-text">
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="unpublished">Unpublished</SelectItem>
                    </SelectContent>
                </Select>
                <Button
                    className="bg-[#5F0F40] text-white rounded-xl hover:bg-purple-800"
                    onClick={() => router.push("events/create")}
                >
                    New Event
                </Button>
            </div>
            <div className="border rounded-lg ">
                <Table>
                    <TableHeader className="">
                        <TableRow>
                            <TableHead className="dark:text-secondary-color-text">EVENT TITLE</TableHead>
                            <TableHead className="dark:text-secondary-color-text">CATEGORY</TableHead>
                            <TableHead className="dark:text-secondary-color-text">START AT</TableHead>
                            <TableHead className="dark:text-secondary-color-text">END AT</TableHead>
                            <TableHead className="dark:text-secondary-color-text">STATUS</TableHead>
                            <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="dark:bg-khotixs-background-dark">
                        {events.map((event) => (
                            <TableRow className="dark:text-secondary-color-text" key={event.title}>
                                <TableCell className="font-medium">{event.title}</TableCell>
                                <TableCell>{event.category}</TableCell>
                                <TableCell>{event.startAt}</TableCell>
                                <TableCell>{event.endAt}</TableCell>
                                <TableCell>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                        {event.status}
                                    </span>
                                </TableCell>
                                <TableCell>
                                    <Button variant="ghost" size="icon">
                                        <MoreVertical className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
