"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { OrderData } from "@/lib/types/organizer/orderData";
import Image from "next/image";

export const columnOrder: ColumnDef<OrderData>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => (
            <DataTableColumnHeader className=" min-w-[100px] md:min-w-[130px] xl:min-w-[150px] " column={column} title="ID" />
        ),
        cell: ({ row }) => <div className="px-2 ">{row.original.id}</div>,
    },
    {
        accessorKey: "eventName",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[250px] md:min-w-[350px] lg:min-w-[500px] pl-20 text-start" column={column} title="EVENT NAME" />
        ),
        cell: ({ row }) => (
            <div className="flex items-center">
                <Image
                    className="rounded-[6px] h-auto w-[50px] md:w-[70px]"
                    width={70}
                    height={10}
                    src={row.original.image}
                    alt="image"
                />
                <p className="px-2 lg:w-[500px] text-description-color justify-center text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">
                    {row.original.eventName}
                </p>
            </div>
        ),
    },
    {
        accessorKey: "startDate",
        header: ({ column }) => (
            <DataTableColumnHeader  className="min-w-[100px] md:min-w-[150px] lg:min-w-[200px] " column={column} title="START DATE" />
        ),
        cell: ({ row }) => <div className="px-2 ">{row.original.startDate}</div>,
    },
    {
        accessorKey: "endDate",
        header: ({ column }) => (
            <DataTableColumnHeader  className="min-w-[100px] md:min-w-[150px] lg:min-w-[200px] " column={column} title="END DATE" />
        ),
        cell: ({ row }) => <div className="px-2 ">{row.original.endDate}</div>,
    },
    {
        accessorKey: "location",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[150px] md:min-w-[200px] xl:min-w-[300px] text-start " column={column} title="LOCATION" />
        ),
        cell: ({ row }) => <div className="px-2 ">{row.original.location}</div>,
    },
    {
        accessorKey: "qty",
        header: ({ column }) => (
            <DataTableColumnHeader className=" min-w-[70px] md:min-w-[100px] " column={column} title="QTY" />
        ),
        cell: ({ row }) => <div className="px-2 ">{row.original.qty}</div>,
    },
    {
        accessorKey: "price",
        header: ({ column }) => (
            <DataTableColumnHeader className=" min-w-[100px] lg:min-w-[100px]" column={column} title="PRICE" />
        ),
        cell: ({ row }) => <div className="px-2 text-green-600 font-semibold">${row.original.price.toFixed(2)}</div>,
    },
    {
        accessorKey: "total",
        header: ({ column }) => (
            <DataTableColumnHeader className=" min-w-[100px] lg:min-w-[100px]" column={column} title="TOTLE" />
        ),
        cell: ({ row }) => <div className="px-2 text-green-600 font-semibold">${row.original.price * row.original.qty}</div>,
    },
    {
        accessorKey: "ticketType",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[150px] lg:min-w-[200px] text-start " column={column} title="TICKET TYPE" />
        ),
        cell: ({ row }) =>
            <Badge
                className={`text-secondary-color-text justify-center md:text-sm font-light rounded-[6px] px-3 w-[90px] ${row.original.ticketType === 'VIP' ? 'bg-label-vip hover:bg-label-vip/90' : row.original.ticketType === 'PREMIUM' ? 'bg-label-premium hover:bg-label-premium/90' : row.original.ticketType === 'REGULAR' ? 'bg-label-regular hover:bg-label-regular/90' : row.original.ticketType === 'FREE' ? 'bg-label-free hover:bg-label-free/90' : ''}`}>{row.original.ticketType}
            </Badge>
    },
    {
        accessorKey: "status",
        header: ({ column }) => (
            <DataTableColumnHeader className=" min-w-[150px] lg:min-w-[200px] text-start " column={column} title="STATUS" />
        ),
        cell: ({ row }) => (
            <Badge
                className={`rounded-[6px] justify-center md:text-sm font-light uppercase w-[100px] ${
                    row.original.status === 'publish' ? 'bg-label-free text-label-text-primary hover:bg-label-free/90' : 'bg-label-paid text-label-text-primary hover:bg-label-paid/90'
                }`}
            >
                {row.original.status === 'publish' ? 'Publish' : 'Unpublish'}
            </Badge>
        ),
    },
];