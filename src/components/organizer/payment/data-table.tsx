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
import { ChevronDown, Calendar } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { useMemo, useState } from "react";
import Image from "next/image";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination } from "@/components/ui/Pagination";
import { columnPayment } from "@/components/organizer/payment/columns";
import { payments } from "@/lib/types/organizer/TablePaymentData";
import * as XLSX from "xlsx";

const paymentMethods = Array.from(new Set(payments.map(event => event.paymentMethod)));
const categories = Array.from(new Set(payments.map(event => event.eventCategory)));

export function PaymentComponent() {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchData, setSearchData] = useState("");
    const [category, setCategory] = useState("all");
    const [paymentMethod, setPaymentMethod] = useState("all");
    const [gender, setGender] = useState("all");
    const [date, setDate] = useState<Date | undefined>(undefined);

    // Filter payments based on search term and selected filters
    const filteredPayments = useMemo(() => {
        return payments.filter(payment => {
            const matchesSearch = payment.username.toLowerCase().includes(searchData.toLowerCase()) ||
                payment.id.toLowerCase().includes(searchData.toLowerCase());
            const matchesCategory = category === "all" || payment.eventCategory.toLowerCase() === category;
            const matchesPaymentMethod = paymentMethod === "all" || payment.paymentMethod.toLowerCase() === paymentMethod;
            const matchesGender = gender === "all" || payment.gender.toLowerCase() === gender;
            return matchesSearch && matchesCategory && matchesPaymentMethod && matchesGender;
        });
    }, [searchData, category, paymentMethod, gender]);

    const paginatedData = useMemo(
        () => filteredPayments.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
        [filteredPayments, currentPage, itemsPerPage]
    );

    // Calculate total males, females, and revenue
    const totalMales = filteredPayments.filter(payment => payment.gender.toLowerCase() === "male").length;
    const totalFemales = filteredPayments.filter(payment => payment.gender.toLowerCase() === "female").length;
    const totalRevenue = filteredPayments.reduce((sum, payment) => sum + payment.amount, 0);

    // Export to Excel function
    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(payments);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Payments");
        XLSX.writeFile(wb, "payments.xlsx");
    };

    const table = useReactTable({
        data: paginatedData,
        columns: columnPayment,
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
                <CardHeader className="my-5">
                    <section className="w-full flex flex-row justify-between items-start sm:items-center gap-4">
                        <CardTitle className="w-[80%] text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">
                            PAYMENT
                        </CardTitle>
                        <Button
                            onClick={exportToExcel}
                            className="bg-primary-color rounded-[6px] text-base text-secondary-color-text hover:bg-primary-color md:text-lg w-auto"
                        >
                            Export Excel
                        </Button>
                    </section>
                </CardHeader>
            </section>
            <section className="w-full bg-white p-10 rounded-[6px] dark:backdrop-blur dark:bg-opacity-5 space-y-4">
                <section className="flex flex-col lg:flex-row gap-4 mb-6">
                    <Input
                        placeholder="Search by event name"
                        value={searchData}
                        onChange={(e) => setSearchData(e.target.value)}
                        className="border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text"
                    />

                    <div className="grid grid-cols-2 sm:flex sm:flex-row gap-4">
                        <Select onValueChange={setCategory}>
                            <SelectTrigger
                                className={`max-w-[250px] md:min-w-[200px] md:max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text ${category === "all" ? "text-gray-400" : "text-black"}`}
                            >
                                <SelectValue placeholder="Category"/>
                            </SelectTrigger>
                            <SelectContent
                                className="max-w-[250px] md:min-w-[200px] md:max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectItem value="all">All</SelectItem>
                                {categories.map(category => (
                                    <SelectItem key={category.toLowerCase()}
                                                value={category.toLowerCase()}>{category}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select onValueChange={setPaymentMethod}>
                            <SelectTrigger
                                className={`max-w-[250px] md:min-w-[200px] md:max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text ${paymentMethod === "all" ? "text-gray-400" : "text-black"}`}
                            >
                                <SelectValue placeholder="Payment Method"/>
                            </SelectTrigger>
                            <SelectContent
                                className="max-w-[250px] md:min-w-[200px] md:max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text">
                                <SelectItem value="all">All</SelectItem>
                                {paymentMethods.map(method => (
                                    <SelectItem key={method.toLowerCase()}
                                                value={method.toLowerCase()}>{method}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select onValueChange={setGender}>
                            <SelectTrigger
                                className={`hidden sm:flex px-3 max-w-[250px] min-w-[120px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text ${gender === "all" ? "text-gray-400" : "text-black"}`}
                            >
                                <SelectValue placeholder="Gender"/>
                            </SelectTrigger>
                            <SelectContent
                                className="min-w-[200px] max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                className={`max-w-[600px] h-[40px] lg:h-[50px] p-5 border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text ${date ? "text-black" : "text-gray-400"}`}
                            >
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
                                    className="h-[50px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                Columns <ChevronDown/>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text"
                            align="end">
                            {table.getAllColumns().filter((column) => column.getCanHide()).map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize hover:bg-blue-800 dark:hover:bg-khotixs-background-dark"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) => column.toggleVisibility(!!value)}
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                );
                            })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </section>

                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id}>
                                                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
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
                                            <TableCell className="py-2" key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={columnPayment.length}
                                               className="h-20 text-center text-lg md:text-2xl xl:text-4xl">
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
                <div className="flex justify-between mt-4 text-right uppercase font-bold">
                    <p>Total Males: <span className="text-lg">{totalMales}</span></p>
                    <p>Total Females: <span className="text-lg">{totalFemales}</span></p>
                    <p>Total Revenue: <span className="text-label-free dark:text-label-free text-lg ml-5">
                            ${totalRevenue.toFixed(2)}</span></p>
                </div>
                <Pagination
                    totalItems={filteredPayments.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                    onItemsPerPageChange={setItemsPerPage}
                />
            </section>
        </section>
    );
}