'use client';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { IoMdMore } from "react-icons/io";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDeleteNotificationByIdMutation } from "@/redux/feature/user/Notification";
import { WebSocketService } from "@/lib/types/customer/websocket";

type Props = {
    id: string | null;
    onDelete: () => void;
}

export function NotificationActionComponent({ id, onDelete }: Props) {
    const [deleteNotificationById] = useDeleteNotificationByIdMutation();
    const wsServer = new WebSocketService('/communication/ws', 'USER');

    const handleDelete = async () => {
        if (id) {
            try {
                await deleteNotificationById(id).unwrap();
                wsServer.notifyDeletion(id); // Notify the server about the deletion
                onDelete(); // Update the state in the parent component
            } catch (error) {
                console.error('Failed to delete event:', error);
            }
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="px-2"><IoMdMore className="w-2 h-5 text-gray-500 cursor-pointer" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="bg-white dark:bg-khotixs-background-dark dark:border-none rounded-[6px] shadow-lg"
            >
                <DropdownMenuItem
                    onClick={handleDelete}
                    className={`cursor-pointer text-red-600 hover:bg-gray-100 rounded-[6px] dark:hover:bg-white dark:hover:backdrop-blur dark:hover:bg-opacity-10`}>
                    <AiOutlineDelete className="h-5 w-5" />
                    <span className={`ml-2 text-sm md:text-base`}>Delete </span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}