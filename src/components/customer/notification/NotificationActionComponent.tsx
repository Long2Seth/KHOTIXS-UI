'use client';
import {Button} from "@/components/ui/button";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {IoMdMore} from "react-icons/io";
import React from "react";
import {useRouter} from "next/navigation";
import {BiDetail} from "react-icons/bi";
import {LiaEdit} from "react-icons/lia";
import {AiOutlineDelete} from "react-icons/ai";
import {IoIosPower} from "react-icons/io";
import {Badge} from "@/components/ui/badge";

type Props = {
    id: string | null;
}

export function NotificationActionComponent({id}: Props) {
    const router = useRouter();

    const handleDelete = async () => {
        const endpoint = `/communication/api/v1/notifications/publish-event/${id}`;

        try {
            const response = await fetch(endpoint, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Optionally, you can handle the response or update the state here
        } catch (error) {
            console.error('Failed to delete event:', error);
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button><IoMdMore className="w-5 h-5 text-gray-500 cursor-pointer"/></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="bg-white dark:bg-khotixs-background-dark dark:border-none rounded-[6px] shadow-lg"
            >
                <DropdownMenuItem
                    onClick={handleDelete}
                    className={`cursor-pointer text-red-600 hover:bg-gray-100 rounded-[6px] dark:hover:bg-white dark:hover:backdrop-blur dark:hover:bg-opacity-10`}>
                    <AiOutlineDelete className="h-5 w-5"/>
                    <span className={`ml-2 text-sm md:text-base`}>Delete </span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}