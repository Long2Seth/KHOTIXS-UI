"use client";

import * as React from "react";
import {
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import {ChevronDown, Calendar} from "lucide-react";
import {format} from "date-fns";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {columnEvent} from "./columns";
import {Select, SelectTrigger, SelectValue, SelectContent, SelectItem} from "@/components/ui/select";
import {Popover, PopoverTrigger, PopoverContent} from "@/components/ui/popover";
import {Calendar as CalendarComponent} from "@/components/ui/calendar";
import {useEffect, useMemo, useState} from "react";
import Image from "next/image";
import {Pagination} from "@/components/ui/Pagination";
import {EventType} from "@/lib/customer/event";
import LoadingComponent from "@/components/loading/LoadingComponent";

export function EventComponent() {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [selectedLocation, setSelectedLocation] = useState("all");
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [eventName, setEventName] = useState("");
    const route = useRouter();
    const [events, setEvents] = useState<EventType[]>([]);
    const [loading, setLoading] = useState(true);


    const eventData = async () => {
        try {
            const response = await fetch(`http://localhost:8000/event-ticket/api/v1/events?page=${currentPage-1}&size=${itemsPerPage}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            setEvents(data.content);
            setLoading(false);
        } catch (error) {
            console.error("Failed to fetch events:", error);
            setLoading(false);
            setEvents([]);
        } finally {
            // setIsLoading(false);
        }
    };


    useEffect(() => {
        eventData();
    }, [currentPage, itemsPerPage]);

    const locations = useMemo(() => Array.from(new Set(events.map(event => event.location))), [events]);
    const categories = useMemo(() => Array.from(new Set(events.map(event => event.eventCategory))), [events]);

    const filteredData = useMemo(() => {
        return events.filter((item) => {
            const matchesLocation = selectedLocation === "all" || item.location === selectedLocation;
            const matchesDate = !date || new Date(item.startedDate).toDateString() === date.toDateString();
            const matchesEventName = item.eventTitle.toLowerCase().includes(eventName.toLowerCase());
            const matchesStatus = selectedStatus === "all" || item.isPublish.toString() === selectedStatus;
            const matchesCategory = selectedCategory === "all" || item.eventCategory === selectedCategory;
            return matchesLocation && matchesDate && matchesEventName && matchesStatus && matchesCategory;
        });
    }, [selectedLocation, selectedStatus, date, eventName, selectedCategory, events]);

    const paginatedData = useMemo(
        () => filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
        [filteredData, currentPage, itemsPerPage]
    );

    const table = useReactTable({
        data: paginatedData,
        columns: columnEvent,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    return (
        <section className="w-full flex flex-col">
            <section>
                <div className=" my-5">
                    <div className="flex flex-row justify-between items-start sm:items-center gap-4 ">
                        <div className=" w-[80%]">
                            <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text ">INFORMATION
                                EVENT
                            </h1>
                        </div>
                        <Button
                            onClick={() => route.push("/organizer/events/create")}
                            className="text-secondary-color-text rounded-[6px] bg-primary-color hover:bg-primary-color/80 w-auto"
                        >
                            Create event
                        </Button>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white p-10 rounded-[6px] dark:backdrop-blur dark:bg-opacity-5 space-y-4">
                <section className="w-full flex flex-col items-center gap-2 lg:flex-row">
                    <Input
                        placeholder="Search by event name"
                        value={eventName}
                        onChange={(event) => setEventName(event.target.value)}
                        className="w-full border-[1px] h-[50px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text"
                    />
                    <section className="w-full lg:w-auto flex flex-col sm:flex-row gap-2">
                        <Select onValueChange={setSelectedLocation}>
                            <SelectTrigger
                                className={`w-full lg:max-w-[300px] h-[50px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 ${selectedLocation === "all" ? "text-gray-400 dark:text-gray-400" : "text-black dark:text-gray-400"} dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text`}>
                                <SelectValue placeholder="Location"/>
                            </SelectTrigger>
                            <SelectContent
                                className="w-full lg:max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectItem value="all">All</SelectItem>
                                {locations.map(location => (
                                    <SelectItem key={location} value={location}>{location}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select onValueChange={setSelectedStatus}>
                            <SelectTrigger
                                className={`w-full lg:max-w-[250px] h-[50px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 ${selectedStatus === "all" ? "text-gray-400 dark:text-gray-400" : "text-black dark:text-black"} dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text`}>
                                <SelectValue placeholder="Status"/>
                            </SelectTrigger>
                            <SelectContent
                                className="w-full lg:max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text">
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="true">Enable</SelectItem>
                                <SelectItem value="false">Disable</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select onValueChange={setSelectedCategory}>
                            <SelectTrigger
                                className={`w-full lg:max-w-[250px] h-[50px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 ${selectedCategory === "all" ? "text-gray-400 dark:text-gray-400" : "text-black dark:text-black"} dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text`}>
                                <SelectValue placeholder="Category"/>
                            </SelectTrigger>
                            <SelectContent
                                className="w-full lg:max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text">
                                <SelectItem value="all">All</SelectItem>
                                {categories.map(category => (
                                    <SelectItem key={category} value={category}>{category}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </section>

                    <section className="w-full lg:w-auto flex flex-col sm:flex-row gap-2">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    className={`w-full lg:max-w-[220px] h-[50px] p-5 border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 ${date ? "text-black" : "text-gray-400"} dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text`}>
                                    <Calendar className="mr-2 h-4 w-4"/>
                                    {date ? format(date, "PPP") :
                                        <span className="text-md md:text-lg">Pick a start date</span>}
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

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline"
                                        className={`h-[50px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text`}>
                                    Columns <ChevronDown/>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className={`border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text`}
                                align="end">
                                {table
                                    .getAllColumns()
                                    .filter((column) => column.getCanHide())
                                    .map((column) => {
                                        return (
                                            <DropdownMenuCheckboxItem
                                                key={column.id}
                                                className="capitalize hover:bg-blue-800 dark:hover:bg-khotixs-background-dark"
                                                checked={column.getIsVisible()}
                                                onCheckedChange={(value) =>
                                                    column.toggleVisibility(!!value)
                                                }
                                            >
                                                {column.id}
                                            </DropdownMenuCheckboxItem>
                                        );
                                    })}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </section>
                </section>

                <div className="rounded-md border">
                    {loading ? (
                        <div className="flex justify-center items-center h-20 text-lg md:text-2xl xl:text-4xl">
                            <LoadingComponent/>
                        </div>
                    ) : (
                        <Table>
                            <TableHeader>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => {
                                            return (
                                                <TableHead key={header.id}>
                                                    {header.isPlaceholder
                                                        ? null
                                                        : flexRender(
                                                            header.column.columnDef.header,
                                                            header.getContext()
                                                        )}
                                                </TableHead>
                                            );
                                        })}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {table.getRowModel().rows?.length ? (
                                    table.getRowModel().rows.map((row) => (
                                        <TableRow
                                            className="hover:bg-gray-100 dark:hover:bg-khotixs-background-dark"
                                            key={row.id}
                                            data-state={row.getIsSelected() && "selected"}
                                        >
                                            {row.getVisibleCells().map((cell) => (
                                                <TableCell
                                                    className="py-2"
                                                    key={cell.id}>
                                                    {flexRender(
                                                        cell.column.columnDef.cell,
                                                        cell.getContext()
                                                    )}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell
                                            colSpan={columnEvent.length}
                                            className="h-20 text-center text-lg md:text-2xl xl:text-4xl"
                                        >
                                            <div className="flex w-full justify-center items-center">
                                                <Image src="/no-data.png" alt="noData" width={50} height={50}/>
                                                <span>No results.</span>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    )}
                </div>
                <Pagination
                    totalItems={filteredData.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                    onItemsPerPageChange={setItemsPerPage}
                />
            </section>
        </section>
    );
}