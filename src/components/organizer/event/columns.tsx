'use client';

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import React from "react";
import Image from "next/image";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import {ActionEventComponent} from "@/components/organizer/event/ActionEventComponent";
import {EventType} from "@/lib/types/customer/event";

export const columnEvent: ColumnDef<EventType>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[70px] md:min-w-[250px] lg:min-w-[350px] text-start" column={column} title="ID" />
        ),
        cell: ({ row }) => <div className="text-start">{row.original.id}</div>,
    },
    {
        accessorKey: "eventTitle",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[250px] md:min-w-[350px] lg:min-w-[500px] pl-20 text-start" column={column} title="EVENT NAME" />
        ),
        cell: ({ row }) => (
            <div className="flex items-center">
                <Image
                    className="rounded-[6px] h-auto w-[50px] md:w-[70px]"
                    width={70}
                    height={10}
                    src={row.original.thumbnail}
                    alt="image"
                />
                <p className="px-2 lg:w-[500px] text-description-color justify-center text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">
                    {row.original.eventTitle}
                </p>
            </div>
        ),
    },
    {
        accessorKey: "eventCategory",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[100px] md:min-w-[150px] lg:min-w-[200px] text-start" column={column} title="CATEGORY" />
        ),
        cell: ({ row }) => <div className="text-start">{row.original.eventCategory}</div>,
    },
    {
        accessorKey: "startedDate",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[100px] md:min-w-[150px] lg:min-w-[200px]" column={column} title="START DATE" />
        ),
        cell: ({ row }) => <div>{row.original.startedDate}</div>,
    },
    {
        accessorKey: "endedDate",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[100px] md:min-w-[150px] lg:min-w-[200px]" column={column} title="END DATE" />
        ),
        cell: ({ row }) => <div>{row.original.endedDate}</div>,
    },
    {
        accessorKey: "location",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[100px] md:min-w-[200px] lg:min-w-[300px] text-start" column={column} title="LOCATION" />
        ),
        cell: ({ row }) => <div className="text-start">{row.original.location}</div>,
    },
    {
        accessorKey: "isPublish",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[100px] text-start" column={column} title="STATUS" />
        ),
        cell: ({ row }) => (
            <Badge
                className={`rounded-[6px] text[10px] md:text-base justify-center font-normal ${
                    row.original.isPublish ? 'bg-label-free text-label-text-primary hover:bg-label-free/90' : 'bg-label-paid text-label-text-primary hover:bg-label-paid/90'
                }`}
            >
                {row.original.isPublish ? 'Published' : 'Unpublished'}
            </Badge>
        ),
    },
    {
        accessorKey: "action",
        header: () => <div className="text-start"></div>,
        cell: ({row}) => <ActionEventComponent isPublish={row.original.isPublish} id={row.original.id}/>,
    },
];