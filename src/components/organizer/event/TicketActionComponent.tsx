'use client'
import { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { RiMore2Line } from "react-icons/ri";
import { LiaEdit } from "react-icons/lia";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { IoIosPower } from "react-icons/io";
import { PiEye, PiEyeSlash } from "react-icons/pi";
import { UpdateTicket } from "@/lib/types/customer/event";
import EditTicket from "@/components/organizer/event/EditTicket";
import { usePublishTicketMutation, useUnpublishTicketMutation, useDisplayTicketMutation, useHideTicketMutation, useDeleteTicketMutation } from "@/redux/feature/organizer/Ticket";

type PropType = {
    eventId: string;
    ticketId: string;
    isPublish: string;
    isDisplay: string;
}

export default function TicketActionComponent({ eventId, ticketId, isPublish, isDisplay }: PropType) {
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [publishTicket] = usePublishTicketMutation();
    const [unpublishTicket] = useUnpublishTicketMutation();
    const [displayTicket] = useDisplayTicketMutation();
    const [hideTicket] = useHideTicketMutation();
    const [deleteTicket] = useDeleteTicketMutation();

    const handlePublish = async () => {
        if (isPublish) {
            await unpublishTicket(ticketId);
        } else {
            await publishTicket(ticketId);
        }
    };

    const handleDisplay = async () => {
        if (isDisplay) {
            await hideTicket(ticketId);
        } else {
            await displayTicket(ticketId);
        }
    };

    const handleDelete = async () => {
        await deleteTicket(ticketId);
    }

    return (
        <>
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
                    <DropdownMenuItem onClick={() => setIsEditDialogOpen(true)}>
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
            <EditTicket
                eventId={eventId}
                ticketId={ticketId}
                isOpen={isEditDialogOpen}
                onClose={() => setIsEditDialogOpen(false)}
                onUpdate={(updatedTicket) => {
                    // Handle the updated ticket
                    console.log("Ticket updated:", updatedTicket);
                }}
            />
        </>
    )
}