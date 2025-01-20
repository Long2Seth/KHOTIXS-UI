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
    id: string;
    isPublish: string;
}

export function ActionEventComponent({id, isPublish}: Props) {
    const router = useRouter();

    const handlePublishToggle = async () => {
        const endpoint = isPublish
            ? `/event-ticket/api/v1/events/${id}/unpublish`
            : `/event-ticket/api/v1/events/${id}/publish`;

        try {
            const response = await fetch(endpoint, {
                method: 'PUT',
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Failed to toggle publish state:', error);
        }
    };

    const handleDelete = async () => {
        const endpoint = `/event-ticket/api/v1/events/${id}`;

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
                    onClick={() => router.push(`/organizer/events/${id}`)}
                    className={`cursor-pointer hover:bg-gray-100 rounded-[6px] dark:hover:bg-white dark:hover:backdrop-blur dark:hover:bg-opacity-10`}>
                    <BiDetail className="h-5 w-5"/>
                    <span className={`ml-2 text-sm md:text-base`}>Event Detail</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={handlePublishToggle}
                    className={`cursor-pointer hover:bg-gray-100 rounded-[6px] dark:hover:bg-white dark:hover:backdrop-blur dark:hover:bg-opacity-10`}>
                    <IoIosPower className="h-5 w-5"/>
                    <span className={`ml-2 text-sm md:text-base`}>
                        {isPublish ? 'Unpublished Event' : 'Published Event'}
                    </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => router.push(`/organizer/events/edit/${id}`)}
                    className={`cursor-pointer hover:bg-gray-100 rounded-[6px] dark:hover:bg-white dark:hover:backdrop-blur dark:hover:bg-opacity-10`}>
                    <LiaEdit className="h-5 w-5"/>
                    <span className={`ml-2 text-sm md:text-base`}>Edit Event</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={handleDelete}
                    className={`cursor-pointer text-red-600 hover:bg-gray-100 rounded-[6px] dark:hover:bg-white dark:hover:backdrop-blur dark:hover:bg-opacity-10`}>
                    <AiOutlineDelete className="h-5 w-5"/>
                    <span className={`ml-2 text-sm md:text-base`}>Delete Event</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}