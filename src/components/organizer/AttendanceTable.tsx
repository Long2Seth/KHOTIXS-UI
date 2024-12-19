"use client"

import React, {useState} from "react"
import {Calendar} from 'lucide-react'
import * as XLSX from "xlsx"
import {format} from "date-fns"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover"
import {Calendar as CalendarComponent} from "@/components/ui/calendar"

// Import data
import {attendanceData} from "@/lib/organizer/attendanceData";
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
        <div className=" w-full ">
            <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <CardTitle  className=" p-5 ">
                        <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">ATTENDANCE</h1>
                        <p className="text-description-color text-sm md:text-base xl:text-lg font-light dark:text-dark-description-color ">Real-time
                            insights for data-driven decisions</p>
                    </CardTitle>
                    <Button
                        onClick={exportToExcel}
                        className=" text-secondary-color-text rounded-[6px] bg-primary-color hover:bg-primary-color/80 w-full sm:w-auto"
                    >
                        Export Excel
                    </Button>
                </div>
            </CardHeader>

            <CardContent className=" bg-white p-10 rounded-[6px] dark:backdrop-blur dark:bg-opacity-5 space-y-4 ">
                <div className=" flex flex-col sm:flex-row gap-4 mb-6">
                    <Input
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className=" border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text"
                    />
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Select>
                            <SelectTrigger
                                className=" min-w-[200px] max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectValue placeholder="Events"/>
                            </SelectTrigger>
                            <SelectContent
                                className=" min-w-[200px] max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectItem value="queen">The Rise Of The Queen</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger
                                className=" max-w-[250px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectValue placeholder="Publish"/>
                            </SelectTrigger>
                            <SelectContent
                                className=" min-w-[200px] max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectItem className=" dark:hover:text-primary-color-text"  value="published">Published</SelectItem>
                                <SelectItem className=" dark:hover:text-primary-color-text" value="draft">Draft</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                    className="max-w-[400px] h-[50px] p-5 border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <Calendar className="mr-2 h-4 w-4"/>
                                {date ? format(date, "PPP") : <span className=" text-md md:text-lg">Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-gray-100 rounded-[6px] ">
                            <CalendarComponent
                                className="bg-white dark:bg-khotixs-background-dark dark:text-secondary-color-text rounded-[6px] "
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
                        <div className="overflow-hidden border rounded-[6px] ">
                            <Table>
                                <TableHeader className=" ">
                                    <TableRow>
                                        <TableHead
                                            className="px-2 py-5 text-center text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text">ID</TableHead>
                                        <TableHead
                                            className="px-2 py-5 text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text">USER
                                            NAME</TableHead>
                                        <TableHead
                                            className="px-2 py-5 lg:w-80 text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text">EVENT
                                            NAME</TableHead>
                                        <TableHead
                                            className="px-2 py-5 text-center text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text">LOCATION</TableHead>
                                        <TableHead
                                            className="px-2 py-5 text-center text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text">QTY</TableHead>
                                        <TableHead
                                            className="px-2 py-5 text-center text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text">TICKET
                                            TYPE</TableHead>
                                        <TableHead
                                            className="px-2 py-5 text-center text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text">STATUS</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredAttendance.map((attendance) => (
                                        <TableRow className=" hover:bg-gray-100 dark:hover:bg-khotixs-background-dark "
                                                  key={attendance.id}>
                                            <TableCell
                                                className="px-2 text-center text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{attendance.id}</TableCell>
                                            <TableCell
                                                className="px-2 text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{attendance.userName}</TableCell>
                                            <TableCell
                                                className="px-2 h-[70px] lg:w-80 line-clamp-2 text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color overflow-hidden">{attendance.eventName}</TableCell>
                                            <TableCell
                                                className="px-2 text-center text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{attendance.location}</TableCell>
                                            <TableCell
                                                className="px-2 text-center text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{attendance.qty}</TableCell>
                                            <TableCell className=" text-center ">
                                                <Badge
                                                    className={`px-2 p-1 text-secondary-color-text text-center text-[10px] justify-center md:text-sm font-light rounded-[6px] min-w-[90px] ${
                                                        attendance.ticketType === 'VIP' ? 'bg-label-vip hover:bg-label-vip/90' :
                                                            attendance.ticketType === 'PREMIUM' ? 'bg-label-premium hover:bg-label-premium/90' :
                                                                attendance.ticketType === 'REGULAR' ? 'bg-label-regular hover:bg-label-regular/90' :
                                                                    attendance.ticketType === 'FREE' ? 'bg-label-free hover:bg-label-free/90' : ''
                                                    }`}>
                                                    {attendance.ticketType}
                                                </Badge>

                                            </TableCell>

                                            <TableCell
                                                className="px-2 text-center text-description-color text-[10px] md:text-sm xl:text-base">
                                                <Badge
                                                    className={`rounded-[6px] text[10px] md:text-base  min-w-[100px] py-1 justify-center font-normal ${
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