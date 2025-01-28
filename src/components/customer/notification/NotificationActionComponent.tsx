'use client';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { IoMdMore } from "react-icons/io";
import React from "react";
import { useRouter } from "next/navigation";
import { AiOutlineDelete } from "react-icons/ai";
import { useDeleteNotificationByIdMutation} from "@/redux/feature/user/Notification";

type Props = {
    id: string | null;
}

export function NotificationActionComponent({ id }: Props) {
    const router = useRouter();
    const [deleteNotificationById] = useDeleteNotificationByIdMutation();

    const handleDelete = async () => {
        if (id) {
            try {
                await deleteNotificationById(id).unwrap();
                // Optionally, you can handle the response or update the state here
            } catch (error) {
                console.error('Failed to delete event:', error);
            }
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button><IoMdMore className="w-5 h-5 text-gray-500 cursor-pointer" /></Button>
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