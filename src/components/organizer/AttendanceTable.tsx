'use client'

import { useState } from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import {Card} from "@/components/ui/card";

const attendanceData = [
    {
        id: "4435",
        userName: "PROEUNG CHISO",
        eventName: "THE VOICE KIDS CAMBODIA SEASON3",
        location: "PHNOM PENH",
        qty: 1,
        ticketType: "VIP",
        status: "checked-in"
    },
    {
        id: "3547",
        userName: "POV SOKNEM",
        eventName: "CAMBODIA'S PREMIER CULINARY AND HOSPITALITY EXPO, CAMFOOD & CAMHOTEL 2024",
        location: "PHNOM PENH",
        qty: 1,
        ticketType: "STANDING",
        status: "checked-in"
    },
    {
        id: "4478",
        userName: "PHAL SOPHANMAI",
        eventName: "CELEBRATE COMBODIA'S 71 YEARS OF INDEPENDENCE",
        location: "PHNOM PENH",
        qty: 1,
        ticketType: "STANDING",
        status: "absent"
    },
    // Add more data as needed
]

export function AttendanceTable() {
    // const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    return (
        <div className="space-y-4">
            <Card>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>USER NAME</TableHead>
                            <TableHead>EVENT NAME</TableHead>
                            <TableHead>LOCATION</TableHead>
                            <TableHead>QTY</TableHead>
                            <TableHead>TICKET TYPE</TableHead>
                            <TableHead>STATUS</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {attendanceData.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.userName}</TableCell>
                                <TableCell className="max-w-[300px]">{row.eventName}</TableCell>
                                <TableCell>{row.location}</TableCell>
                                <TableCell>{row.qty}</TableCell>
                                <TableCell>{row.ticketType}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant="secondary"
                                        className={
                                            row.status === "checked-in"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                        }
                                    >
                                        {row.status === "checked-in" ? "Checked-In" : "Absent"}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            Showing 1 to 10 of 20 entries
          </span>
                    <Select
                        value={rowsPerPage.toString()}
                        onValueChange={(value) => setRowsPerPage(parseInt(value))}
                    >
                        <SelectTrigger className="w-[70px]">
                            <SelectValue>{rowsPerPage}</SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="10">10</SelectItem>
                            <SelectItem value="20">20</SelectItem>
                            <SelectItem value="50">50</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            Page 1 of 2
          </span>
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" isActive>1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </div>
    )
}