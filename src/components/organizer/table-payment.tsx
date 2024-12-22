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
import {payments} from "@/lib/organizer/tablePaymentData"
import {AllEventData} from "@/lib/organizer/Event";

export default function PaymentTable() {
    const [searchData, setSearchData] = useState("")
    const [date, setDate] = useState<Date>()
    const [category, setCategory] = useState("all")
    const [location, setLocation] = useState("all")
    const [status, setStatus] = useState("all")

    // Filter payments based on search term
    const filteredPayments = payments.filter(payment =>
        payment.username.toLowerCase().includes(searchData.toLowerCase()) ||
        payment.id.toLowerCase().includes(searchData.toLowerCase())
    )

    // Export to Excel function
    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(payments)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, "Payments")
        XLSX.writeFile(wb, "payments.xlsx")
    }

    return (
        <section
            className=" space-y-[30px] md:space-y-[50px] xl:space-y-[80px] my-[30px] md:my-[50px] xl:my-[80px] ">
            <section className=" w-full ">
                <CardHeader className=" py-5">
                    <section className=" w-full flex flex-row justify-between items-start sm:items-center gap-4 ">
                        <CardTitle
                            className=" w-[80%] text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text ">PAYMENT
                        </CardTitle>
                        <Button
                            onClick={exportToExcel}
                            className=" bg-primary-color rounded-[6px] text-base text-secondary-color-text hover:bg-primary-color md:text-lg w-auto"
                        >
                            Export Excel
                        </Button>
                    </section>
                </CardHeader>
                <section
                    className=" bg-white p-10 rounded-[6px] dark:bg-white dark:backdrop-blur dark:bg-opacity-5 space-y-4 ">
                    <CardContent>
                        <section className="flex flex-col lg:flex-row gap-4 mb-6">
                            <Input
                                placeholder="Search by event name"
                                value={searchData}
                                onChange={(e) => setSearchData(e.target.value)}
                                className="border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text"
                            />

                            <div className=" grid grid-cols-2 sm:flex sm:flex-row gap-4">

                                <Select onValueChange={setCategory}>
                                    <SelectTrigger
                                        className={` max-w-[250px] md:min-w-[200px] md:max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text ${category === "all" ? "text-gray-400" : "text-black"}`}>
                                        <SelectValue placeholder="Category"/>
                                    </SelectTrigger>
                                    <SelectContent
                                        className="max-w-[250px] md:min-w-[200px] md:max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                        <SelectItem value="all">All</SelectItem>
                                        {AllEventData.map(category => (
                                            <SelectItem key={category.category.toLowerCase()}
                                                        value={category.category.toLowerCase()}>{category.category}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                <Select onValueChange={setLocation}>
                                    <SelectTrigger
                                        className={`max-w-[250px] md:min-w-[200px] md:max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text ${location === "all" ? "text-gray-400" : "text-black"}`}>
                                        <SelectValue placeholder="Location"/>
                                    </SelectTrigger>
                                    <SelectContent
                                        className="max-w-[250px] md:min-w-[200px] md:max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text">
                                        <SelectItem value="all">All</SelectItem>
                                        {AllEventData.map(location => (
                                            <SelectItem key={location.location.toLowerCase()}
                                                        value={location.location.toLowerCase()}>{location.location}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                <Select onValueChange={setStatus}>
                                    <SelectTrigger
                                        className={`hidden sm:block px-3 max-w-[250px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text ${status === "all" ? "text-gray-400" : "text-black"}`}>
                                        <SelectValue placeholder="Status"/>
                                    </SelectTrigger>
                                    <SelectContent
                                        className="min-w-[200px] max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                        <SelectItem value="all">All</SelectItem>
                                        <SelectItem value="enable">Enable</SelectItem>
                                        <SelectItem className=" text-red-500 " value="disable">Disable</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        className={`max-w-[600px] h-[40px] lg:h-[50px] p-5 border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text ${date ? "text-black" : "text-gray-400"} `}>
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
                        </section>
                        <div className="overflow-x-auto">
                            <div className="inline-block min-w-full align-middle">
                                <div className="overflow-hidden border rounded-[6px] border-light-border-color ">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead
                                                    className="text-center min-w-[100px] ">ID</TableHead>
                                                <TableHead
                                                    className="min-w-[100px] ">USERNAME</TableHead>
                                                <TableHead
                                                    className="min-w-[200px] ">EVENT</TableHead>
                                                <TableHead
                                                    className="min-w-[150px] ">PAYMENT
                                                    METHOD</TableHead>
                                                <TableHead
                                                    className="min-w-[180px]  ">PAYMENT
                                                    DATE</TableHead>
                                                <TableHead
                                                    className=" min-w-[100px] ">AMOUNT</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {filteredPayments.map((payment) => (
                                                <TableRow className="hover:bg-gray-100 dark:hover:bg-khotixs-background-dark border-none " key={payment.id}>
                                                    <TableCell
                                                        className="text-center py-3 min-w-[100px]">{payment.id}</TableCell>
                                                    <TableCell
                                                        className=" min-w-[100px]">{payment.username}</TableCell>
                                                    <TableCell
                                                        className=" min-w-[200px]">{payment.event}</TableCell>
                                                    <TableCell
                                                        className=" min-w-[150px]">{payment.paymentMethod}</TableCell>
                                                    <TableCell
                                                        className="  min-w-[180px]">{payment.paymentDate}</TableCell>
                                                    <TableCell
                                                        className="text-label-free dark:text-label-free font-semibold min-w-[100px] ">
                                                        + ${payment.amount.toFixed(2)}
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
            </section>
        </section>
    )
}