import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { AttendanceEntry } from "@/lib/types/organizer/attendanceData";


export const columnAttendance: ColumnDef<AttendanceEntry>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[100px] md:min-w-[130px] xl:min-w-[150px]" column={column} title="ID" />
        ),
        cell: ({ row }) => <div className="px-2">{row.original.id}</div>,
    },
    {
        accessorKey: "userName",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[150px] md:min-w-[200px] xl:min-w-[230px]" column={column} title="USER NAME" />
        ),
        cell: ({ row }) => <div className="px-2">{row.original.userName}</div>,
    },
    {
        accessorKey: "gender",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[100px]" column={column} title="GENDER" />
        ),
        cell: ({ row }) => <div className="px-2">{row.original.gender}</div>,
    },
    {
        accessorKey: "eventName",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[300px] md:min-w-[400px] xl:min-w-[500px]" column={column} title="EVENT NAME" />
        ),
        cell: ({ row }) => <div className="px-2">{row.original.eventName}</div>,
    },
    {
        accessorKey: "location",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[150px] md:min-w-[200px] xl:min-w-[300px]" column={column} title="LOCATION" />
        ),
        cell: ({ row }) => <div className="px-2">{row.original.location}</div>,
    },
    {
        accessorKey: "qty",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[70px] md:min-w-[100px]" column={column} title="QTY" />
        ),
        cell: ({ row }) => <div className="px-2">{row.original.qty}</div>,
    },
    {
        accessorKey: "ticketType",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[150px] lg:min-w-[200px]" column={column} title="TICKET TYPE" />
        ),
        cell: ({ row }) => (
            <Badge className={`text-secondary-color-text justify-center md:text-sm font-light rounded-[6px] px-3 w-[90px] ${row.original.ticketType === 'VIP' ? 'bg-label-vip hover:bg-label-vip/90' : row.original.ticketType === 'PREMIUM' ? 'bg-label-premium hover:bg-label-premium/90' : row.original.ticketType === 'REGULAR' ? 'bg-label-regular hover:bg-label-regular/90' : row.original.ticketType === 'FREE' ? 'bg-label-free hover:bg-label-free/90' : ''}`}>
                {row.original.ticketType}
            </Badge>
        ),
    },
    {
        accessorKey: "status",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[150px] lg:min-w-[200px]" column={column} title="STATUS" />
        ),
        cell: ({ row }) => (
            <Badge className={`rounded-[6px] justify-center md:text-sm font-light uppercase w-[110px] ${row.original.status === 'checked-in' ? 'bg-label-free text-label-text-primary hover:bg-label-free/90' : 'bg-label-paid text-label-text-primary hover:bg-label-paid/90'}`}>
                {row.original.status === 'checked-in' ? 'Checked-In' : 'Absent'}
            </Badge>
        ),
    },
];