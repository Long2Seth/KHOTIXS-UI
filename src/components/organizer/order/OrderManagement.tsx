"use client"

import React, { useState } from "react"
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
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"

// Import data
import {attendanceData} from "@/lib/types/organizer/AttendanceData";
import {Badge} from "@/components/ui/badge";

export default function AttendanceTable() {
    const [search, setSearch] = useState("")
    const [date, setDate] = useState<Date>()

    // Filter payments based on search term
    const filteredAttendance = attendanceData.filter(attendance =>
        attendance.userName.toLowerCase().includes(search.toLowerCase()) ||
        attendance.id.toLowerCase().includes(search.toLowerCase())
    )

    // Export to Excel function
    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(attendanceData)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, "Payments")
        XLSX.writeFile(wb, "payments.xlsx")
    }

    return (
        <div className="-mx-[27px]">
            <CardHeader>
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
            </CardHeader>
            <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <Input
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full sm:max-w-[300px] bg-none"
                    />
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Select>
                            <SelectTrigger className="w-full sm:w-[180px]">
                                <SelectValue placeholder="Events" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="queen">The Rise Of The Queen</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="w-full sm:w-[180px]">
                                <SelectValue placeholder="Publish" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="published">Published</SelectItem>
                                <SelectItem value="draft">Draft</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full sm:w-[300px] justify-start text-left font-normal">
                                <Calendar className="mr-2 h-4 w-4" />
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
                                    {filteredAttendance.map((attendance) => (
                                        <TableRow key={attendance.id}>
                                            <TableCell className="px-2 text-center">{attendance.id}</TableCell>
                                            <TableCell className="px-2">{attendance.userName}</TableCell>
                                            <TableCell className="px-2 lg:w-80 line-clamp-2">{attendance.eventName}</TableCell>
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
                    </div>
                </div>
            </CardContent>
        </div>
    )
}