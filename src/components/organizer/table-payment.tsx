"use client"

import { useState } from "react"
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
import { payments } from "@/lib/organizer/tablePaymentData"

export default function PaymentTable() {
    const [search, setSearch] = useState("")
    const [date, setDate] = useState<Date>()

    // Filter payments based on search term
    const filteredPayments = payments.filter(payment =>
        payment.username.toLowerCase().includes(search.toLowerCase()) ||
        payment.id.toLowerCase().includes(search.toLowerCase())
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
            className=" container mx-auto w-full space-y-[50px] md:space-y-[80px] xl:space-y-[100px] my-[50px] md:my-[80px] xl:my-[100px]  ">
            <div className="-mx-[27px]" >
                <CardHeader>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <CardTitle className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text ">PAYMENT</CardTitle>
                        <Button
                            onClick={exportToExcel}
                            className=" bg-primary-color rounded-[6px] text-base text-secondary-color-text hover:bg-primary-color md:text-lg w-full sm:w-auto"
                        >
                            Export Excel
                        </Button>
                    </div>
                </CardHeader>
                <section className=" bg-white p-10 rounded-[6px] space-y-5 dark:bg-khotixs-background-dark dark:border-[1px] dark:border-dark-border-color ">
                    <CardContent>
                        <div className="flex flex-col sm:flex-row gap-4 mb-6">
                            <Input
                                placeholder="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className=" border-[1px] text-md md:text-lg border-light-border-color rounded-[6px] placeholder:text-gray-400 bg-khotixs-background-white text-primary-color-text"
                            />
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Select>
                                    <SelectTrigger className="w-[200px] text-md md:text-lg border-[1px] border-light-border-color rounded-[6px] bg-khotixs-background-white text-primary-color-text ">
                                        <SelectValue className=" placeholder:text-gray-300" placeholder="Events"/>
                                    </SelectTrigger>
                                    <SelectContent
                                        className="bg-khotixs-background-white border-[1px] border-light-border-color rounded-[6px] text-primary-color-text ">
                                    <SelectItem value="queen">The Rise Of The Queen</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger className="w-[200px] text-md md:text-lg border-[1px] border-light-border-color rounded-[6px] bg-khotixs-background-white text-primary-color-text ">
                                        <SelectValue placeholder="Publish"/>
                                    </SelectTrigger>
                                    <SelectContent
                                        className="bg-khotixs-background-white border-[1px] border-light-border-color rounded-[6px] text-primary-color-text ">
                                        <SelectItem value="published">Published</SelectItem>
                                        <SelectItem value="draft">Draft</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                            className="w-[400px] h-[50px] p-5 text-md md:text-lg border-[1px] border-light-border-color rounded-[6px] bg-khotixs-background-white text-primary-color-text hover:bg-gray-100">
                                        <Calendar className="mr-2 h-4 w-4"/>
                                        {date ? format(date, "PPP") : <span className=" text-md md:text-lg">Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0 bg-gray-100 rounded-[6px] ">
                                    <CalendarComponent
                                        className=" dark:text-primary-color-text"
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
                                <div className="overflow-hidden border rounded-[6px] border-light-border-color ">
                                    <Table>
                                        <TableHeader>
                                            <TableRow className=" border-light-border-color border">
                                                <TableHead className="text-title-color text-sm md:text-md xl:text-lg font-bold dark:text-secondary-color-text">ID</TableHead>
                                                <TableHead className="text-title-color text-sm md:text-md xl:text-lg font-bold dark:text-secondary-color-text">USERNAME</TableHead>
                                                <TableHead className="text-title-color text-sm md:text-md xl:text-lg font-bold dark:text-secondary-color-text">EVENT</TableHead>
                                                <TableHead className="text-title-color text-sm md:text-md xl:text-lg font-bold dark:text-secondary-color-text">PAYMENT METHOD</TableHead>
                                                <TableHead className="text-title-color text-sm md:text-md xl:text-lg font-bold dark:text-secondary-color-text">PAYMENT DATE</TableHead>
                                                <TableHead className="text-title-color text-sm md:text-md xl:text-lg font-bold dark:text-secondary-color-text p-2 sm:p-4 text-right text-start">AMOUNT</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {filteredPayments.map((payment) => (
                                                <TableRow className=" border-light-border-color border " key={payment.id}>
                                                    <TableCell className=" text-description-color text-[10px] md:text-sm xl:text-md dark:text-dark-description-color ">{payment.id}</TableCell>
                                                    <TableCell className=" text-description-color text-[10px] md:text-sm xl:text-md dark:text-dark-description-color ">{payment.username}</TableCell>
                                                    <TableCell className=" text-description-color text-[10px] md:text-sm xl:text-md dark:text-dark-description-color ">{payment.event}</TableCell>
                                                    <TableCell className=" text-description-color text-[10px] md:text-sm xl:text-md dark:text-dark-description-color ">{payment.paymentMethod}</TableCell>
                                                    <TableCell className=" text-description-color text-[10px] md:text-sm xl:text-md dark:text-dark-description-color ">{payment.paymentDate}</TableCell>
                                                    <TableCell className=" text-[10px] md:text-sm xl:text-md p-2 sm:p-4 text-green-500 text-start">
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
            </div>
        </section>


    )
}
