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
        <section className=" w-full ">
            <CardHeader>
                <div className="flex flex-row justify-between items-start sm:items-center gap-4 p-5">
                    <CardTitle  className="  w-[80%]">
                        <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">ATTENDANCE</h1>
                        <p className="text-description-color text-sm md:text-base xl:text-lg font-light dark:text-dark-description-color ">Real-time
                            insights for data-driven decisions</p>
                    </CardTitle>
                    <Button
                        onClick={exportToExcel}
                        className=" text-secondary-color-text rounded-[6px] bg-primary-color hover:bg-primary-color/80 w-auto"
                    >
                        Export Excel
                    </Button>
                </div>
            </CardHeader>

            <CardContent className=" bg-white p-10 rounded-[6px] dark:backdrop-blur dark:bg-opacity-5 space-y-4 ">
                <div className=" flex flex-col md:flex-row gap-4 mb-6">
                    <Input
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className=" border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text"
                    />
                    <div className="flex flex-col sm:flex-row  gap-4">
                        <Select>
                            <SelectTrigger
                                className="w-full sm:max-w-[350px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectValue placeholder="Events"/>
                            </SelectTrigger>
                            <SelectContent
                                className="w-full sm:w-[350px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectItem value="queen">The Rise Of The Queen</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger
                                className="w-full sm:w-[250px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectValue placeholder="Publish"/>
                            </SelectTrigger>
                            <SelectContent
                                className="w-full sm:w-[250px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectItem className="dark:hover:text-primary-color-text"
                                            value="published">Published</SelectItem>
                                <SelectItem className="dark:hover:text-primary-color-text"
                                            value="draft">Draft</SelectItem>
                            </SelectContent>
                        </Select>

                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    className="w-full md:max-w-[400px] h-[50px] p-5 border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                    <Calendar className="mr-2 h-4 w-4"/>
                                    {date ? format(date, "PPP") :
                                        <span className="text-md md:text-lg">Pick a date</span>}
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
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden border rounded-[6px] ">
                            <Table>
                                <TableHeader className=" ">
                                    <TableRow>
                                        <TableHead
                                            className=" min-w-[100px] md:min-w-[130px] xl:min-w-[150px] text-center text-title-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">ID</TableHead>
                                        <TableHead
                                            className="min-w-[130px] md:min-w-[150px] xl:min-w-[170px] text-center text-title-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">USER
                                            NAME</TableHead>
                                        <TableHead
                                            className=" min-w-[300px] md:min-w-[400px] xl:min-w-[500px] pl-20 text-start text-title-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">EVENT
                                            NAME</TableHead>
                                        <TableHead
                                            className=" min-w-[150px] md:min-w-[200px] xl:min-w-[300px] text-start text-title-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">LOCATION</TableHead>
                                        <TableHead
                                            className=" min-w-[70px] md:min-w-[100px] text-center text-title-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">QTY</TableHead>
                                        <TableHead
                                            className=" min-w-[150px] lg:min-w-[200px] text-start text-title-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">TICKET
                                            TYPE</TableHead>
                                        <TableHead
                                            className=" min-w-[150px] lg:min-w-[200px] text-start text-title-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">STATUS</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredAttendance.map((attendance) => (
                                        <TableRow className=" hover:bg-gray-100 dark:hover:bg-khotixs-background-dark "
                                                  key={attendance.id}>
                                            <TableCell
                                                className=" py-3 text-center text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{attendance.id}</TableCell>
                                            <TableCell
                                                className=" text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{attendance.userName}</TableCell>
                                            <TableCell
                                                className=" text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{attendance.eventName}</TableCell>
                                            <TableCell
                                                className=" text-center text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{attendance.location}</TableCell>
                                            <TableCell
                                                className=" text-center text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{attendance.qty}</TableCell>
                                            <TableCell className=" text-start ">
                                                <Badge
                                                    className={` text-secondary-color-text text-center text-[10px] justify-center md:text-sm font-light rounded-[6px] min-w-[50px] ${
                                                        attendance.ticketType === 'VIP' ? 'bg-label-vip hover:bg-label-vip/90' :
                                                            attendance.ticketType === 'PREMIUM' ? 'bg-label-premium hover:bg-label-premium/90' :
                                                                attendance.ticketType === 'REGULAR' ? 'bg-label-regular hover:bg-label-regular/90' :
                                                                    attendance.ticketType === 'FREE' ? 'bg-label-free hover:bg-label-free/90' : ''
                                                    }`}>
                                                    {attendance.ticketType}
                                                </Badge>

                                            </TableCell>

                                            <TableCell
                                                className=" text-start text-description-color text-[10px] md:text-sm xl:text-base">
                                                <Badge
                                                    className={`rounded-[6px] text[10px] md:text-base  min-w-[60px] justify-center font-normal ${
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
        </section>
    )
}