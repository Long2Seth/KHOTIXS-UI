import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { RiMore2Line } from "react-icons/ri";
import { LiaEdit } from "react-icons/lia";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { IoIosPower } from "react-icons/io";
import { PiEye, PiEyeSlash } from "react-icons/pi";

type PropType = {
    id: string;
    isPublish: string;
    isDisplay: string;
}

export default function TicketActionComponent({ id, isPublish, isDisplay }: PropType) {

    const handlePublish = async () => {
        const endpoint = isPublish ? `unpublish` : `publish`;
        await fetch(`http://localhost:8000/event-ticket/api/v1/tickets/${id}/${endpoint}`, {
            method: 'PUT'
        });
    };

    const handleDisplay = async () => {
        const endpoint = isDisplay ? `hide` : `display`;
        await fetch(`http://localhost:8000/event-ticket/api/v1/tickets/${id}/${endpoint}`, {
            method: 'PUT'
        });
    };

    const handleDelete = async () => {
        await fetch(`http://localhost:8000/event-ticket/api/v1/tickets/${id}`, {
            method: 'DELETE'
        });
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <RiMore2Line className="h-5 w-5" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="bg-white dark:bg-khotixs-background-dark dark:border-none rounded-[6px] shadow-lg"
                align="end">
                <DropdownMenuItem onClick={handlePublish}>
                    <IoIosPower className="h-5 w-5" />
                    <span>{isPublish ? "Unpublished" : "Published"}</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleDisplay}>
                    {isDisplay ? <PiEyeSlash className="h-5 w-5" /> : <PiEye className="h-5 w-5" />}
                    <span>{isDisplay ? "Undisplayed" : "Display"}</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <LiaEdit className="h-5 w-5" />
                    <span>Edit</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={handleDelete}
                    className={` text-red-600 hover:text-red-600`}>
                    <AiOutlineDelete className="h-5 w-5" />
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}