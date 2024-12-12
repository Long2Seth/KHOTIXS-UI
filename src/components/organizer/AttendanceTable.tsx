"use client"

import React, { useState, useEffect } from "react"
import { Calendar } from 'lucide-react'
import * as XLSX from "xlsx"
import { format } from "date-fns"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { getAttendanceData } from "../actions/attendanceActions"

export default function AttendanceTable() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [search, setSearch] = useState("")
    const [date, setDate] = useState<Date>()
    const [eventFilter, setEventFilter] = useState("")
    const [publishFilter, setPublishFilter] = useState("")
    const [attendanceData, setAttendanceData] = useState([])
    const [totalItems, setTotalItems] = useState(0)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        fetchData();
    }, [currentPage, itemsPerPage, search, eventFilter, publishFilter, date]);

    const fetchData = async () => {
        const dateFilter = date ? format(date, "yyyy-MM-dd") : '';
        const result = await getAttendanceData(currentPage, itemsPerPage, search, eventFilter, publishFilter, dateFilter);
        setAttendanceData(result.data);
        setTotalItems(result.totalItems);
        setTotalPages(result.totalPages);
    };

    // Export to Excel function
    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(attendanceData)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, "Attendance")
        XLSX.writeFile(wb, "attendance.xlsx")
    }

    return (
        <section className="-mx-[27px]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <CardTitle>
                    <h1 className="text-2xl font-bold text-primary-color">ATTENDANCE</h1>
                    <p className="text-base font-normal">Real-time insights for data-driven decisions</p>
                </CardTitle>
                <Button
                    onClick={exportToExcel}
                    className="bg-primary-color hover:bg-[#4c1777] w-full sm:w-auto"
                >
                    Export Excel
                </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Input
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full sm:max-w-[300px] bg-none"
                />
                <div className="flex flex-col sm:flex-row gap-4">
                    <Select value={eventFilter} onValueChange={setEventFilter}>
                        <SelectTrigger className="w-full sm:w-[180px]">
                            <SelectValue placeholder="Events"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="">All Events</SelectItem>
                            <SelectItem value="The Rise Of The Queen">The Rise Of The Queen</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select value={publishFilter} onValueChange={setPublishFilter}>
                        <SelectTrigger className="w-full sm:w-[180px]">
                            <SelectValue placeholder="Status"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="">All</SelectItem>
                            <SelectItem value="checked-in">Checked-In</SelectItem>
                            <SelectItem value="absent">Absent</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline"
                                className="w-full sm:w-[300px] justify-start text-left font-normal">
                            <Calendar className="mr-2 h-4 w-4"/>
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <CalendarComponent
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            </div>
            <div className="overflow-x-auto">
                <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="px-2 text-center">ID</TableHead>
                                    <TableHead className="px-2">USER NAME</TableHead>
                                    <TableHead className="px-2 lg:w-80">EVENT NAME</TableHead>
                                    <TableHead className="px-2 text-center">LOCATION</TableHead>
                                    <TableHead className="px-2 text-center">QTY</TableHead>
                                    <TableHead className="px-2 text-center">TICKET TYPE</TableHead>
                                    <TableHead className="px-2 text-center">STATUS</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {attendanceData.map((attendance) => (
                                    <TableRow key={attendance.id}>
                                        <TableCell className="px-2 text-center">{attendance.id}</TableCell>
                                        <TableCell className="px-2">{attendance.userName}</TableCell>
                                        <TableCell
                                            className="px-2 lg:w-80 line-clamp-2">{attendance.eventName}</TableCell>
                                        <TableCell className="px-2 text-center">{attendance.location}</TableCell>
                                        <TableCell className="px-2 text-center">{attendance.qty}</TableCell>
                                        <TableCell className="px-2 text-center">{attendance.ticketType}</TableCell>
                                        <TableCell className="px-2 text-center">
                                            <Badge
                                                className={`rounded-[6px] w-20 justify-center font-normal ${
                                                    attendance.status === 'checked-in'
                                                        ? 'bg-label-free text-label-text-primary hover:bg-label-free/90'
                                                        : 'bg-label-paid text-label-text-primary hover:bg-label-paid/90'
                                                }`}
                                            >
                                                {attendance.status === 'checked-in' ? 'Checked-In' : 'Absent'}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    <Pagination
                        totalItems={totalItems}
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                        onItemsPerPageChange={setItemsPerPage}
                    />
                </div>
            </div>
        </section>
    )
}