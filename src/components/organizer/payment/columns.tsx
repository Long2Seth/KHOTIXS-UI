'use client';

import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import {PaymentType} from "@/lib/types/organizer/tablePaymentData";


export const columnPayment: ColumnDef<PaymentType>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => (
            <DataTableColumnHeader className="text-start min-w-[100px]" column={column} title="ID" />
        ),
        cell: ({ row }) => <div className="text-start">{row.original.id}</div>,
    },
    {
        accessorKey: "username",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[100px]" column={column} title="USERNAME" />
        ),
        cell: ({ row }) => <div>{row.original.username}</div>,
    },
    {
        accessorKey: "gender",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[80px] uppercase" column={column} title="Gender" />
        ),
        cell: ({ row }) => <div>{row.original.gender}</div>,
    },
    {
        accessorKey: "eventName",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[200px]" column={column} title="EVENT NAME" />
        ),
        cell: ({ row }) => <div>{row.original.eventName}</div>,
    },
    {
        accessorKey: "eventCategory",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[150px]" column={column} title="EVENT CATEGORY" />
        ),
        cell: ({ row }) => <div>{row.original.eventCategory}</div>,
    },
    {
        accessorKey: "paymentMethod",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[150px]" column={column} title="PAYMENT METHOD" />
        ),
        cell: ({ row }) => <div>{row.original.paymentMethod}</div>,
    },
    {
        accessorKey: "paymentDate",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[180px]" column={column} title="PAYMENT DATE" />
        ),
        cell: ({ row }) => <div>{row.original.paymentDate}</div>,
    },
    {
        accessorKey: "amount",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[100px]" column={column} title="AMOUNT" />
        ),
        cell: ({ row }) => <div className={` text-green-600 font-semibold`}>+ ${row.original.amount.toFixed(2)}</div>,
    },
];