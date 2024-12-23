"use client"

import React, { useState } from 'react';
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

export function EventsTable() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');

    const filteredEvents = events.filter(event => {
        return (
            (selectedCategory === 'all' || event.category === selectedCategory) &&
            (selectedStatus === 'all' || event.status.toLowerCase() === selectedStatus) &&
            (event.title.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    return (
        <section className="space-y-[50px] md:space-y-[80px] xl:space-y-[100px] my-[50px] md:my-[80px] xl:my-[100px]">
            <div className="space-y-5">
                <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text pt-5">INFORMATION EVENT</h1>
                <div className="bg-white p-10 rounded-[6px] dark:backdrop-blur dark:bg-opacity-5 space-y-4">
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Input
                            className="border-[1px] text-md md:text-lg border-light-border-color rounded-[6px] placeholder:text-gray-400 bg-khotixs-background-white text-primary-color-text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                            <SelectTrigger className="w-full sm:w-[200px] border-[1px] border-light-border-color rounded-[6px] bg-khotixs-background-white text-primary-color-text">
                                <SelectValue className="text-gray-300" placeholder="Categories" />
                            </SelectTrigger>
                            <SelectContent className="bg-khotixs-background-white border-[1px] border-light-border-color rounded-[6px] text-primary-color-text">
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="concert">Concert</SelectItem>
                                <SelectItem value="general">General</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                            <SelectTrigger className="w-full sm:w-[180px] border-[1px] border-light-border-color rounded-[6px] bg-khotixs-background-white text-primary-color-text">
                                <SelectValue placeholder="Status" />
                            </SelectTrigger>
                            <SelectContent className="border-[1px] items-start border-light-border-color rounded-[6px] bg-khotixs-background-white text-primary-color-text">
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="published">Published</SelectItem>
                                <SelectItem value="unpublished">Unpublished</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="border rounded-[6px] overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow className="dark:bg-khotixs-background-dark">
                                    <TableHead className="min-w-[200px] lg:min-w-[500px] dark:text-secondary-color-text pl-10">EVENT TITLE</TableHead>
                                    <TableHead className="min-w-[100px] dark:text-secondary-color-text">CATEGORY</TableHead>
                                    <TableHead className="min-w-[150px] dark:text-secondary-color-text">START AT</TableHead>
                                    <TableHead className="min-w-[150px] dark:text-secondary-color-text">END AT</TableHead>
                                    <TableHead className="dark:text-secondary-color-text">STATUS</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="border-gray-300 dark:bg-khotixs-background-dark">
                                {filteredEvents.map((event) => (
                                    <TableRow className="hover:bg-gray-100 dark:hover:bg-khotixs-background-dark" key={event.title}>
                                        <TableCell className="pl-10 py-3 dark:text-dark-description-color">{event.title}</TableCell>
                                        <TableCell className="dark:text-dark-description-color">{event.category}</TableCell>
                                        <TableCell className="dark:text-dark-description-color">{event.startAt}</TableCell>
                                        <TableCell className="dark:text-dark-description-color">{event.endAt}</TableCell>
                                        <TableCell>
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-[6px] font-medium ${event.status === 'Publish' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>{event.status}</span>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </section>
    );
}