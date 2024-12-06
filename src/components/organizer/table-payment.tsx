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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
        <div className="-mx-[27px]">
            <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <CardTitle className="text-3xl font-bold tracking-tight text-[#4A0635]">PAYMENT</CardTitle>
                    <Button
                        onClick={exportToExcel}
                        className="bg-secondary-color hover:bg-[#4c1777] w-full sm:w-auto"
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
                        className="w-full sm:max-w-[300px]"
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
                                        <TableHead className="p-2 sm:p-4">ID</TableHead>
                                        <TableHead className="p-2 sm:p-4">USERNAME</TableHead>
                                        <TableHead className="p-2 sm:p-4">EVENT</TableHead>
                                        <TableHead className="p-2 sm:p-4">PAYMENT METHOD</TableHead>
                                        <TableHead className="p-2 sm:p-4">PAYMENT DATE</TableHead>
                                        <TableHead className="p-2 sm:p-4 text-right">AMOUNT</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredPayments.map((payment) => (
                                        <TableRow key={payment.id}>
                                            <TableCell className="p-2 sm:p-4">{payment.id}</TableCell>
                                            <TableCell className="p-2 sm:p-4">{payment.username}</TableCell>
                                            <TableCell className="p-2 sm:p-4">{payment.event}</TableCell>
                                            <TableCell className="p-2 sm:p-4">{payment.paymentMethod}</TableCell>
                                            <TableCell className="p-2 sm:p-4">{payment.paymentDate}</TableCell>
                                            <TableCell className="p-2 sm:p-4 text-right text-green-500">
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
        </div>


    )
}
