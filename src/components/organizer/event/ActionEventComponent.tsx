'use client';
import {Button} from "@/components/ui/button";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
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

export function ActionEventComponent({ id, isPublish }: Props) {
    const router = useRouter();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button><IoMdMore className="w-5 h-5 text-gray-500 cursor-pointer"/></Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px]">
                <div className="flex flex-col p-1 w-full ">
                    <Badge
                        onClick={() => router.push(`/organizer/events/${id}`)}
                        className={`cursor-pointer hover:bg-gray-100 rounded-[6px] dark:hover:bg-white dark:hover:backdrop-blur dark:hover:bg-opacity-10`}>
                        <BiDetail className="h-5 w-5"/>
                        <span className={`ml-2 text-sm md:text-base`}>Event Detail</span>
                    </Badge>
                    <Badge className={`cursor-pointer hover:bg-gray-100 rounded-[6px] dark:hover:bg-white dark:hover:backdrop-blur dark:hover:bg-opacity-10`}>
                        <IoIosPower className="h-5 w-5"/>
                        <span className={`ml-2 text-sm md:text-base`}>
                            {isPublish ? 'Unpublished Event' : 'Published Event'}
                        </span>
                    </Badge>
                    <Badge className={`cursor-pointer hover:bg-gray-100 rounded-[6px] dark:hover:bg-white dark:hover:backdrop-blur dark:hover:bg-opacity-10`}>
                        <LiaEdit className="h-5 w-5"/>
                        <span className={`ml-2 text-sm md:text-base`}>Edit Event</span>
                    </Badge>

                    <Badge className={`cursor-pointer text-red-600 hover:bg-gray-100 rounded-[6px] dark:hover:bg-white dark:hover:backdrop-blur dark:hover:bg-opacity-10`}>
                        <AiOutlineDelete className="h-5 w-5"/>
                        <span className={`ml-2 text-sm md:text-base`}>Delete Event</span>
                    </Badge>

                </div>
            </PopoverContent>
        </Popover>
    );
}