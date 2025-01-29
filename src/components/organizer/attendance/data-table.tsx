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
import {Select, SelectTrigger, SelectValue, SelectContent, SelectItem} from "@/components/ui/select";
import {Popover, PopoverTrigger, PopoverContent} from "@/components/ui/popover";
import {Calendar as CalendarComponent} from "@/components/ui/calendar";
import {useMemo, useState} from "react";
import Image from "next/image";
import {Pagination} from "@/components/ui/Pagination";
import {attendanceData} from "@/lib/types/organizer/attendanceData";
import * as XLSX from "xlsx";
import {columnAttendance} from "@/components/organizer/attendance/columns";

const locations = Array.from(new Set(attendanceData.map(attendance => attendance.location)));

export function AttendanceTable() {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [selectedLocation, setSelectedLocation] = useState("all");
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [search, setSearch] = useState("");

    const filteredData = useMemo(() => {
        return attendanceData.filter((item) => {
            const matchesLocation = selectedLocation === "all" || item.location === selectedLocation;
            const matchesSearch = item.userName.toLowerCase().includes(search.toLowerCase()) || item.id.toLowerCase().includes(search.toLowerCase());
            const matchesStatus = selectedStatus === "all" || item.status === selectedStatus;
            return matchesLocation && matchesSearch && matchesStatus;
        });
    }, [selectedLocation, selectedStatus, search]);

    const paginatedData = useMemo(
        () => filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
        [filteredData, currentPage, itemsPerPage]
    );

    const totalFemale = filteredData.filter(attendance => attendance.gender === 'female').length;
    const totalAttendees = filteredData.reduce((acc, attendance) => acc + attendance.qty, 0);

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(attendanceData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Attendance");
        XLSX.writeFile(wb, "attendance.xlsx");
    };

    const table = useReactTable({
        data: paginatedData,
        columns: columnAttendance,
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
                <div className="my-5">
                    <div className="flex flex-row justify-between items-start sm:items-center gap-4">
                        <div className="w-[80%]">
                            <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">ATTENDANCE</h1>
                        </div>
                        <Button
                            onClick={exportToExcel}
                            className="bg-primary-color rounded-[6px] text-base text-secondary-color-text hover:bg-primary-color md:text-lg w-auto"
                        >
                            Export Excel
                        </Button>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white p-10 rounded-[6px] dark:backdrop-blur dark:bg-opacity-5 space-y-4">
                <section className="w-full flex flex-col items-center gap-2 lg:flex-row">
                    <Input
                        placeholder="Search by user name or ID"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
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
                                <SelectItem value="checked-in">Checked-In</SelectItem>
                                <SelectItem value="absent">Absent</SelectItem>
                            </SelectContent>
                        </Select>
                    </section>

                    <section className="w-full lg:w-auto flex flex-col sm:flex-row gap-2">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    className={`w-full lg:max-w-[220px] h-[50px] p-5 border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 ${date ? "text-black" : "text-gray-400"} dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text`}>
                                    <Calendar className="mr-2 h-4 w-4"/>
                                    {date ? format(date, "PPP") : <span className="text-md md:text-lg">Pick a date</span>}
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
                                        colSpan={columnAttendance.length}
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
                </div>
                <div className="uppercase font-bold flex justify-end w-full h-16 items-center">
                    <p className="px-10">Total Attendees:<span className="ml-2 text-lg">{totalAttendees}</span>
                    </p>
                    <p className="text-right uppercase">
                        Total Female:
                        <span className="text-lg ml-5">
                            {totalFemale}</span>
                    </p>
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